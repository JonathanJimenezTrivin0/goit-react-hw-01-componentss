import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats,
  followers,
  views,
  likes,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.card__description}>
        <img
          className={styles.card__img}
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className={styles.card__name}>{username}</p>
        <p className={styles.card__tag}>{tag}</p>
        <p className={styles.card__location}>{location}</p>
      </div>

      <ul className={styles.card__stats}>
        <li className={styles.card__list}>
          <span className={styles.card__label}>Followers</span>
          <span class={styles.card__quantity}>{followers}</span>
        </li>
        <li className={styles.card__list}>
          <span className={styles.card__label}>Views</span>
          <span class={styles.card__quantity}>{views}</span>
        </li>
        <li className={styles.card__list}>
          <span className={styles.card__label}>Likes</span>
          <span class={styles.card__quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
