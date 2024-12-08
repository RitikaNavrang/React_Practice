import { useState } from "react";

const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: false },
  ];

export default function Arrays2()
{
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(initialList);

    function handleMyList(artworkId, nextseen)
    {
        setMyList(myList.map(artwork => {
            if(artwork.id == artworkId)
                return{...artwork, seen:nextseen};
            else
                return artwork;
         }));
    }

    function handleYourList(artworkId, nextseen)
    {
       setYourList(yourList.map(artwork => {
        if(artwork.id == artworkId)
            return{...artwork, seen:nextseen};
        else
            return artwork;
       }))
    }

    return(
        <>
            <h2>Bucket List </h2>
            <h3>My List</h3>
            <ItemList artworks={myList} onToggle={handleMyList} />
            <h3>Your List</h3>
            <ItemList artworks={yourList} onToggle={handleYourList} />
        </>
    );
}

function ItemList({artworks, onToggle})
{
    return(
            <ul>
                {artworks.map(artwork => (
                    <li key={artwork.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={artwork.seen}
                                onChange={e =>{
                                    onToggle(artwork.id, e.target.checked);
                                }}
                            />
                            {artwork.title}
                        </label>
                    </li>
                ))}
            </ul>
    );
}
