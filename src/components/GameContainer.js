import Console from "./gameComponents/Console"
import CardsContainer from "./gameComponents/CardsContainer"

const GameContainer = () => {

    return (
        <div className="row">
            {/*include console and the cards container*/}
            <Console />
            <CardsContainer />
        </div>
    )
}
export default GameContainer