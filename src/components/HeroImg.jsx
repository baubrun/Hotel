import React from 'react'

const HeroImg = ({children, hero}) => {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}


HeroImg.defaultProps = {
    hero: "defaultHero"
}

export default HeroImg


