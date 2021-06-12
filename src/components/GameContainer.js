import Console from "./gameComponents/Console"
import CardsContainer from "./gameComponents/CardsContainer"
import React from "react"

const GameContainer = () => {
    const [historicRecord, set_historicRecord] = React.useState(0);
    const [currentCount, set_currentCount] = React.useState(0);

    return (
        <div className="row">
            {/*include console and the cards container*/}
            <Console 
            historic={historicRecord}
            cCount={currentCount}
            />
            <CardsContainer />
        </div>
    )
}
export default GameContainer