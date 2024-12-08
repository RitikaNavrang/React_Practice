import { useState } from "react";

export default function Mutation2()
{
    const [person, setPerson] = useState({
        firstName: "John",
        artwork: {
            title: "The Starry Night",
            artist: "Vincent van Gogh",
            img : "https://i.imgur.com/Sd1AgUOm.jpg"
        }
    });

    function handleChange(e)
    {
        setPerson({...person, artwork:{ ...person.artwork, [e.target.name] : e.target.value}})
    }

    return(
        <>
        <label>
            Name:
            <input name="firstName" type="text" value={person.firstName}/>
            Artwork Title:
            <input name="title" type="text" value={person.artwork.title} onChange={handleChange}/>
            Artist:
            <input name="artist" type="text" value={person.artwork.artist} onChange={handleChange}/>
        </label>
        <p>
            {person.firstName} has painted {person.artwork.title} by {person.artwork.artist}.
            <br/>
            <img src={person.artwork.img} alt={person.artwork.title}/>
        </p>
        </>
    );
}