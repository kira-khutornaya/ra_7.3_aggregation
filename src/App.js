import React, { Component } from 'react';
import './App.css';
import withAggregation from './components/withAggregation';
import MonthTable from './components/MonthTable';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';

const MonthTableWithAggregation = withAggregation(MonthTable, 'month', 'MMM');
const YearTableWithAggregation = withAggregation(YearTable, 'year', 'YYYY');
const SortTableWithAggregation = withAggregation(SortTable, '', 'YYYY-MM-DD');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(process.env.REACT_APP_DATA_URL)
      .then((res) => res.json())
      .then((json) => this.setState(json));
  }

  render() {
    const { list } = this.state;

    return (
      <div id="app">
        <MonthTableWithAggregation list={list} />
        <YearTableWithAggregation list={list} />
        <SortTableWithAggregation list={list} />
      </div>
    );
  }
}
