import React, { Component } from 'react';
import styled from 'styled-components';


import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const MyNavbar = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;

   overflow-x: hidden;
`;

export class Navbar extends Component {

   state = {
      displayMobileNavbar: false
   }

   componentDidMount = () => {
      window.addEventListener('resize', this.checkAutoHideMobileNavbar)
   }

   componentWillUnmount = () => {
      window.removeEventListener('resize', this.checkAutoHideMobileNavbar)
   }


   toggleMobileNavbar = () => {
      this.setState( prevState => {
         return { displayMobileNavbar: !prevState.displayMobileNavbar }
      })
   }

   checkAutoHideMobileNavbar = () => {
      const screeWidth = window.innerWidth;

      if (this.state.displayMobileNavbar && screeWidth > 768 ) {
         this.setState({
            displayMobileNavbar: false
         })
      }
   }

   render() {
      return (
         <MyNavbar>
            <DesktopNavbar toggleMobileNavbar = {this.toggleMobileNavbar} />
            <MobileNavbar displayMobileNavbar = {this.state.displayMobileNavbar} />
         </MyNavbar>
      )
   }
}

export default Navbar
