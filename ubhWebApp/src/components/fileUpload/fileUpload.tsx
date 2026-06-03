import { Upload, FileText, Camera, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { useRef } from "react";
import classes from "./FileUpload.module.css";

type FileUploadVariant = 'click' | 'drag' | 'camera';

type FileUploadStatus = 'empty' | 'uploading' | 'success' | 'error';

type FileUploadProps = {
  variant?: FileUploadVariant;
  status?: FileUploadStatus;
  label?: string;
  description?: string;
  placeholder?: string;
  fileName?: string;
  progress?: string;
  accept?: string;
  error?: string;
  onChange?: (file: File | null) => void;
  onClear?: () => void;
  onRetry?: () => void;
}

export function FileUpload({
  variant = 'click',
  status = 'empty',
  label,
  description,
  placeholder,
  fileName,
  progress,
  accept,
  error,
  onChange,
  onClear,
  onRetry,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  let EmptyIcon = Upload;
  let placeholderText = placeholder ?? 'Click to browse';
  let descriptionText = description ?? 'Or drag & drop';

  if (variant === 'drag') {
    placeholderText = placeholder ?? 'Drag & drop a file here';
    descriptionText = description ?? 'Or click to browse';
  }

  if (variant === 'camera') {
    EmptyIcon = Camera;
    placeholderText = placeholder ?? 'Take a photo';
    descriptionText = description ?? 'Upload using camera';
  }
  
  const capture = variant === 'camera' ? 'environment' : undefined;

  const name = fileName ?? 'filename.jpg';
  const uploadText = progress ?? 'Uploading...';

  const labelElement = label ? (<span className={classes.label}>{label}</span>) : null;
  
  if (status == 'empty') {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && onChange) {
        onChange(file);
      }
    };

    return (
      <div className={classes.root}>
        {label && <span className={classes.label}>{label}</span>}
        <div
          className={classes.stateContainer}
          onClick={() => inputRef.current?.click()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files?.[0];
            if (file && onChange) {
              onChange(file);
            }
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className={classes.content}>
            <div className={classes.icon}>
              <EmptyIcon size={28} strokeWidth={2} />
            </div>
            <div className={classes.textGroup}>
              <span className={classes.primaryText}>{placeholderText}</span>
              <span className={classes.secondaryText}>{descriptionText}</span>
            </div>
          </div>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          capture={capture}
          hidden
          onChange={handleFileChange}
        />
        {error && <span className={classes.errorText}>{error}</span>}
      </div>
    );
  }

  if (status == 'uploading') {
    return (
      <div className={classes.root}>
        {labelElement}
        
        <div className={`${classes.stateContainer} ${classes.uploading}`}>
          <div className={classes.content}>
            <div className={classes.icon}>
              <FileText size={28} strokeWidth={2} />
            </div>

            <div className={classes.textGroup}>
              <span className={classes.primaryText}>{name}</span>
              <span className={classes.secondaryText}>{uploadText}</span>
            </div>
          </div>

          <button
            type="button"
            className={classes.clearButton}
            onClick={onClear}
          >
            <XCircle size={20} />
          </button>
        </div>
      </div>
    );
  }

  if (status == 'success') {
    return (
      <div className={classes.root}>
        {labelElement}
        
        <div className={`${classes.stateContainer} ${classes.success}`}>
          <div className={classes.content}>
            <div className={`${classes.icon} ${classes.successIcon}`}>
              <CheckCircle size={28} strokeWidth={2} />
            </div>

            <div className={classes.textGroup}>
              <span className={classes.primaryText}>Upload complete</span>
              <span className={classes.secondaryText}>{name}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status == 'error') {
    return (
      <div className={classes.root}>
        {labelElement}
        
        <div 
          className={`${classes.stateContainer} ${classes.error}`}
          onClick={() => onRetry?.()}
        >
          <div className={classes.content}>
            <div className={`${classes.icon} ${classes.errorIcon}`}>
              <AlertCircle size={28} strokeWidth={2} />
            </div>

            <div className={classes.textGroup}>
              <span className={classes.primaryText}>Upload failed</span>
              <span className={classes.secondaryText}>Try again</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}