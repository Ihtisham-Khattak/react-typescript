import React, { useState } from 'react';
import './App.css';
import AddtoList from './Component/AddtoList';
import List from './Component/List';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Ihtesham",
      age: 15,
      url: 'https://images.unsplash.com/photo-1516640000-9951e17c051d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
      note: 'Hello' 


    }
])

  return (
    <div className="App">
      <h1>React Typescript Project </h1>
      <AddtoList people={people} setPeople={setPeople} />
      <List people={people}/>
    </div>
  );
}

export default App;
