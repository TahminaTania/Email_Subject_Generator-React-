import React from 'react';
import classes from './UserInputForm.module.css';
import { useState,useEffect,useRef } from 'react';
import Output from './Output';
import { Point,Benefit, Necessity } from './data';



export default function UserInputForm(props) {
  const [keyword,SetKeyWord] =useState();
  const [cetagory,SetCetagory] =useState(Point);

  let Sentences =(e)=>{
    e.preventDefault(); 
        // console.log('chatagory value is:', cetagory);
        //console.log('Sentence value is:', keyword);

          // if(cetagory=== 'Benefit'){
          //   SetCetagory(Benefit)
          // }
          // else if(cetagory=== 'Necessity'){
          //   SetCetagory(Necessity)
          // }
          // else{
          //   SetCetagory(Point)
          // }


    }

  // function handleCategory(e) {
  //   SetCetagory(e.target.value);
  //   // console.log(cetagory)
  // }
  
  // function handleKeyword(e) {
  //   SetKeyWord(e.target.value);
  //   // console.log(cetagory)
  // }


  return (
    <div>
        <div className="col-md-10 offset-1">
            <h6>Fill up those things</h6>
            <form> 
                <div className="row">
            
                      <div className="col-md-4">
                        <label className="form-label mt-4">Choose Category</label> 
                          <select className="form-select" value={cetagory} onChange={(e) => SetCetagory(e.target.value)} >
                            <option value="0">Topic</option>
                            <option value="Benefit">Benefit</option>
                            <option value="Point">Pin Point</option>
                            <option value="Necessity">Necessity</option>
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
                          <button type="submit" className="btn btn-primary btn"  onClick={Sentences} >Generate</button>
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


//