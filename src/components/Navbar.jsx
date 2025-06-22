import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { StaticImage } from '../static/image';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NavbarTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const NavbarTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  margin: 0;

  @media (min-width: 786px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const NavbarContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const NavbarList = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;

const NavbarItem = styled.div`
  a {
    text-decoration: none;
    font-weight: 300;
    transition: 0.2s all ease-in;

    &:hover {
    border-bottom: 1px solid #7F37FC;
    color: #7F37FC
    }
  }
`;

const NavbarSeperator = styled.hr`
  height: 2px;
  margin: 16px 0;
`

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarTitleContainer>
          <img src={StaticImage.Logo} alt="logo-icon" className="logo_title" />
          <NavbarTitle>Webstract</NavbarTitle>
        </NavbarTitleContainer>

        <NavbarContentContainer>
          <NavbarList>
            <NavbarItem><Link to="/">Home</Link></NavbarItem>
            <NavbarItem><Link to="/feature">Feature</Link></NavbarItem>
            <NavbarItem><Link to="/pricing">Pricing</Link></NavbarItem>
            <NavbarItem><Link to="/api">API</Link></NavbarItem>
          </NavbarList>
          <img src={StaticImage.UserIcon} alt="user-icon" />
        </NavbarContentContainer>
      </NavbarContainer>

      <NavbarSeperator></NavbarSeperator>

      <section>
        <Outlet />
      </section>
    </>
  );
};

export default Navbar;
