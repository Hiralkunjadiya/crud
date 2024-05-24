import React, { useState } from 'react'

import fack_data from '../src/component/Data'

const App = () => {


  const [result, setResult] = useState(fack_data)
  const [input, setInput] = useState({})
  const [inx, setInx] = useState(0)

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submitHandler = () => {
    setResult([...result, input])
  }

  const deleteHandler = (ind) => {
    result.splice(ind, 1);
    setResult([...result])
  }

  const viewHandler = (obj_, ind) => {
    setInput(obj_)
    setInx(ind)
  }

  const updeteHandler = (obj_) => {
    result.splice(obj_, 1, input);
    setResult([...result])
  }

  return (
    <>
      <div className='container  mt-4 mb-5'>
        <div className='row'>
          <div className='border border-2 shadow   text-center border-light'>
            <div className='col-12 mt-4 '>
              <input type="text" name='name' value={input.name} className='mx-2 w-25 ' placeholder='Enter Your Name' onChange={inputHandler} />
              <input type="text" name='email' value={input.email} className='mx-3 w-25' placeholder='Enter Your Email' onChange={inputHandler} />
            </div>
            <div className='col-12 mt-3 mb-3'>
              <button className='btn btn-dark ' onClick={submitHandler}>Add Data</button>
              <button className='btn btn-light ' onClick={() => updeteHandler(inx)}>Update Data</button>
            </div>
          </div>
        </div>
      </div>

      {
        result?.map((val, index) => {
          return (
            <div className='container '>
              <div className='row'>
                <div className='col-6 mx-3 w-75' >
                  <div className='border border-1 border-dark p-4  mt-3'>
                    <h4 className='mx-2'>{val.name}</h4>
                    <h4 className='mx-2'>{val.email}</h4>
                    <div className=''>
                      <button className='btn btn-danger mx-2' onClick={() => deleteHandler(index)}>Delete</button>
                      <button className='btn btn-success  ' onClick={() => viewHandler(val, index)}>View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default App
