import '../Page.css';
import './Login.css';
import { type FormEvent, useEffect, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../components/icons/Logo';
import { Header3, Header5, Header6 } from '../../components/typography/Header';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/buttons/Button';
import { auth } from '../../firebase/client';
import { useAuth } from '../../auth/useAuth';

// Replace these placeholders with credentials for a dedicated demo account.
// These values are visible in the browser, so never use a real staff account.
const NURSE_DEMO_EMAIL = 'clinician2@ubh.com.au';
const NURSE_DEMO_PASSWORD = 'clinician';

function getAuthErrorMessage(error: unknown) {
  if (!(error instanceof FirebaseError)) {
    return 'Something went wrong. Please try again.';
  }

  if (
    error.code === 'auth/invalid-credential' ||
    error.code === 'auth/user-not-found' ||
    error.code === 'auth/wrong-password'
  ) {
    return 'The email or password is incorrect.';
  }

  if (error.code === 'auth/too-many-requests') {
    return 'Too many attempts. Please wait a moment and try again.';
  }

  if (error.code === 'auth/invalid-email') {
    return 'Enter a valid email address.';
  }

  return 'Unable to sign in right now. Please try again.';
}

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, loading, profile, role, accessError } = useAuth();
  const [email, setEmail] = useState(NURSE_DEMO_EMAIL);
  const [password, setPassword] = useState(NURSE_DEMO_PASSWORD);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [formMessage, setFormMessage] = useState<string>();

  useEffect(() => {
    if (user && !loading && profile && role) {
      navigate('/home', { replace: true });
    }
  }, [navigate, user, loading, profile, role]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEmailError(undefined);
    setPasswordError(undefined);
    setFormMessage(undefined);

    if (!email.trim()) {
      setEmailError('Email is required.');
      return;
    }

    if (!password) {
      setPasswordError('Password is required.');
      return;
    }

    setIsSubmitting(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (error) {
      setPasswordError(getAuthErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleForgotPassword() {
    setEmailError(undefined);
    setPasswordError(undefined);
    setFormMessage(undefined);

    if (!email.trim()) {
      setEmailError('Enter your email first.');
      return;
    }

    setIsResettingPassword(true);

    try {
      await sendPasswordResetEmail(auth, email.trim());
      setFormMessage('Password reset email sent.');
    } catch (error) {
      setEmailError(getAuthErrorMessage(error));
    } finally {
      setIsResettingPassword(false);
    }
  }

  return (
    <div className="page login-page">
      <div className="login-wrapper">
        <div className="login-header">
          <Logo width={40} />
          <Header3>UNSW Bionic Heart</Header3>
        </div>
        <form className="user-card" onSubmit={handleLogin}>
          <Header5>Staff sign in</Header5>
          {accessError && <div role="alert">{accessError}</div>}
          {user && !loading && accessError && (
            <>
              <Button
                variant="text"
                onClick={() =>
                  void user
                    .getIdToken(true)
                    .catch(() => setEmailError('Unable to refresh your account. Please try again.'))
                }
              >
                Retry account check
              </Button>
              <Button
                variant="text"
                onClick={() =>
                  void signOut(auth).catch(() =>
                    setEmailError('Unable to sign out. Please try again.'),
                  )
                }
              >
                Use another account
              </Button>
            </>
          )}
          <Input
            variant="email"
            label="Enter your email"
            placeholder="name@example.com"
            value={email}
            onChange={value => setEmail(value.toString())}
            error={emailError}
            disabled={isSubmitting || loading}
          />
          <Input
            variant="password"
            label="Enter your password"
            placeholder="Enter your password"
            value={password}
            onChange={value => setPassword(value.toString())}
            error={passwordError}
            disabled={isSubmitting || loading}
          />
          {formMessage && <div className="login-message">{formMessage}</div>}
          <div className="forgot-password">
            <Button
              type="button"
              variant="text"
              size="xs"
              onClick={handleForgotPassword}
              disabled={isSubmitting || isResettingPassword}
            >
              Forgot your password?
            </Button>
          </div>
          <div style={{ margin: '0 auto', width: '250px' }}>
            <Button
              type="submit"
              variant="default"
              size="sm"
              disabled={isSubmitting || loading}
              fullWidth
            >
              {isSubmitting || loading ? 'Checking account...' : 'Login'}
            </Button>
          </div>
          <div className="login-divider">OR</div>
          <Header6>Clinician and nurse accounts are set up by an administrator.</Header6>
        </form>
      </div>
    </div>
  );
}
