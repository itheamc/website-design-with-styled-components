import React, { useState } from 'react'
import { List, NavBar, UnorderList, Navlink, WebsiteTitle, CloseIcon, MenuIcon } from '../styles/Styles'


const pages = ['Home', 'JavaScript', 'ReactJs', 'Express', 'HTML', 'CSS', 'Java', 'Android Development'];

const Navigation = () => {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);



    return (
        <NavBar>
            <WebsiteTitle>Title of the web</WebsiteTitle>
           <UnorderList click = {click}>
               {pages.map(page => {
                   return (
                        <List>
                            <Navlink to = '/' onClick = {handleClick}>{page}</Navlink>
                        </List>
                   );
               })}
           </UnorderList>
           {click ? <CloseIcon onClick = {handleClick} /> : <MenuIcon onClick = {handleClick} />}
           
        </NavBar>
    )
}

export default Navigation
