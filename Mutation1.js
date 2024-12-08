import { useState } from "react";

export default function Mutation1()
{
    const [person, setPerson] = useState({
        name: "John",
        age: 30,
        city: "New York"
    });

    // function handleFirstNameChange(event){
    //     setPerson(person => ({...person, name: event.target.value }));
    // }
    
    // function handleAgeChange(event){
    //     setPerson(person => ({...person, age: parseInt(event.target.value) }));
    // }

    // function handleCityChange(event){
    //     setPerson(person => ({...person, city: event.target.value }));
    // }

    function handleChange(e)
    {
        setPerson({...person, [e.target.name]: e.target.value});
    }

    return (
        <>
            {/* <label>
                Name:
                <input type="text" value={person.name} onChange={handleFirstNameChange} />
                Age: 
                <input type="number" value={person.age} onChange={handleAgeChange} />
                City:
                <input type="text" value={person.city} onChange={handleCityChange} />
            </label> */}
            <label>
                Name:
                <input name="name" type="text" value={person.name} onChange={handleChange} />
                Age: 
                <input name="age" type="number" value={person.age} onChange={handleChange} />
                City:
                <input name="city" type="text" value={person.city} onChange={handleChange} />
            </label>
            <p>
                {person.name} {' '} {person.age} {' '} {person.city}
            </p>
        </>
    );
}