import { useState } from "react";
import { sculptureList } from "./GalleryData";

export default function Gallery()
{
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    let hasPrev = index > 0;
    let hasNext = index < sculptureList.length - 1;

    let sculpture = sculptureList[index];
    return (
        <>
        <button onClick={HandleNextClick} disabled={!hasNext}>
        Next
        </button>
        <button onClick={HandlePrevClick} disabled={!hasPrev}>
        Previous
        </button>
        <h2>{sculpture.name} by {sculpture.artist}</h2>
        <h3>({index+1} of {sculptureList.length})</h3>
        <img src={sculpture.url} alt={sculpture.alt} />
        <button onClick={HandleShowMore}>{showMore ? "Hide" : "Show"} details</button>
        {showMore && <p>{sculpture.description}</p>}
        </>
    );

function HandleNextClick()
{
    if(hasNext)
    setIndex(index + 1);
}

function HandlePrevClick()
{
    if(hasPrev)
    setIndex(index - 1);
}

function HandleShowMore()
{
    setShowMore(!showMore);
}
}