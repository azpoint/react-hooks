import React, {useState, useCallback} from "react"

function UseCallbackExample() {
    const [task, setTask] = useState([])


    const addTask = useCallback(() => {
        setTask((prevState) => [...prevState, "Some Task"])
    }, [setTask])

  return (
    <div>
        <Button addTask={addTask}/>
        {task.map((task, index) => (
            <p key={index}>{task}</p>
        ))}
    </div>
  )
}

const Button = React.memo(({addTask}) => {
    console.log("Button Rendered")

    return (
        <div>
            <button onClick={addTask} className="btn btn-primary">Add Task</button>
        </div>
    )
})
export default UseCallbackExample