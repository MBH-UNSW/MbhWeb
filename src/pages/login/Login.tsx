import '../Page.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../components/icons/Logo';
import { Header3, Header5, Header6 } from '../../components/typography/Header';
import { Input } from '../../components/input/Input';
import { ScanFace } from 'lucide-react';
import { Button } from '../../components/buttons/Button';

export default function LoginPage() {
  const navigate = useNavigate();
  function handleLogin() {
    localStorage.setItem('session', 'true');
    navigate('/home');
  }

  return (
    <div className="page login-page">
      <div className="login-wrapper">
        <div className="login-header">
          <Logo width={40} />
          <Header3>UNSW Bionic Heart</Header3>
        </div>
        <div className="user-card">
          <Header5>Are you a clinician or nurse? Sign in below!</Header5>
          <Input
            variant="single-line"
            label="Enter your user ID"
            placeholder="z1234567"
            leftIcon={<ScanFace size={16} />}
          />
          <Input variant="password" label="Enter your password" placeholder="✳✳✳✳✳✳" />
          <div className="forgot-password" onClick={() => navigate('/forgot')}>
            <Button variant="text" size="xs">
              Forgot your password?
            </Button>
          </div>
          <div style={{ margin: '0 auto', width: '250px' }}>
            <Button variant="default" size="sm" onClick={handleLogin} fullWidth>
              Login
            </Button>
          </div>
          <div className="login-divider">OR</div>
          <Header6>Don't have an account just yet? Contact us at ___ to be set up.</Header6>
        </div>
      </div>
    </div>
  );
}
