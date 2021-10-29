import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function MonthTable({ list }) {
  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={nanoid()}>
              <td>{item.month}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

MonthTable.defaultProps = {
  list: [],
};

MonthTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.exact({
    month: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })),
};

export default MonthTable;
