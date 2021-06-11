import React from "react"
import Card from "./Card"

const getRandomN = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const min_num = 1
const max_num = 15
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const CardsContainer = (props) => {
    const [displayCount, set_displayCount] = React.useState(6);
    const [selectedN, set_selectedN] = React.useState([])
    const [cards, set_cards] = React.useState([]);

    const get_randomNlist = () => {
        let list = [];
        //loop
        let i;
        for (i=0; i<displayCount; i++){
            let random_n  = getRandomN(min_num, max_num);
            while(list.includes(random_n) || selectedN.includes(random_n)){
                random_n = getRandomN(min_num, max_num)
            }
            list.push(random_n)
        }

        return list
    }

    const get_guess = (selectedId) => {
        console.log(selectedId)
        if (selectedN.includes(selectedId)){
            //break the game
            console.log("good game")
        } else {
            let newSelectedN = selectedN.concat(selectedId)
            set_selectedN(newSelectedN)
            console.log("a number that has not been already selected!")
        }
    }

    const CreateCards = () => {
        let randomNumbers = get_randomNlist()
        let new_cards = randomNumbers.map(number => {
            return(
                <Card key={number}
                id={number}
                getId={get_guess} />
            )
        })
        set_cards(new_cards)
    }

    const ShuffleCards = () => {
        const cloneCards = [...cards]
        let shuffled_array = shuffleArray(cloneCards)
        set_cards(shuffled_array)
    }

    //testing functions
    
    const test = () => {
        //this runs when cards container when it is rendered
        CreateCards()
    }


    return(
        <div className="row row-cols-6">
            {cards}
            <button onClick={test}>Start</button>
            <button onClick={ShuffleCards}>SHuffle</button>
        </div>
    )
}

export default CardsContainer