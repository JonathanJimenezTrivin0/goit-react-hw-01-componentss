import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <div className={styles.statistics}>
      {!!title && <h2 className={styles.statistics__title}>{title}</h2>}
      <ul className={styles.statistics__list}>
        {stats.map(stat => (
          <li key={stat.id} className={styles.statistics__item}>
            <span className={styles.statistics__label}>{stat.label}</span>
            <span className={styles.statistics__percentage}>
              {stat.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};
