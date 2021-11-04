import React from "react";
import './Heroes.css';

const Heroes = ({heroes, selectedHero, handleSelectHero}) => {
    return (
        <div>
            <h2 className="heroes__title">My Heroes</h2>
            <ul className="heroes">
                {heroes.map((hero) => (
                    <li className={selectedHero.id === hero.id ? "selected" : ""}
                        key={hero.id}
                        onClick={() => handleSelectHero(hero)}
                    >
                        <span className="badge">{hero.id}</span> {hero.name}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Heroes;