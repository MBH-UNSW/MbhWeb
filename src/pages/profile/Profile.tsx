import '../Page.css';
import './Profile.css';
import { Header3 } from '../../components/typography/Header';
import { Avatar } from '../../components/avatar/Avatar';

export default function ProfilePage() {
  return (
    <div className="page">
      <Header3>Profile</Header3>
      <div className='profile-card'>
      <div>
        <Avatar type='blank' size='display'/>
        <span>PLACEHOLDER (just for routing!)</span>
      </div>
      </div>
    </div>
  );
}
