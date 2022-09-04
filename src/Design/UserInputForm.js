import React from 'react';
import classes from './UserInputForm.module.css';
import { useState } from 'react';
import Output from './Output';


export default function UserInputForm(props) {
  const [keyword,SetKeyWord] =useState();
  const [cetagory,SetCetagory] =useState();

  let Sentences =(e)=>{
    e.preventDefault();
    SetCetagory(e.target.value)
    console.log('chatagory is:', cetagory);
    console.log('value is:', keyword);
  }

  function handleCategory(e) {
    SetCetagory(e.target.value);
    console.log(cetagory)
  }


  return (
    <div>
        <div className="col-md-10 offset-1">
            <h6>Fill up those things</h6>
            <form onSubmit={keyword}> 
                <div className="row">
            
                      <div className="col-md-4">
                        <label className="form-label mt-4">Choose Category</label> 
                          <select className="form-select" defaultValue={cetagory} onChange={handleCategory} >
                            <option value="0">Topic</option>
                            <option value="1">Benefit</option>
                            <option value="2">Pin Point</option>
                            <option value="3">Necessity</option>
                            </select>
                        </div>

                        <div className="col-md-2"></div>
                        <div className="col-md-4">
                          <label className="form-label mt-4">Enter KeyWord</label> 
                          <input type="text" className="form-control"  placeholder="Lead-generation"  
                          onChange={(e) => SetKeyWord(e.target.value)}
                          value={keyword}/> 
                        </div>
                        <div className="col-md-2">
                          <div className='mt-5'></div> 
                          <button className="btn btn-primary btn"  onClick={Sentences} >Generate</button>
                        </div>
                     </div>
                 
              </form>




        </div>
        <div className='mb-5'>
        </div>
        <div className='col-md-8 offset-2 mt-5'>
          <Output keyword={keyword} cetagory={cetagory}/>
        </div>

    </div>
  )
}
