import React from 'react'
import Button from '../Button/Button'
import S from './Header.module.css'

function Header() {
  return (
    <header className={S.Descricao}>
        <h2 className={S.sub} >Uma seleção de produtos</h2>
        <h1 className={S.titulo}>Especial para você!</h1>
        <p className={S.textinho}>Todos produtos dessa lista foram selecionados a partir
            de sua navegação. Aproveite!
        </p>
        <nav>
            <ul className={S.ButtonNav}>
                <ol><Button texto='Conheça a Linx' cor='white'/> </ol>
                <ol><Button texto='Ajude o algoritimo' cor='white'/> </ol>
                <ol><Button texto='Seus produtos' cor='white'/> </ol>
                <ol><Button texto='Compartilhe' cor='white'/> </ol>
                
            </ul>
        </nav>
    </header>
  )
}

export default Header