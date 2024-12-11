"use client";
import { useState } from "react";

export default function Filtro() {

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pares = nums.filter((num) => (num % 2 === 0));
    const nomes = [' Wagner', 'Ana', 'Felipe', 'João', 'Pedrto', 'Paulo']
    const [busca, setBusca] = useState('')
    const nomesBusca = nome.filter((nome) => (nome.toLowerCase().startsWitch(busca.toLowerCase())))
    
    console.log(nums)
    console.log(pares);

    return (
        <div>
            <h1>Filtro</h1>
            <input
                value={busca}
                type="text"
                onChange={() => setBusca (ev.target.value)}

                />
            <ul>
                {nomesBusca.map((nome, i) => (
                    <li key={i}>{nome}</li>
                ))}
            </ul>
        </div>
    )
}