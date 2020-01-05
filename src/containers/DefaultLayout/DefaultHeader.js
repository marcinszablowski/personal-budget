import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand className="logo-margin"
          full={{ src: logo, width: 180, height: 77, alt: 'Happy Wallet Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Happy Wallet Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none ml-4" display="lg" />

        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            Cześć, Marcin
          </NavItem>

          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>

            <DropdownMenu right>
              
              <DropdownItem><i className="fa fa-user-o
"></i> Ustawienia</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-sign-out"></i> Wyloguj</DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
