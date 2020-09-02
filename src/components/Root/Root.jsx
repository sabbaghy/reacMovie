import React from "react";
import styled from "styled-components";

const logo = "assets/img/logos/tg-logo.png";


const MainNav = styled.nav`
   height: 60px;
   padding: 0 2rem;
   background: #2f5f02;
   color: #f4f5f6;
   display: flex;
   flex-flow: row nowrap;
   align-items: center;
   -webkit-font-smoothing: antialiased;
`; 

const MainNavLogoLink = styled.a.attrs({
   href: "#",
   onClick: (e) => {
      e.preventDefault()
   }
})`
   display: flex;
   height: 100%;
   margin-right: 1.5rem;
   transition: all .3s ease;
   align-items: center;
   justify-content: center;
   text-decoration: none;
   text-transform: uppercase;
   color:#fff;

   > img{
      width: 100px;
      background: #f3fbec;
   }
`;


const Root = () =>{
   return (
      <MainNav>
         <MainNavLogoLink>
            <img src={logo}
               alt="Taguara Logo"
            />
         </MainNavLogoLink>
      </MainNav>
   )
};

export default Root;