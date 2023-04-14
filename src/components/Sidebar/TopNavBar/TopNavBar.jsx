import { faMessage, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './TopNavBar.scss'
function TopNavBar() {
  return <div className='top-navbar'>
    <div
      onClick={() => (window.location.href = "/")}
      className="logo-header"
    >
      <div className="logo">Social Media</div>
    </div>
    <div className='top-navbar__actions'>
      <div className='navbar__actions-item'>
        <FontAwesomeIcon icon={faHeart} className="icon" />

      </div>
      <div className='navbar__actions-item'>
        <FontAwesomeIcon icon={faMessage} className="icon" />

      </div>
    </div>
  </div>
}

export default TopNavBar;