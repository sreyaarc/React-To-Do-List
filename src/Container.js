import "./App.css"
import {useState, useEffect} from "react"
export default function Container() {
    const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [totalTasks, setTotalTasks] = useState(0);
    const [completedTasks, setCompletedTaks] = useState(0);
    const [msg, setMsg] = useState("");

    function handleChange(e) {
        setInputText(e.target.value)
    };
    function addItems(e) {
        console.log(e.target);
        setItems(prevItems => {
            return [...prevItems, inputText]
        });
        setTotalTasks(totalTasks+1);
        setInputText("")
    };
    function deleteItem(e) {
        console.log(e.target.id)
        setClicked(!clicked);
        setTimeout(setItems(prevItems => {
            return prevItems.filter((item, idx) => {
                return idx != e.target.id
            });
        }), 2000);
        setCompletedTaks(completedTasks+1);
    };
    useEffect(() => {
        console.log(items)
    }, [items]);

    useEffect(() => {
        if(totalTasks != 0 && completedTasks != 0 && totalTasks===completedTasks) {
            setTimeout(() => {
                setMsg("Hurray!! You have completed all of your tasks!!");
            }, 500);
            
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            
        }
    })

    return (
        <div className="mainContainer">
            <div className="subContainer">
                <h2>To-Do List</h2>
                <div className="inputArea">
                    <input name="input" placeholder="Enter your task" onChange={handleChange} value={inputText} autoComplete="off"/>  {/* whenever the input is changed, save the input using handleChange function */}
                    <button type="submit" className="btn" onClick={addItems}>ADD</button>  {/* when the button is clicked, append the input value to the items list */}
                </div>
                <div>
                    <ul>
                        {items.map((item, idx) => (
                            <li className="li" key={idx} id={idx} onClick={deleteItem} style={{cursor: "pointer"}}>{item}</li> 
                        ))}
                        {/* when a task is clicked, that means it is completed, so delete that item. The clicked item is tracked using its unique id */}
                    </ul>
                </div>
            </div> 
            <div>
                
                {msg? <p>{msg}</p> : 
                <div>
                    <p className="p">Total Tasks : {totalTasks}</p>
                    <p className="p">Completed Tasks : {completedTasks}</p>
                </div>
                }
                {/* if all the tasks are completed, display the task completion msg else show the count of tasks */}
            </div>
        </div>
    )
}
