import React from 'react'

function  List(todo) {
    const items = todo;
    console.log(items);
  return (
    <ul>
        <li>ace</li>
     {
        items.prop.map((li)=>{
            <li>
                {li.title}
            </li>
        })
 
       }
         </ul>
  )
}

export default  List


