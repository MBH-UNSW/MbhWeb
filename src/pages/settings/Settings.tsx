import '../Page.css';
import './Settings.css';
 
import { Header2, Header4 } from '../../components/typography/Header';
import { Body1, Body2, Caption } from '../../components/typography/Body';
import { Button } from '../../components/buttons/Button';
import { ToggleSwitch } from '../../components/toggle/Toggle';
 
import { useState } from 'react';
 
import { Modal, PasswordInput } from '@mantine/core';
 
// Mock state until there's a real settings/account API to read from and write to.
export default function SettingsPage() {
  const [patientAlerts, setPatientAlerts] = useState(true);
  const [appointmentReminders, setAppointmentReminders] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
 
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
 
  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setPasswordError('');
  };
 
  const submitPasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError('Fill in all three fields.');
      return;
    }
 
    if (newPassword !== confirmPassword) {
      setPasswordError('New password and confirmation don’t match.');
      return;
    }
 
    console.log('change password requested');
    closePasswordModal();
  };
 
  const exportData = () => {
    console.log('export data requested');
  };
 
  const logOutEverywhere = () => {
    console.log('log out of all other sessions requested');
  };
 
  return (
    <div className="page">
      <div className="settings-header">
        <Header2>Settings</Header2>
      </div>
 
      <div className="settings-layout">
        <div className="card settings-card">
          <div className="settings-card-header">
            <Header4>Notifications</Header4>
            <Body2>We&apos;ll always flag anything urgent -- you choose what else you hear about.</Body2>
          </div>
 
          <div className="settings-row">
            <div className="settings-row-text">
              <Body1 bold>Patient status alerts</Body1>
              <Body2>Get notified when a patient&apos;s status changes to Warning or Unstable.</Body2>
            </div>
            <div className="settings-toggle-control">
              <ToggleSwitch
                label=""
                checked={patientAlerts}
                onChange={e => setPatientAlerts(e.currentTarget.checked)}
              />
            </div>
          </div>
 
          <div className="settings-row">
            <div className="settings-row-text">
              <Body1 bold>Appointment reminders</Body1>
              <Body2>Remind me shortly before each upcoming appointment.</Body2>
            </div>
            <div className="settings-toggle-control">
              <ToggleSwitch
                label=""
                checked={appointmentReminders}
                onChange={e => setAppointmentReminders(e.currentTarget.checked)}
              />
            </div>
          </div>
 
          <div className="settings-row">
            <div className="settings-row-text">
              <Body1 bold>Email notifications</Body1>
              <Body2>Send a copy of alerts and reminders to my email.</Body2>
            </div>
            <div className="settings-toggle-control">
              <ToggleSwitch
                label=""
                checked={emailNotifications}
                onChange={e => setEmailNotifications(e.currentTarget.checked)}
              />
            </div>
          </div>
 
          <div className="settings-row">
            <div className="settings-row-text">
              <Body1 bold>SMS notifications</Body1>
              <Body2>Send urgent alerts as a text message too.</Body2>
            </div>
            <div className="settings-toggle-control">
              <ToggleSwitch
                label=""
                checked={smsNotifications}
                onChange={e => setSmsNotifications(e.currentTarget.checked)}
              />
            </div>
          </div>
        </div>
 
        <div className="card settings-card">
          <div className="settings-card-header">
            <Header4>Security</Header4>
            <Body2>Keep your account protected.</Body2>
          </div>
 
          <div className="settings-row">
            <div className="settings-row-text">
              <Body1 bold>Password</Body1>
              <Body2>Change the password you use to sign in.</Body2>
            </div>
            <Button variant="outlined" size="sm" onClick={() => setIsPasswordModalOpen(true)}>
              Change Password
            </Button>
          </div>
        </div>
 
        <div className="card settings-card">
          <div className="settings-card-header">
            <Header4>Account</Header4>
            <Body2>Manage your data and active sessions.</Body2>
          </div>
 
          <div className="settings-row">
            <div className="settings-row-text">
              <Body1 bold>Export your data</Body1>
              <Body2>Download a copy of your patient and appointment records.</Body2>
            </div>
            <Button variant="outlined" size="sm" onClick={exportData}>
              Export Data
            </Button>
          </div>
 
          <div className="settings-row">
            <div className="settings-row-text">
              <Body1 bold>Log out of all devices</Body1>
              <Body2>Ends every other active session except this one.</Body2>
            </div>
            <Button variant="outlined" size="sm" onClick={logOutEverywhere}>
              Log Out Everywhere
            </Button>
          </div>
        </div>
      </div>
 
      <Modal
        opened={isPasswordModalOpen}
        onClose={closePasswordModal}
        size="md"
        padding="xl"
        title={<Header4 bold>Change Password</Header4>}
      >
        <div className="settings-password-form">
          <PasswordInput
            label="Current Password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          />
 
          <PasswordInput
            label="New Password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
 
          <PasswordInput
            label="Confirm New Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
 
          {passwordError && <Caption color="var(--mantine-color-ubhRed-8)">{passwordError}</Caption>}
 
          <Button variant="default" onClick={submitPasswordChange}>
            Update Password
          </Button>
        </div>
      </Modal>
    </div>
  );
}