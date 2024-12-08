import { useState } from "react";

export default function Snapshot1()
{
    // const [isSent, setIsSent] = useState(false);
    // const [message, setMessage] = useState("Hii");

    // if(isSent)
    // {
    //     return <p>{message}</p>; 
    // }
    // return(
    //     <>
    //         <form onSubmit={(e)=>
    //             {
    //                 e.preventDefault();
    //                 setIsSent(true);
    //                 setMessage("Message sent successfully!");
    //             }
    //         }>
    //             <textarea 
    //                 placeholder="Message"
    //                 value={message}
    //                 onChange={e => setMessage(e.target.value)}
    //             />
    //             <button type="submit">Send</button>
    //         </form>
    //     </>
    // );

    //----------------------------------------------------------------

    // const [number, setNumber] = useState(0);

    // return (
    //     <div>
    //         <h1>Current Number: {number}</h1>
    //         <button onClick={() => {
    //         setNumber(number => number + 1);
    //         setNumber(number => number + 1);
    //         setNumber(number => number + 1);
    //         alert("number");
    //         }}>+3</button>
    //     </div>
    // )

    //----------------------------------------------------------------

    const [to, setTo] = useState("Alice");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            alert(`Sending message to ${to}: ${message}`);
        }, 3000);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> To: {' '}
                <select value={to} onChange={e => setTo(e.target.value)}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                </select>
                </label>
                <textarea 
                    placeholder="write your message here !"
                    value={message} 
                    onChange={e => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </>
    );

}