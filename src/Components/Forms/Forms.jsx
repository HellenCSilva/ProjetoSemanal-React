import React from 'react'
import S from './Forms.module.css'

const Forms = () => {
    return (
        
        <div>
         
            <h1 className={S.h1}> Compartilhe a novidade </h1>
            <h2 className={S.h2}> Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</h2>

<form>
            <div className={S.nome}> 
            <label for="nome"> Seu Nome: </label>
            <input type="text"/>
        </div>

        <div className={S.email}>
            <label for="email"> Email: </label>
            <input type="email" />
        </div>

        <div className={S.cpf}>
            <label for="cpf"> CPF: </label>
            <input type="number"/>
        </div>

        <div className={S.botaozin}> 
            <button type="submit"> Enviar </button>
        </div>

    </form>
    </div>

    )
}

export default Forms