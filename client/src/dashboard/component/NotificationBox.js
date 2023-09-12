import React from 'react';
import '../style/dashboard.css';

function NotificationBox({ message, onClose }) {
  return (
    <div className="notification">
      <div className="notification-content mr-4">{message}</div>
      <button className="notification-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}

export default NotificationBox;
