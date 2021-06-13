const Console = (props) => {

    return(
        <div className="row">
            
            {/*Historic record*/}
            <span>Historic Record: {props.historic}</span>

            {/*Current count*/}
            <span>Current Count: {props.cCount}</span>

        </div>
    )
}

export default Console