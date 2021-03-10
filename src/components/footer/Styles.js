import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
    width: 100%;
    min-height: 64px;
    background: #031a2a;
    color: #eee;
    line-height: 64px;
    padding: 0 32px;
    display: block;
    position: relative;
    bottom: 0;
`

export const FooterDiv = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;

    @media (max-width: 1280px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const FooterLinkDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    align-content: center;

    @media (max-width: 1280px) {
        justify-content: center;
    }
`

export const FooterLink = styled(Link)`
    height: auto;
    padding: 8px 16px;
    margin: 0 8px;
    color: white;
    display: inline;
    position: relative;
    text-decoration: none;

    &:hover{
        color: yellow;
    }
`

export const CopyrightDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    align-content: center;

    @media (max-width: 1280px) {
        justify-content: center;
    }
`

export const CopyrightText = styled.p`
    color: white;
    font-size: 12px;
    margin-right: 32px;
    display: inline-block;
    height: 64px;
    line-height: 64px;
    white-space: nowrap;
    font-family: Ubuntu,sans-serif;
    -webkit-font-smoothing: antialiased;

    @media (max-width: 1280px) {
        margin-right: 0;
    }
`