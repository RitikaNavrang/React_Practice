import { useState } from "react";

const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
    { id: 3, title: 'Big Bellies' },
    { id: 4, title: 'Lunar Landscape' },
    { id: 5, title: 'Terracotta Army' },
  ];

export default function Arrays()
{
    const [list, setList] = useState(initialList);

    function handleClick()
    {
        const nextList = [...list];
        nextList.reverse()
        setList(nextList);
    }

    return(
        <>
            <h2>List of Items</h2>
            <button onClick={handleClick}>Reverse</button>
            <ul>
                {list.map(item => (<li key={item.id}>{item.title}</li>))}
            </ul>
        </>
    );
}