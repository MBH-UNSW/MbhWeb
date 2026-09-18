import '../Page.css';
import './Profile.css';
import { useState } from 'react';
import { Modal } from '@mantine/core';
import { UserPen } from 'lucide-react';
import { Header3, Header5, Header6 } from '../../components/typography/Header';
import { Body2 } from '../../components/typography/Body';
import { Avatar } from '../../components/avatar/Avatar';
import { IconButton } from '../../components/buttons/IconButton';
import { DropdownList } from '../../components/dropdownList/DropdownList';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/buttons/Button';

type Role = 'Clinician' | 'Nurse';
type Status = 'online' | 'offline';

export default function ProfilePage() {
  const [role] = useState<Role>(() => (Math.random() > 0.5 ? 'Clinician' : 'Nurse'));
  const [title, setTitle] = useState(role === 'Clinician' ? 'Dr.' : '');
  const [name, setName] = useState('Asna Hassan');
  const [department, setDepartment] = useState('Cardiac Care');
  const [specialty, setSpecialty] = useState('Cardiology');
  const [position, setPosition] = useState('Registered Nurse'); // obv wouldnt exist for dr
  const [email, setEmail] = useState('asna.hassan@victorchang.com');

  const idNumber = 888;
  const status: Status = 'online';
  const lastLogin = '18 Sep 2026, 9:42 PM';

  const [editOpened, setEditOpened] = useState(false);

  const [editTitle, setEditTitle] = useState(title);
  const [editName, setEditName] = useState(name);
  const [editDepartment, setEditDepartment] = useState(department);
  const [editSpecialty, setEditSpecialty] = useState(specialty);
  const [editPosition, setEditPosition] = useState(position);
  const [editEmail, setEditEmail] = useState(email);

  const handleEditOpen = () => {
    setEditTitle(title);
    setEditName(name);
    setEditDepartment(department);
    setEditSpecialty(specialty);
    setEditPosition(position);
    setEditEmail(email);
    setEditOpened(true);
  };

  const handleSave = () => {
    setTitle(editTitle);
    setName(editName);
    setDepartment(editDepartment);
    setSpecialty(editSpecialty);
    setPosition(editPosition);
    setEmail(editEmail);
    setEditOpened(false);
  };

  return (
    <div className="page">
      <Header3>Profile</Header3>
      <div className="profile-card">
        <div className="profile-picture-details">
          <Avatar type="blank" size="display" />
          <div className="profile-details">
            <div className="profile-name">
              <Header5>
                {title && `${title} `} {name}
              </Header5>
              <IconButton
                icon={UserPen}
                tooltip="Edit Profile"
                variant="text"
                size="md"
                onClick={handleEditOpen}
              />
            </div>
            <Header6>
              Staff ID: {idNumber} | {role}
            </Header6>
            <div className={`status-${status}`}>
              <div className="status-dot" />
              <Body2>{status === 'online' ? 'Online' : 'Offline'}</Body2>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-card-grid">
        <div className="profile-card">
          <Header5>Professional Information</Header5>
          <div className="profile-details">
            <Body2>Department: {department}</Body2>
            {role === 'Clinician' && <Body2>Specialty: {specialty}</Body2>}
            {role === 'Nurse' && <Body2>Position: {position}</Body2>}
          </div>
        </div>
        <div className="profile-card">
          <Header5>Account</Header5>
          <div className="profile-details">
            <Body2>Email: {email}</Body2>
            <Body2>Account Status: Active</Body2>
            <Body2>Last Login: {lastLogin}</Body2>
          </div>
        </div>
      </div>
      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        title="Edit Profile"
        centered
        size="md"
      >
        <div className="edit-profile-form">
          {role === 'Clinician' && (
            <DropdownList
              label="Title"
              placeholder="Select title"
              value={editTitle || null}
              onChange={value => setEditTitle(value ?? '')}
              data={['Dr.', 'Prof.', 'A/Prof.', 'Mr.', 'Ms.', 'Mrs.', 'Miss', 'Mx.']}
            />
          )}
          {role === 'Nurse' && (
            <DropdownList
              label="Title"
              placeholder="Select title"
              value={editTitle || null}
              onChange={value => setEditTitle(value ?? '')}
              data={['Mr.', 'Ms.', 'Mrs.', 'Miss', 'Mx.']}
            />
          )}
          <Input
            label="Name"
            placeholder="Enter your name"
            variant="single-line"
            value={editName}
            onChange={value => setEditName(value.toString())}
          />
          <Input
            label="Department"
            placeholder="Enter your department"
            variant="single-line"
            value={editDepartment}
            onChange={value => setEditDepartment(value.toString())}
          />
          {role === 'Clinician' && (
            <Input
              label="Specialty"
              placeholder="Enter your specialty"
              variant="single-line"
              value={editSpecialty}
              onChange={value => setEditSpecialty(value.toString())}
            />
          )}
          {role === 'Nurse' && (
            <Input
              label="Position"
              placeholder="Enter your position"
              variant="single-line"
              value={editPosition}
              onChange={value => setEditPosition(value.toString())}
            />
          )}
          <Input
            label="Email"
            placeholder="Enter your email"
            variant="email"
            value={editEmail}
            onChange={value => setEditEmail(value.toString())}
          />
          <div className="edit-profile-form-buttons">
            <Button variant="default" size="sm" onClick={() => setEditOpened(false)}>
              Cancel
            </Button>
            <Button variant="default" size="sm" onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
