// import libraries
import * as React from 'react';
import { Link } from 'react-router-dom';

// third-party libraries

// styles
import './NavigationBar.scss';

// components
import { Button, Dropdown, Navbar, Row, SearchForm } from 'react-materialize';

// interfaces

// helper functions

// fixtures
import { categories } from '../../store/modules/categories/fixtures';

const NavigationBar = () => {
  return (
    <Row>
      <div className="nav-extended">
        <Link to="/" className="brand-logo">
          <img src="https://res.cloudinary.com/faksam-soft/image/upload/v1559033087/logo_kq63d7.png" />
        </Link>
        <Navbar brand={<a href="" />}>
          <Link to="/" className="btn-flat blue-text">Home</Link>
          <Link to="/new" className="btn-flat blue-text">New Arrivals</Link>
          <Link to="/trending" className="btn-flat blue-text">Trending</Link>
          <Link to="/top-search" className="btn-flat blue-text">Top Search</Link>
          <Dropdown
            trigger={
              <Button className="dropdown-button-account btn-flat blue-text">
                <i className="material-icons">account_box</i>
              </Button>
            }>
            {
              categories.map(category => (
                <Link to={`/men/${category.name.toLowerCase()}`} key={category.id} >{category.name}</Link>
              ))
            }
          </Dropdown>
        </Navbar>
        <div className="nav-content">
          <Row>
            <div className="left">
              <Dropdown
                trigger={
                  <Button className="dropdown-button-shop btn-flat purple lighten-4 hoverable">Shop Women</Button>
                }
              >
                {
                  categories.map(category => (
                    <Link to={`/women/${category.name.toLowerCase()}`} key={category.id} >{category.name}</Link>
                  ))
                }
              </Dropdown>&nbsp;&nbsp;
            <Dropdown
                trigger={
                  <Button className="dropdown-button-shop btn-flat blue lighten-4 hoverable">Shop Men</Button>
                }>
                {
                  categories.map(category => (
                    <Link to={`/men/${category.name.toLowerCase()}`} key={category.id} >{category.name}</Link>
                  ))
                }
              </Dropdown>&nbsp;&nbsp;
          </div>
            <div className="right">
              <SearchForm />
              <Link to="/cart" className=" cart-btn btn-floating blue hoverable">
                <i className="material-icons">shopping_cart</i>
                <span className="badge red">4</span>
              </Link>
            </div>
          </Row>
        </div>
      </div>
    </Row>
  );
};

export default NavigationBar;
