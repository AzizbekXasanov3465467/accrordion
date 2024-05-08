import React from 'react'
import { useState } from 'react'
import "./App.css"
const App = () => {
  const [selected, setSelected] = useState(null)
const toggle = (i) => {
  if(selected == i){
    return setSelected(null)
  }
  setSelected(i)
}

  return (
    <div className='wrapper'> 
    <div className="accordion">
{data.map((item, i) => (
  <div className="item">
    <div className="title" onClick={() => toggle(i)}>
      <h2>{item.quiston}</h2>
      <span>{selected == i ? '-' : '+'}</span>
    </div>
    <div className={selected == i ? 'content show' : 'content'}>{item.answer}</div>
  </div>
))}
      </div>      
    </div>
  )
}

const data = [
  {
    quiston: 'Quiston 1',
    answer: 
    '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum amet quisquam dolores animi reiciendis. Eum repellat quia maxime, voluptas error voluptatum. Optio deserunt voluptates similique autem sapiente, eligendi ad cupiditate?',
   
  },
   { quiston: 'Quiston 2',
    answer: 
    '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum amet quisquam dolores animi reiciendis. Eum repellat quia maxime, voluptas error voluptatum. Optio deserunt voluptates similique autem sapiente, eligendi ad cupiditate?',
},
  {  quiston: 'Quiston 1',
    answer: 
    '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum amet quisquam dolores animi reiciendis. Eum repellat quia maxime, voluptas error voluptatum. Optio deserunt voluptates similique autem sapiente, eligendi ad cupiditate?',
},
 {   quiston: 'Quiston 1',
    answer: 
    '      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum amet quisquam dolores animi reiciendis. Eum repellat quia maxime, voluptas error voluptatum. Optio deserunt voluptates similique autem sapiente, eligendi ad cupiditate?',
},
]

export default App
