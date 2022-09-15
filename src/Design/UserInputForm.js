import React from 'react';
import classes from './UserInputForm.module.css';
import { useState,useEffect,useRef} from 'react';
import Output from './Output';
import { Point,Benefit, Necessity } from './data';
import SimpleSlider from './Output';



export default function UserInputForm(props) {
  const [userInput,SetInput] =useState();
  const [keyword,SetKeyWord] =useState();
  const [cetagory,SetCetagory] =useState('');
  
  const inputRef = useRef(null);
 
 
  
  




  let Sentences =(e)=>{
    e.preventDefault();
    // SetKeyWord(userInput)
     SetKeyWord(inputRef.current.value)
     console.log('Sentence value is:', keyword);
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
                          <select className="form-select" 
                          value={cetagory} 
                          onChange={(e) => SetCetagory(e.target.value)} >
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
                         // onChange={(e) => SetInput(e.target.value)}
                          //value={userInput}
                          ref={inputRef}
                          id="message"
                          name="message"
                          autoComplete="off"
                          /> 
                        </div>
                        <div className="col-md-2">
                          <div className='mt-5'></div>
                          <div className={classes.sbmtBtn}>
                            <button type="submit" className={classes.Pbutton}  onClick={Sentences} >Generate</button>
                          </div>
                          
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


//onChange={(e) => SetKeyWord(e.target.value)}
//onChange={(e) => SetCetagory(e.target.value)}