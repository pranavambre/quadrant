import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Route, Link } from "react-router-dom";

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 175px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 0;
  left:75px;      /* Stay on left*/
  background: #E6E6E6;
  ;
  color:#fff;
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePath: '/options',
          items: [
            {
              path: '/workflow', /* path is used as id to check which NavItem is active basically */
              name: 'Workflows',
              key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
            },
            {
              path: '/timelines',
              name: 'Timelines',
              key: 2
            },
            {
              path: '/options',
              name: 'Options',
              key: 3
            },
            {
                path: '/designs',
                name: 'Designs',
                key: 4
            },
            {
                path: '/packs',
                name: 'Packs',
                key: 5
            },
            {
                path: '/tracker',
                name: 'Tracker',
                key: 6
            },
          ]
        }  
      }

      onItemClick = (path) => {
          this.setState({active: path})
      }
    render() {
        const {items, activePath} = this.state;
        return (
            <StyledSideNav>
                {
                    /* items = just array AND map() loops thru that array AND item is param of that loop */
                    items.map((item) => {
                    /* Return however many NavItems in array to be rendered */
                return (
                <NavItem path={item.path} name={item.name} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key}/>
        
            )
          })
                }
            </StyledSideNav>
        );
      }
}
const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    padding-top:40px;
    font-size: 1.7em;
    text-align:center;
    font-weight:300;
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    } 

  }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const {path, onItemClick} = this.props;
        onItemClick(path);
    }
    render() {
        const { active } = this.props;
      return (
        <StyledNavItem active={active}>
            <Link to={this.props.path} className={this.props.name} placeholder={this.props.name} onClick={this.handleClick}>
                <NavName>{this.props.name}</NavName>
            </Link>
        </StyledNavItem>
      );
    }
  }

  const NavName = styled.div`
    font-size:14px;
    color:#000;
    text-align:center; 
    padding-left:30px;
    padding-top:70px;
    color: ${(props) => props.active ? "black" : "#000"};
  `;

export default class Sidemenu extends React.Component {
  render() {
    return (
        <SideNav></SideNav>
    );
  }
}