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
    const [displayCount, set_displayCount] = React.useState(4);
    const [renderedCount, set_renderedCount] = React.useState(1)

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
            props.count(false)
            set_displayCount(4)
            set_selectedNums([])
            CreateCardsNums()
            set_renderedCount(1)
        } else {
            let newselectedNums = selectedNums.concat(selectedId)
            set_selectedNums(newselectedNums)
            shuffleCards()

            //run when all cards rendered have been choosen
            set_renderedCount(c_num => c_num + 1)


            console.log(renderedCount)
            if(renderedCount === displayCount){
                console.log("i happen")
                set_renderedCount(1)
                set_displayCount(c_num => c_num + 1)
                //todo: render new elements
                CreateCardsNums()
            }

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