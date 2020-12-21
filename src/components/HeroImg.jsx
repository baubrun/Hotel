import React from 'react'

const HeroImg = ({children, hero}) => {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}


export default HeroImg


