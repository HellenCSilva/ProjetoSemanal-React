import React, {useState} from 'react'
import S from './BuscaPokemon.module.css'

const BuscaPokemon = () => {
    const [input, setInput] = useState ('')
    const [requisicao, setRequisica] = useState ()
    const nomePokemon = input
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}/`

function mudaInput (event) {
    console.log(input)
    setInput(event.target.value)
}

async function requisica(){
    const response = await fetch (url)
    const json = await response.json
    setRequisica(json)
}

return (
    <div className={S.container}>
        <section className={S.busca}>
            <input type="text" className={S.input} placeholder="Digite o nome ou o ID do Pokemon" value={input} onChange={(event)=> mudaInput(event)}/>
            <button className={S.button} onClick={S.requisition}> Buscar Pokemon </button>
        </section>

        <section className={S.card}>
            <picture className={S.contentFoto}>
                <img className={S.foto} src={!! requisica && requisica.sprites.front_default}/>
            </picture>

            <p className={S.nome}>{!!requisica && requisica.name}</p>
        </section>
    </div>
)
}

export default BuscaPokemon