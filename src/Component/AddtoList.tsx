import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
  people: Props["people"],
  setPeople: React.Dispatch<React.SetStateAction<IProps["people"]>>
}

const AddtoList: React.FC<IProps> = ({ people, setPeople }) => {

  const [input, setInput] = useState({

    name: "",
    age: "",
    url: "",
    note: ""
  })

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    e.preventDefault()
    setInput({
      ...input, [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {

  if(!input.name || !input.age || !input.url || !input.note){
    return
  }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note

      }
    ])

  }


  return (
    <div className='AddToList'>
      <input type="text" placeholder="Enter Name" className="AddToList-Input" value={input.name} name="name" onChange={changeHandler} />
      <input type="number" placeholder="Enter Age" className="AddToList-Input" value={input.age} name="age" onChange={changeHandler} />
      <input type="text" placeholder="Image URL" className="AddToList-Input" value={input.url} name="url" onChange={changeHandler} />
      <input type="text" placeholder="Enter Note" className="AddToList-Input" value={input.note} name="note" onChange={changeHandler} />
      <button className='AddToList-btn' onClick={handleClick}>Add User</button>
    </div>
  )
}

export default AddtoList