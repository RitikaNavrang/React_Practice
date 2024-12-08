import { useImmer } from 'use-immer';

const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: false },
  ];

export default function UseImmerfunction()
{
    const [myList, setMyList] = useImmer(initialList);
    const [yourList, setYourList] = useImmer(initialList);
    
    function handleMyList(artworkId, nextSeen)
    {
        setMyList(draft => {
            const artwork = draft.find(a => a.id === artworkId);
            artwork.seen = nextSeen;
        });
    }

    function handleYourList(artworkId, nextSeen)
    {
        setYourList(draft => {
            const artwork = draft.find(a => a.id === artworkId);
            artwork.seen = nextSeen;
        })
    }

    return(
        <>
        <h2>My List</h2>
        <ItemList artworks={myList} onToggle={handleMyList}/>
        <h2>Your List</h2>
        <ItemList artworks={yourList} onToggle={handleYourList}/>
        </>
    );
}

function ItemList({artworks, onToggle})
{
    return(
        <>
        <ul>
            {artworks.map((artwork) => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={(e) => onToggle(artwork.id, e.target.checked)}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
        </>
    );
}