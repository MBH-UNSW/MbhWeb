import '../Page.css';
import './Profile.css';
import { Header5, Header3, Header6 } from '../../components/typography/Header';
import { Body2 } from '../../components/typography/Body';
import { Avatar } from '../../components/avatar/Avatar';

type Role = 'Clinician' | 'Nurse';

export default function ProfilePage() {
  const role: Role = Math.random() > 0.5 ? "Clinician" : "Nurse";
  const title = role === "Clinician" ? "Dr." : "";
  const name = "Asna Hassan";
  const idNumber = 888;
  const status = "online"; // or "offline"
  const department = "Cardiac Care";
  const specialty = "Cardiology";
  const position = "Registered Nurse"; // obv wouldnt exist for dr
  const email = "asna.hassan@victorchang.com";
  const lastLogin = "18 Sep 2026, 9:42 PM";
  
  return (
    <div className="page">
      <Header3>Profile</Header3>
      <div className='profile-card'>
        <div className='profile-picture-details'>
          <Avatar type='blank' size='display'/>
          <div className='profile-details'>
            <Header5>{title && `${title} `}{name}</Header5>
            <Header6>Staff ID: {idNumber} | {role}</Header6>
            <div className={`status-${status}`}>
              <div className="status-dot" />
              <Body2>{status === 'online' ? 'Online' : 'Offline'}</Body2>
            </div>
          </div>
        </div>
      </div>
      <div className='profile-card-grid'>
        <div className='profile-card'>
          <Header5>Professional Information</Header5>
          <div className='profile-details'>
            <Body2>Department: {department}</Body2>
            {role === "Clinician" && (<Body2>Specialty: {specialty}</Body2>)}
            {role === "Nurse" && (<Body2>Position: {position}</Body2>)}
          </div>
        </div>
        <div className='profile-card'>
          <Header5>Account</Header5>
          <div className='profile-details'>
            <Body2>Email: {email}</Body2>
            <Body2>Account Status: Active</Body2>
            <Body2>Last Login: {lastLogin}</Body2>
          </div>
        </div>
      </div>
    </div>
  );
}
