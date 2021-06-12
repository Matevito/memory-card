import Console from "./gameComponents/Console"
import CardsContainer from "./gameComponents/CardsContainer"
import React from "react"

const GameContainer = () => {
    const [historicRecord, set_historicRecord] = React.useState(0);
    const [currentCount, set_currentCount] = React.useState(0);


    const handle_cCount = (game_status) => {
        if(game_status === true){
            set_currentCount(current_n => current_n+1)
        }else{
            //todo:check historic record
            set_currentCount(0)
        }
    }
    return (
        <div className="row">
            {/*include console and the cards container*/}
            <Console 
            historic={historicRecord}
            cCount={currentCount}
            />
            <CardsContainer 
            count={handle_cCount}
            />
        </div>
    )
}
export default GameContainer