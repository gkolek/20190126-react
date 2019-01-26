import React from 'react';

import Link from './Link.js'

const Header = props => {
    return (
        <header>
            {
                props.links.map(link => {
                    // return <Link  key={link.url} url={link.url} text={link.text}/>
                    return <p key={link.url} ><Link url={link.url} text={link.text}/></p>

                })
            }
        </header>
    )
}

export default Header