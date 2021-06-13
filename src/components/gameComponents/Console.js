const Console = (props) => {

    return(
        <div className="row">
            
            {/*Historic record*/}
            <span>Historic score-record: {props.historic}</span>

            {/*Current count*/}
            <span>Score: {props.cCount}</span>

        </div>
    )
}

export default Console