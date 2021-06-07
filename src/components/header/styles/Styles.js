import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { FaTimes, FaBars } from "react-icons/fa";

export const NavBar = styled.nav`
    width: 100%;
    height: 64px;
    display:flex;
    position: relative;
    margin: 0;
    padding: 0;
    justify-content: space-between;
    align-content: center;
    background-color: #052339;
    border-bottom: 1px solid #40494f;

    /* @media (max-width: 768px) {
        flex-direction: row;
    } */
`
// For Computer Navbar
export const UnorderList = styled.ul`
    list-style: none;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    position: relative;
    margin-right: 32px;

    @media (max-width: 1280px) {
        width: 100%;
        height: 100vh;
        display: flex;
        position: absolute;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding-top: 16px;
        overflow-x: hidden;
        z-index: 1;
        background-color: #052339;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
  }

  @media (max-width: 375px) {
        padding-top: 100px;
  }

  @media (max-width: 332px) {
        padding-top: 150px;
  }
`

export const List = styled.li`
    display: flex;
    align-content: flex-end;
    margin: 0 8px;
    line-height: 64px;

    @media (max-width: 1280px) {
        /* background-color: red; */
        align-content: center;
        justify-content: center;
        margin: 0;
        /* border: 1px solid #fff; */
    }
`

export const Navlink = styled(NavLink)`
    padding: 8px 24px;
    text-align: center;
    color: white;
    text-decoration: none;
    font-weight: 500;
    border-bottom: 1px solid transparent;


    &:hover {
        color: #fba342;
        cursor: pointer;
        border-bottom: 1px solid #fba342;
        /* background-color: rebeccapurple; */
    }

`

export const WebsiteTitle = styled.h1`
    line-height: 64px;
    text-align: center;
    color: #fba342;
    font-weight: 500;
    margin-left: 32px;
    /* background-color: blanchedalmond; */

    &:hover {
        cursor: pointer;
    }

`

export const CloseIcon = styled(FaTimes)`
    display: none;
    @media (max-width: 1280px) {
        display: block;
        height: 64px;
        color: white;
        /* background-color: red; */
        margin-right: 24px;
        font-size: 14px;
        z-index: 2;
        opacity: 1;
        transition: all 0.7s ease;
    }
    

    &:hover {
        color: yellow;
        cursor: pointer;
    }
`

export const MenuIcon = styled(FaBars)`
    display: none;

    @media (max-width: 1280px) {
        display: block;
        height: 64px;
        color: white;
        /* background-color: red; */
        margin-right: 24px;
        font-size: 14px;
    }

    &:hover {
        color: yellow;
        cursor: pointer;
    }
`




