import {useRef} from "react"

function UseRefExample1() {
    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.value = "Hello"
        inputRef.current.style.backgroundColor = "aqua"

        paraRef.current.innerText = "Goodbye"
    }


  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control mb-2" ref={inputRef}/>
            <button type="submit" className="btn btn-primary">Submit</button>
            <p ref={paraRef} onClick={() => inputRef.current.focus()}>Hello</p>
        </form>
    </div>
  )
}
export default UseRefExample1