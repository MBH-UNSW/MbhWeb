import { useEffect, useRef, useState } from 'react';
import { onIdTokenChanged } from 'firebase/auth';
import { Download, FileText } from 'lucide-react';

import { IconButton } from '../../components/buttons/IconButton';
import { auth } from '../../firebase/client';
import {
  fetchPatientDocuments,
  fetchDocumentBlob,
  saveDocumentBlob,
  formatDocumentSize,
  documentErrorMessage,
  type PatientDocument,
} from '../../api/patientDocumentsApi';

type DocumentState = {
  documents: PatientDocument[];
  loading: boolean;
  error: string;
};

export default function PatientDocuments({ patientId }: { patientId?: string }) {
  const [state, setState] = useState<DocumentState>({ documents: [], loading: true, error: '' });

  const [downloading, setDownloading] = useState<string | null>(null);
  const [downloadError, setDownloadError] = useState('');

  const downloadRequest = useRef<AbortController | null>(null);

  useEffect(() => {
    let request: AbortController | undefined;
    let active = true;

    const unsubscribe = onIdTokenChanged(
      auth,
      user => {
        if (!active) {
          return;
        }

        request?.abort();
        downloadRequest.current?.abort();
        downloadRequest.current = null;

        setDownloading(null);
        setDownloadError('');

        if (!patientId || !user || user.isAnonymous) {
          setState({
            documents: [],
            loading: false,
            error: !patientId
              ? 'No patient selected.'
              : 'Documents require a Firebase sign-in with clinician or nurse access.',
          });
          return;
        }

        const controller = new AbortController();
        request = controller;

        setState({ documents: [], loading: true, error: '' });

        fetchPatientDocuments(patientId, controller.signal)
          .then(documents => {
            if (active && !controller.signal.aborted) {
              setState({ documents, loading: false, error: '' });
            }
          })
          .catch(error => {
            if (active && !controller.signal.aborted) {
              setState({ documents: [], loading: false, error: documentErrorMessage(error) });
            }
          });
      },
      () => {
        if (!active) {
          return;
        }

        request?.abort();
        downloadRequest.current?.abort();

        if (active) {
          setState({
            documents: [],
            loading: false,
            error: 'Could not check your Firebase sign-in. Reload and try again.',
          });
        }
      },
    );

    return () => {
      active = false;
      request?.abort();
      downloadRequest.current?.abort();
      unsubscribe();
    };
  }, [patientId]);

  async function download(file: PatientDocument) {
    if (downloadRequest.current && !downloadRequest.current.signal.aborted) {
      return;
    }

    const controller = new AbortController();
    downloadRequest.current = controller;

    setDownloading(file.id);
    setDownloadError('');

    try {
      const blob = await fetchDocumentBlob(file);

      if (!controller.signal.aborted) {
        saveDocumentBlob(blob, file.fileName);
      }
    } catch (error) {
      if (!controller.signal.aborted) {
        setDownloadError(documentErrorMessage(error, true));
      }
    } finally {
      if (downloadRequest.current === controller && !controller.signal.aborted) {
        downloadRequest.current = null;

        setDownloading(null);
      }
    }
  }

  return (
    <div className="card documents-card">
      <div className="documents-scroll scroll-inactive">
        <table className="documents-table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Size</th>
              <th>Date Uploaded</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.documents.map(file => (
              <tr key={file.id}>
                <td>
                  <div className="document-name-cell">
                    <FileText size={16} />
                    {file.fileName}
                  </div>
                </td>
                <td>{formatDocumentSize(file.fileSizeBytes)}</td>
                <td>
                  {new Date(file.createdAt).toLocaleDateString('en-AU', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                  })}
                </td>
                <td>
                  <IconButton
                    icon={Download}
                    variant="text"
                    size="sm"
                    tooltip={`Download ${file.fileName}`}
                    disabled={downloading !== null}
                    onClick={() => download(file)}
                  />
                </td>
              </tr>
            ))}
            {state.loading && (
              <tr>
                <td colSpan={4} role="status">
                  Loading documents...
                </td>
              </tr>
            )}
            {state.error && (
              <tr>
                <td colSpan={4} role="alert">
                  {state.error}
                </td>
              </tr>
            )}
            {!state.loading && !state.error && state.documents.length === 0 && (
              <tr>
                <td colSpan={4}>No documents found in the last 30 days.</td>
              </tr>
            )}
            {downloadError && (
              <tr>
                <td colSpan={4} role="alert">
                  {downloadError}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
