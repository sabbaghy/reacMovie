import React from 'react'
import styled from "styled-components";
import NavLinks from "./NavLinks";

const Logo = "assets/img/logos/favicon.png";

const MyDesktopNavbar = styled.nav`
   padding: 0 2rem;

   height: 70px;

   background: ${ props => props.theme.mainClr};
   color: ${ props => props.theme.secClr};

   display: flex;
   flex-flow: row nowrap;
   justify-content: space-between;
   align-items: center;

   box-shadow: 0 5px 2px ${ props => props.theme.secClr};
   
   .logo{
      font-size: 1.6em;
      text-shadow: 2px 2px 1px ${ props => props.theme.txtClrLight};
      line-height: 1.1;
   }

   .nav-links{
      display:flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;

      width: 35vw;
      list-style: none;
    
      @media screen and (max-width: 768px) {
         transition: all 5s ease;
         display:none;
      }
   }

   .link {
      
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;

      height: 70px;

      color: ${ props => props.theme.secClr};
      font-size: 1em;
      padding: 0 1em;
      text-decoration: none;
      text-transform: uppercase;

      &:focus {
         background: rgba(0,0,0, .1);
         outline: none;
      }

      &::after {
         content: "";
         height: 2px;
         width: 0;
         background: ${ props => props.theme.secClr};
         display: block;
         transition: all .5s ease;
      }

      &:hover::after {
         width: 150%;
      }
   }
`; 

const MyMobileNavButton = styled.button`
   background: transparent;
   width: 2em;
   height: 2em;
   border: none;
   display: none;

   transition: all 1s ease;

   @media screen and (max-width: 768px) {
      display:block;
   }

   .toggle{
      width:100%;
      background:red;
   }
`;

// const MainNavLogoLink = styled.a.attrs({
//    href: "#",
//    onClick: (e) => {
//       e.preventDefault()
//    }
// })`
//    display: flex;
//    height: 100%;
//    margin-right: 1.5rem;
//    transition: all .3s ease;
//    align-items: center;
//    justify-content: center;
//    text-decoration: none;
//    text-transform: uppercase;
//    color:#fff;

//    > img{
//       width: 100px;
//       background: #f3fbec;
//    }
// `;


const DesktopNavbar = (props) => {
   return (
      <MyDesktopNavbar>
         <div className="logo"><span>Taguara</span><br />Digital</div>

         <NavLinks />

         <MyMobileNavButton
            onClick = { props.toggleMobileNavbar }
         >
            <img
               className="toggle"
               src={Logo}
               alt=""
            />
         </MyMobileNavButton>
      </MyDesktopNavbar>
   )
}

export default DesktopNavbar;