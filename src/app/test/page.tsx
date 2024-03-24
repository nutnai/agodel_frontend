"use client";

import React, { useState, ChangeEvent } from "react";

export default function testPage() {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [sum, setsum] = useState(0);
    return (
        <div>
            <h1>test page</h1>
            <input type="number" onChange={(event: ChangeEvent<HTMLInputElement>) => setnum1(Number(event.target.value))}/>
            <input type="number" onChange={(event: ChangeEvent<HTMLInputElement>) => setnum2(Number(event.target.value))}/>
            <button onClick={() => setsum(num1 + num2)}>Add</button>
            <h2>{sum}</h2>
        </div>
    );
}
