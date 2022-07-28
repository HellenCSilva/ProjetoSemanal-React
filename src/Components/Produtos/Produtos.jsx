import React from 'react'
import S from './Produtos.module.css'

function Produtos({img,title,descri,precoAnterior,precoAtual,parcelas,qtdParcelas}){
      return(
          <article>
              <figure style={{'backgroundImage':`url(${img})`}}>
                  
              </figure>
                  <figcaption className={S.name}>{title}</figcaption>
              <span className={S.desc}>
                 {descri}
              </span>
              <p className={S.desc}>
              
              <small>De: {precoAnterior}</small> 
              <strong>Para: {precoAtual}</strong>
              <small>ou {qtdParcelas} de: {parcelas}</small>
              </p>
          <button className={S.btn}>Comprar</button>
          </article>
      )
  }

export default Produtos