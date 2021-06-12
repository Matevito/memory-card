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
    const [selectedNums, set_selectedNums] = React.useState([])
    const [cardsNums, set_cardsNums] = React.useState([])

    const get_randomNlist = () => {
        let list = [];
        //loop
        let i;
        for (i=0; i<displayCount; i++){
            let random_n  = getRandomN(min_num, max_num);
            while(list.includes(random_n) || selectedNums.includes(random_n)){
                random_n = getRandomN(min_num, max_num)
            }
            list.push(random_n)
        }

        return list
    }

    const shuffleCards = () => {
        const cloneCardsNums = [...cardsNums]
        let shuffled_nums = shuffleArray(cloneCardsNums)
        set_cardsNums(shuffled_nums)
    }

    const CreateCardsNums = () => {
        set_cardsNums(get_randomNlist)
    }


    const get_guess = (selectedId) => {

        if (selectedNums.includes(selectedId)){
            //todo: break the game
            props.count(false)
            set_displayCount(6)
            set_selectedNums([])
            CreateCardsNums()
        } else {
            let newselectedNums = selectedNums.concat(selectedId)
            set_selectedNums(newselectedNums)
            shuffleCards()
            props.count(true)
        }
    }

     //testing functions
    
     const test = () => {
        CreateCardsNums()
        //this runs when cards container when it is rendered
    }

    return(
        <div className="row row-cols-6">
            {cardsNums.map(number => {
                return(
                    <Card key={number}
                    id={number}
                    getId={get_guess} />)
            })
        }
            <button onClick={test}>Start</button>
        </div>
    )
}

export default CardsContainer