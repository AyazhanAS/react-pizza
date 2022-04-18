import React, { useState } from 'react'

export default function Categories({items, onClick}) {
  const [selected, setSelected]=useState("")
  const onSelectItem = index=>{
    setSelected(index)
  }

  return (
    <div className="categories">
              <ul>
                <li onClick={()=>onSelectItem(null)} className={selected===null?"active":""}>Все</li>
                {items&&items.map((item, index)=>{
                    return <li className={selected===index?"active":""}  key={`${item}_${index}`} onClick={()=>onSelectItem(index)}>{item}</li>
                })}
               
              </ul>
            </div>
  )
}
 