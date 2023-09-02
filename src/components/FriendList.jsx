import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friends}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
