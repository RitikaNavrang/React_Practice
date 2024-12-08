export default function EventHandlerButton()
{
    return (
        <>
        <UploadButton/>
        <PlayButton message = {"Hello Ritika!"}/>
        </>
    );
}

function UploadButton()
{
    return (
        <Button onClick={() => alert("Uploding Image...")}>Upload Image</Button>
    );
}

function PlayButton({message})
{
    function handleClick() 
    {
        alert(message);
    }
    return (
        <Button onClick={handleClick}>Play</Button>
    );
}

function Button({onClick, children})
{
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

