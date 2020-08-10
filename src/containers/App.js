import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions';
import Header from '../components/Header';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};
class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render () {
    const { searchField, onSearchChange, robots, isPending, error } = this.props;
    const filtered_robots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
      return <h1>Loading</h1>;
    }

    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filtered_robots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
