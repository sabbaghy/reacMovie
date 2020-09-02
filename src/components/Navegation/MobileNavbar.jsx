import React from 'react';
import styled from 'styled-components';

import NavLinks from './NavLinks';

const MyMobileNavbar = styled.nav`
   width: 50vw;
   background: ${ props => props.theme.mainClr};
   
   margin-bottom: 15px;

   box-shadow: -5px 5px 2px ${ props => props.theme.secClr};
   align-self: flex-end;

   transition: all 1s ease;
   transform: translateX( ${ (props) => props.displayMobileNavbar ? "0%" : ("calc(100% + 5px)") });
   
   .nav-links{
      display:flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;

      height: 60vh;
      list-style: none;
   }

   .link {
      color: ${ props => props.theme.secClr};
      font-size: 1.5em;
      text-decoration: none;
      text-transform: uppercase;
   }
`;

const MobileNavbar = (props) => {
   return (
      <MyMobileNavbar displayMobileNavbar = { props.displayMobileNavbar }>
         <NavLinks isMobileLink ={true} />
      </MyMobileNavbar>
   )  
}

export default MobileNavbar;
