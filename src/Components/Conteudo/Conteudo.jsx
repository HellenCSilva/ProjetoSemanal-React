import React from 'react'
import Forms from '../Forms/Forms'
import Produtos from '../Produtos/Produtos'
import S from './Conteudo.module.css'

function Conteudo() {
  return (
    <body>
      <section className={S.box}>
        <div className={S.tittle}>
        <h1>Ajude o algoritimo a ser mais certeiro</h1>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, 
            sit temporibus soluta quo officia quae qui ad nulla veritatis, nihil voluptas 
            eaque! Deleniti recusandae, et nobis vel pariatur quibusdam ipsum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
             molestias eius! Accusantium hic quisquam perferendis saepe aperiam beatae, 
             eos unde at. Dignissimos suscipit praesentium iure! Corporis aliquid obcaecati 
             dolores possimus.</p>
      </section>

             <form>
               <Forms />
             </form>

             <section className={S.cards} >
               <Produtos />
             </section>
    </body>
  )
}

export default Conteudo