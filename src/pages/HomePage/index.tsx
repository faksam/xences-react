// import libraries
import * as React from 'react';

// third-party libraries
import { connect } from 'react-redux';

// Import Materialize
import * as M from 'materialize-css';

// styles
import './HomePage.scss';

// components
import NavigationBar from '../../components/NavigationBar';
import NewArrivals from '../../components/NewArrivals';
import TopContent from '../../components/TopContent';
import TrendingNow from '../../components/TrendingNow';

// interfaces

// helper functions

export class HomePage extends React.Component<{}> {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <NavigationBar />
          <TopContent />
          <NewArrivals />
          <TrendingNow />
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
