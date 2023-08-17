import React,{useState} from 'react'


const Textarea = (_props) => {

    const [text, setText] = useState('')

    
    const handleReset = () => {
        setText('')
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase())
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    


    return (
        <div className="mb-3 container my-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text To Analyze</label>

            <textarea className="form-control bg-black text-white" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9" ></textarea>
            
            <button className='btn modify-btn btn-primary m-3 ' onClick={handleReset}>Reset Text</button>
            <button className='btn modify-btn btn-primary m-3 ' onClick={handleUpperCase}>Convert To UpperCase</button>
            <button className='btn modify-btn btn-primary m-3 ' onClick={handleLowerCase}>Convert To LowerCase</button>

            <h3 className='m-3'>Letter Count is : {text.length}</h3>
            <h3 className='m-3'>Word Count is : {text.split(" ").length - 1}</h3>

        </div>
    );
}

export default Textarea