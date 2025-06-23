import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar-wrapper">
      <div style={{
        backgroundColor: '#22345F',
        color: 'white',
        padding: '30px 160px'
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
          overflowX: 'auto'
        }}>
          <ul style={{ display: 'flex', gap: '240px', alignItems: 'center', flexWrap: 'wrap' }}>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img src="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg" alt="USA" />
              <span style={{
                backgroundColor: '#FACC15',
                color: '#22345F',
                padding: '2px 6px',
                borderRadius: '4px',
                fontWeight: 600
              }}>609-936-0332</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img src="https://lipis.github.io/flag-icon-css/flags/4x3/in.svg" alt="India" />
              <span style={{
                backgroundColor: '#FACC15',
                color: '#22345F',
                padding: '2px 6px',
                borderRadius: '4px',
                fontWeight: 600
              }}>609-936-0332</span>
            </li>
          </ul>
          <ul style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <li><FaFacebook style={{ color: 'orange', cursor: 'pointer' }} /></li>
            <li><FaTwitter style={{ color: 'orange', cursor: 'pointer' }} /></li>
            <li><FaLinkedin style={{ color: 'orange', cursor: 'pointer' }} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
