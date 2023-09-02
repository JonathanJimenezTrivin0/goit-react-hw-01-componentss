import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.friends__list}>
      <span className={`status ${isOnline ? 'on' : 'off'}`}></span>
      <img
        className={styles.friends__avatar}
        src={avatar}
        alt="User avatar"
        width="68"
      />
      <p className={styles.friends__name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
