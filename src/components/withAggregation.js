/* eslint react/prop-types: 0 */
/* eslint class-methods-use-this: [
  "error",
  { "exceptMethods": ["groupData", "formatData", "sortData"] }
] */

import React from 'react';
import moment from 'moment';

export default function withAggregation(WrappedComponent, group, formatType) {
  return class extends React.Component {
    groupData(data) {
      return data.reduce((acc, cur) => {
        const index = acc.findIndex((el) => el[group].get(group) === cur.date.get(group));

        if (index === -1) {
          acc.push({
            [group]: cur.date,
            amount: cur.amount,
          });
        } else {
          acc[index].amount += cur.amount;
        }

        return acc;
      }, []);
    }

    formatData(data) {
      const keyFormat = group || 'date';

      return data.map((el) => ({
        ...el,
        [keyFormat]: el[keyFormat].format(formatType),
      }));
    }

    sortData(data) {
      if (group) {
        return data.sort((a, b) => b[group].get(group) - a[group].get(group));
      }

      return data.sort((a, b) => b.date.diff(a.date));
    }

    render() {
      const { list } = this.props;
      const momentData = list.map((el) => ({ ...el, date: moment(el.date) }));
      let groupedData = momentData;

      if (group) groupedData = this.groupData(momentData);

      const sortedData = this.sortData(groupedData);
      const formattedData = this.formatData(sortedData);

      return <WrappedComponent {...this.props} list={formattedData} />;
    }
  };
}
