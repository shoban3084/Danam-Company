import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './TopBar.css';
import India from "../../assets/Flag/india.jpg";
import USA from '../../assets/Flag/usa.jpg';

export default function TopBar() {
  return (
    <div className="topbar-wrapper">
      <div style={{
        backgroundColor: '#22345F',
        color: 'white',
        padding: '15px 20px'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.875rem',
          whiteSpace: 'nowrap',
          overflowX: 'hidden'
        }}>
          <ul style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img src={USA} alt="USA" style={{ width: '24px', marginRight: '8px' }} />
              <span style={{
                backgroundColor: '#FACC15',
                color: '#22345F',
                padding: '2px 6px',
                borderRadius: '4px',
                fontWeight: 600
              }}>USA FLAG(609-672-9356)</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img src={India} alt="India" style={{ width: '24px', marginRight: '8px' }} />
              <span style={{
                backgroundColor: '#FACC15',
                color: '#22345F',
                padding: '2px 6px',
                borderRadius: '4px',
                fontWeight: 600
              }}>INDIA FLAG(+91 44 42156668)</span>
            </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
              <img src={India} alt="India" style={{ width: '24px', marginRight: '8px' }} />
              <span style={{
                backgroundColor: '#FACC15',
                color: '#22345F',
                padding: '2px 6px',
                borderRadius: '4px',
                fontWeight: 600
              }}>INDIA FLAG(+91 44 48562332)</span>
            </li>
          </ul>

          <ul style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <li><FaFacebook style={{ color: 'orange', cursor: 'pointer' }} /></li>
            <li><FaTwitter style={{ color: 'orange', cursor: 'pointer' }} /></li>
            <li><FaLinkedin style={{ color: 'orange', cursor: 'pointer' }} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
