import './App.css';
import {useEffect, useState} from "react";
import Heroes from "./components/heroes/Heroes";
import axios from "axios";
import HeroDetail from "./components/herodetails/HeroDetail";
import Message from "./components/message/Message";


function App() {
    const [heroes, setHeroes] = useState([]);
    const [selectedHero, setSelectedHero] = useState({id: '', name: ''})
    const [historySelect, setHistorySelect] = useState([]);

    useEffect(() => {
            axios({
                method: 'GET',
                url: 'https://60dff0ba6b689e001788c858.mockapi.io/heroes',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    setHeroes(response.data);
                    setHistorySelect(['HeroService: fetched heroes']);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        []
    );

    const handleSelectHero = (hero) => {
        setSelectedHero(hero);
        setHistorySelect([...historySelect, `HeroesComponent: Selected hero id=${hero.id}`]);
    };

    const clearHistorySelect = () => {
        setHistorySelect([]);
    }

    const handleHeroName = (evt) => {
        let editingHero = heroes.filter(hero => hero.id === selectedHero.id)[0];
        editingHero.name = evt.target.value;
        setHeroes([...heroes]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Tour of Heroes</h1>
            </header>
            <Heroes
                heroes={heroes}
                selectedHero={selectedHero}
                handleSelectHero={handleSelectHero}
            />
            {selectedHero.id !== '' ? <HeroDetail
                selectedHero={selectedHero}
                handleHeroName={handleHeroName}/> : ''}
            <Message
                historySelect={historySelect}
                clearHistorySelect={clearHistorySelect}
            />
        </div>
    );
}

export default App;
