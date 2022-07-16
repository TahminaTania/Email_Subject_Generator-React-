import React from 'react';
import classes from './UserInputForm.module.css';
import { useState } from 'react';

export default function UserInputForm() {
  const [keyword,SetKeyWord] =useState('');
  const [cetagory,SetCetagory] =useState('');

  let keyWord =(event)=>{
    console.log('keyWord function ran');
    event.preventDefault();
    // SetKeyWord(event.target.value);

    console.log('chatagory is:', cetagory);
   // SetCetagory('');
    
    console.log('value is:', keyword);
    // SetKeyWord('');

  }


  return (
    <div>
        <form onSubmit={keyword}> 
            <div class="row">
            
                <div class="col-md-4">
                <label class="form-label mt-4">Choose Category</label> 
                <select class="form-select" aria-label="Default select example" name="category" 
                onChange={(event) => this.SetCetagory({ value: event.target.value })}
               >
                    <option value="1">Benefit</option>
                    <option value="2">Pin Point</option>
                    <option selected value="3">Topic</option>
                    <option value="4">Necessity</option>
                </select>
                </div>

                <div class="col-md-2">
                    
                </div>
                <div class="col-md-4">
                  <label class="form-label mt-4">Enter KeyWord</label> 
                  <input type="text" class="form-control"  placeholder="Lead-generation"  
                  onChange={event => SetKeyWord(event.target.value)}
                  value={keyword}
                 /> 
                   
                </div>
                <div class="col-md-2">
                <div className='mt-5'></div> 
                <button class="btn btn-primary btn"  onClick={keyWord} >Generate</button>
                </div>
            </div>
       

        <div>
            
        </div>
        </form>
    </div>
  )
}
