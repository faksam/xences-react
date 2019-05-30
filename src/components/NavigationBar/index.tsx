// import libraries
import * as React from 'react';

// third-party libraries

// styles
import './NavigationBar.scss';

// components
import { Button, Dropdown, Navbar, NavItem, Row, SearchForm } from 'react-materialize';

// interfaces

// helper functions

// fixtures
import { categories } from '../../store/modules/categories/fixtures';

const NavigationBar = () => {
  return (
    <Row>
      <div className="nav-extended">
        <NavItem className="brand-logo" href="/">
          <img src="https://res.cloudinary.com/faksam-soft/image/upload/v1559033087/logo_kq63d7.png" />
        </NavItem>
        <Navbar brand={<a href="" />}>
          <NavItem className="btn-flat blue-text">Home</NavItem>
          <NavItem className="btn-flat blue-text">New Arrivals</NavItem>
          <NavItem className="btn-flat blue-text">Trending</NavItem>
          <NavItem className="btn-flat blue-text">Top Search</NavItem>
          <Dropdown
            trigger={
              <Button className="dropdown-button-account btn-flat blue-text">
                <i className="material-icons">account_box</i>
              </Button>
            }>
            {
              categories.map(category => (
                <NavItem key={category.id} href={`/men/${category.name.toLowerCase()}`} >{category.name}</NavItem>
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
                    <NavItem key={category.id} href={`/women/${category.name.toLowerCase()}`} >{category.name}</NavItem>
                  ))
                }
              </Dropdown>&nbsp;&nbsp;
            <Dropdown
                trigger={
                  <Button className="dropdown-button-shop btn-flat blue lighten-4 hoverable">Shop Men</Button>
                }>
                {
                  categories.map(category => (
                    <NavItem key={category.id} href={`/men/${category.name.toLowerCase()}`} >{category.name}</NavItem>
                  ))
                }
              </Dropdown>&nbsp;&nbsp;
          </div>
            <div className="right">
              <SearchForm />
              <NavItem href="/cart" className=" cart-btn btn-floating blue hoverable">
                <i className="material-icons">shopping_cart</i>
                <span className="badge red">4</span>
              </NavItem>
            </div>
          </Row>
        </div>
      </div>
    </Row>
  );
};

export default NavigationBar;
