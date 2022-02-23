import "./Controls.css"

function Controls(props) {
    return (
        <div className="Controls">
            <h3>Filters:</h3>
            <button onClick={props.displayTop} >Only Top Rated</button>
        </div>
    );
}

export default Controls;