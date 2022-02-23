import "./Controls.css"

function Controls(props) {
    return (
        <div className="Controls">
            <h3>Filters:</h3>
            <button onClick={ () => props.displayTop(8) } >Only 8 and above</button>
            <button onClick={ () => props.displayTop(9) } >Only 9 and above</button>
        </div>
    );
}

export default Controls;