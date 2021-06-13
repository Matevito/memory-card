import React, { useEffect } from "react"

const Card = (props) => {
    const [imgPath, set_imgPath] = React.useState("./loading.gif")
    const [pkmnName, set_pkmmName] = React.useState(props.id)

    useEffect(()=> {
        fetchPkmData()
    })

    const fetchPkmData = () => {
        const url = "https://pokeapi.co/api/v2/pokemon/"+props.id
        fetch(url, {mode:"cors"})
            .then(response => response.json())
            .then(response => {
                set_pkmmName(response.name.toUpperCase())
                //set_imgPath(response.sprites.versions["generation-v"]["black-white"].animated.front_default)
                set_imgPath(response.sprites.front_default)
            })
    }

    const returnGuess = () => {
        props.getId(props.id)
    }

    return(
        <div div="col">
            <div className="card text-white bg-secondary" onClick={returnGuess}>
                <img src={imgPath} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">
                        {pkmnName}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Card