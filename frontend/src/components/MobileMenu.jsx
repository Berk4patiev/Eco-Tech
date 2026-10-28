
import './MobileMenu.css';

function MobileMenu({ isOpen, onClose }) {
  return (
    <aside className={`sideMenu ${isOpen ? 'open' : ''}`}>
      <button className="closeButton" aria-label="Close menu" onClick={onClose}>
        ✕
      </button>

      <a href="#" onClick={onClose}>Home</a>
      <a href="#" onClick={onClose}>About</a>
      <a href="#" onClick={onClose}>Contact</a>
    </aside>
  );
}

export default MobileMenu;