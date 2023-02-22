import React, { useState } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export default function TodoList({item}) {
    const [like, setLike] = useState(0);
    const [dlike, setDlike] = useState(0);
    const [likehide, setLikehide] = useState(false);
    const [dlikehide, setDlikehide] = useState(false);

    const likeIncrese = () => {
        setLike(like + 1);
        setLikehide(true);
        setDlikehide(true);
    }
    const dlikeIncrese = () => {
        setDlike(dlike + 1);
        setDlikehide(true);
        setLikehide(true);
    }
    return (
        <div>
            <div className='messageBox d-flex flex-column justify-content-center align-items-start' style={{ marginBottom: '2rem' }}>
                <div className='d-flex flex-wrap justify-content-start align-items-center gap-1'>
                    <button style={{
                        width: "35px", height: '35px', padding: '2px 10px', marginRight: '5px', cursor: "pointer",
                        color: "white", backgroundColor: "indigo", textShadow: "2px 2px 5px black", boxShadow: "2px 2px 5px indigo", border:"none"
                    }} onClick={likeIncrese} disabled={likehide}>
                        <AiOutlineArrowUp /><div style={{
                            backgroundColor: "#dfe6e9", color: 'black', margin: "1rem 0", width: '35px',
                            padding: '2px 10px', cursor: "default", boxShadow: "2px 2px 5px #dfe6e9"
                        }} >{like}</div></button>

                    <button style={{
                        width: "35px", height: '35px', padding: '2px 10px', marginRight: '5px', cursor: "pointer",
                        backgroundColor: "goldenrod", textShadow: "2px 2px 5px black", boxShadow: "2px 2px 5px goldenrod", border:"none"
                    }} onClick={dlikeIncrese} disabled={dlikehide}>
                        <AiOutlineArrowDown /><div style={{
                            backgroundColor: "#dfe6e9", margin: "1rem 0", width: '35px',
                            padding: '2px 10px', cursor: "default", boxShadow: "2px 2px 5px #dfe6e9"
                        }}>{dlike}</div></button>
                    <p className='p-2' style={{ backgroundColor: '#dfe6e9', width: '50vw' }} key={item.id}>{item.name}</p>
                </div>
            </div>
        </div>
    )
}
