import React from 'react'
import { Footer, FooterDiv, FooterLinkDiv, FooterLink, CopyrightDiv, CopyrightText } from './Styles'

const WebFooter = () => {
    return (
        <Footer>
            <FooterDiv>
                <FooterLinkDiv>
                    <FooterLink to = '/'>Link1</FooterLink>
                    <FooterLink to = '/'>Link2</FooterLink>
                    <FooterLink to = '/'>Link3</FooterLink>
                    <FooterLink to = '/'>Link4</FooterLink>
                    <FooterLink to = '/'>Link5</FooterLink>

                </FooterLinkDiv>
                <CopyrightDiv >
                    <CopyrightText>&copy; {new Date().getFullYear()} Amcthecoder. All rights reserved</CopyrightText>
                </CopyrightDiv>
            </FooterDiv>
        </Footer>
    )
}

export default WebFooter
