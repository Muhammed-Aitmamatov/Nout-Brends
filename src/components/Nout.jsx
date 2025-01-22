

import React, { useState } from 'react'

 

function NoutBrends({onTodos, onDelete}) {
  const [nout, setNout] = useState()
  const [nout1, setNout1] = useState("Show Nout")


  const Noutbook = ()=>{
    setNout(!nout)
    setNout1(nout ? "Show Nout" : "Hide Nout")

  }

  return (
    <div>
      <div>
        <h1 className='h1'>Nout Market</h1>
        <button onClick={Noutbook}>{nout1}</button>
      </div>

      <div>
        <div className="divclass1">
          {nout&&
            onTodos.map((element) => (

              <div className="noutclass">
                <img src={element.img} alt="" />
                <h1> {element.Бренд}</h1>
                <h1> {element.Серия}</h1>
                <h1> {element.Категория}</h1>
                <h1> {element.Процессор}</h1>
                <h1> {element.оперативнойПамяти}</h1>
                <h1> {element.МодельВидеоадаптера}</h1>
                <h1> {element.ОперационнаяСистема}</h1>      
                <h1> {element.ТипОбем}</h1>
                <h1> {element.Модель}</h1>
                <h1> {element.Цвет}</h1>
                <button onClick={() => onDelete(element.NoutId)}>Delete Nout</button>
              
              </div>

            )) }

        </div>
      </div>
     
    </div>
  )
}


export default NoutBrends