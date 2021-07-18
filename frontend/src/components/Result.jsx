
const Result = ({ percentage, Bg }) => {
    var x = Bg
    return(
        <div className="resultdiv">
            <span style={{color:x}}>
                <h2>Survival Chance: {percentage}%</h2>
            </span>
        </div>
    )
}

export default Result