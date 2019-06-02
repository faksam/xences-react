// import libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';

// styles
import './HomePage.scss';

// components
import NewArrivals from '../../components/NewArrivals';
import TopContent from '../../components/TopContent';
import TrendingNow from '../../components/TrendingNow';

// interfaces

// helper functions

export class HomePage extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <TopContent />
        <NewArrivals />
        <TrendingNow />
      </React.Fragment>
    );
  }
}

export default HomePage;
