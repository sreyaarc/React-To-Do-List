import "./App.css"
export default function Container() {
    return (
        <div className="mainContainer">
            <div className="subContainer">
                <h2>To-Do List</h2>
                <div className="inputArea">
                    <input name="input" placeholder="Enter your task"/>
                    <button type="submit" className="btn">ADD</button>
                </div>
            </div> 
        </div>
    )
}