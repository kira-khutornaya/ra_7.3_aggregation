import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function YearTable({ list }) {
  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={nanoid()}>
              <td>{item.year}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

YearTable.defaultProps = {
  list: [],
};

YearTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.exact({
    year: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })),
};

export default YearTable;
