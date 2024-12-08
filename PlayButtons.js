export default function PlayButton() 
{
    return (
        <ToolBar
            onPlayAudio={() => alert('Play Audio')}
            onPlayVideo={() => alert('Play Video')}
        />
    );
}

function ToolBar({ onPlayAudio, onPlayVideo })
{
    return (
        <div>
            <Button onClick={onPlayAudio}>Play Audio</Button>
            <Button onClick={onPlayVideo}>Play Video</Button>
        </div>
    );
}

function Button({ children, onClick })
{
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}