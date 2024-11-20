import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfun, minusfun } from './redux/CounterAction'

const Countercomponent = () => {
    const count = useSelector((i) => i.count)
    const dispacth = useDispatch()
    const addCounter = () => {
        dispacth(addfun())
    }
    
  return (
    <div className='mainDiv'>
      <h3 >Counter componet</h3>
      <h4>Total count is -- {count}</h4>
      <div className='btns'>
      <button className='addBtn' onClick={addCounter}>Add</button>
      <button className='minBtn' onClick={() => dispacth(minusfun())}>Minus</button>
      </div>
    </div>
  )
}

export default Countercomponent