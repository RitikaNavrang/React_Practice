export default function SmashButton()
{
    return (
        <>
        <Button onSmash={() => alert("Bhoothnath")}>
        Play Movie
        </Button>
        <Button onSmash={() => alert("Sudoku")}>
            Play Game
        </Button>
        </>
    );
}

function Button({ onSmash, children })
{
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    );
}