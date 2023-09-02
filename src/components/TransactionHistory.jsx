import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transaction}>
      <thead className={styles.table}>
        <tr className={styles.table__title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map(item => (
          <tr key={item.id} className={styles.tr}>
            <td className={styles.td}>{item.type}</td>
            <td className={styles.td}>{item.amount}</td>
            <td className={styles.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
