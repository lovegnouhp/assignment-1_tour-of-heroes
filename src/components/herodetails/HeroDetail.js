import React from "react";
import './HeroDetail.css'

const HeroDetail = ({selectedHero, handleHeroName}) => {
    return (
        <div>
            <h2>{selectedHero.name.toUpperCase()} Details</h2>
            <div><span>id: </span>{selectedHero.id}</div>
            <div>
                <label htmlFor="hero-name">Hero name: </label>
                <input id="hero-name" value={selectedHero.name} onChange={handleHeroName}/>
            </div>
        </div>

    );
};

export default HeroDetail;