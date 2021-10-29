import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function SortTable({ list }) {
  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={nanoid()}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

SortTable.defaultProps = {
  list: [],
};

SortTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.exact({
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })),
};

export default SortTable;
