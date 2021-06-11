

const Header = () => {

    return(
        <div className="row">
            <div className="navbar navbar-danger bg-danger">
                <div className="col-11 text-white">
                    <img src="./pokeball.png" alt="pokeball_img" style={{ height: 35 }}></img>
                    {/* pokeball image*/}
                    <span>Memory-card Game</span>
                </div>
                <div className="col-1 text-white">
                    {/*btn*/}
                    <a className="btn btn-light mx-auto" 
                    href="https://github.com/Matevito/memory-card"
                    target="_blank" rel="noreferrer">Code</a>
                </div>
            </div>
        </div>
    )
}

export default Header