import React from "react"

const Card = (props) => {
    const [imgPath, set_imgPath] = React.useState("./loading.gif")
    const [pkmnName, set_pkmmName] = React.useState(props.id)

    return(
        <div div="col">
            <div className="card text-white bg-secondary ">
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