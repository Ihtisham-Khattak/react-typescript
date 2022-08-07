import React from 'react'
import {IState as IPerson} from '../App'

const List: React.FC<IPerson> = ({ people }) => {

    //Contain all the PEOPLE data
    const listData = (): JSX.Element[] => {

        return (

            people.map((person) => {

                return (
                    <li className='List'>
                        <div className='List-header'>
                            <img className='List-img' src={person.url} />
                            <h2>{person.name}</h2>
                        </div>
                        <p>{person.age} years old</p>
                        <p>{person.note}</p>

                    </li>
                )
            })

        );

    }

    return (
        <div>{listData()}</div>
    )
}

export default List; 
