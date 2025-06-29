import backgroundImage from '../../assets/image3.jpg';
import './FactCounter.css';
import CountUp from 'react-countup';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GroupsIcon from '@mui/icons-material/Groups';

const stats = [
  { number: 15, label: 'Years Experience', icon: <AccessTimeIcon className="fact-icon" /> },
  { number: 45, label: 'Projects', icon: <WorkIcon className="fact-icon" /> },
  { number: 15, label: 'Happy Customers', icon: <EmojiEmotionsIcon className="fact-icon" /> },
  { number: 50, label: 'Our Expert Staffs', icon: <GroupsIcon className="fact-icon" /> },
];

export default function FactCounter() {
  return (
    <section
      className="fact-counter"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="container">
          <div className="row">
            {stats.map((item, index) => (
              <div className="column" key={index}>
                <div className="count-box">
                  <div className="icon">{item.icon}</div>
                  <div className="count-number">
                    <CountUp end={item.number} duration={2} />
                    <span className="plus">+</span>
                  </div>
                  <div className="count-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
