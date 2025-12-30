"use client";
import { useEffect, useState } from "react";

interface TypingNameProps {
  text: string;
  speed?: number;
}
const TypingName = ({
    text, speed = 150,
}: TypingNameProps)  =>{
    const [displayText, setDisplayText] = useState("");
    let index = 0;
    useEffect(() => {

        setTimeout(() => {

        }, speed);
    },[])

    return(
        <h1 className="text-2xl mb-8">{displayText}</h1>
    );
}

export default TypingName;