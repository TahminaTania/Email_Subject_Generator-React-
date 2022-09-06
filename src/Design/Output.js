import React from 'react';
import classes from './Output.module.css';
import id from './Output.module.css';
import UserInputForm from './UserInputForm';
import { useState, useEffect,useRef } from 'react';
import { Point,Benefit, Necessity } from './data';

export default function Output({cetagory ,keyword}) {
  const [topic,SetTopic] =useState(Point);

  console.log("Recieved keyword: ",keyword)
  console.log("Recieved category: ",cetagory)
  

  useEffect(() => {
    if(cetagory=== 'Benefit'){
      SetTopic(Benefit)
    }
    else if(cetagory=== 'Necessity'){
      SetTopic(Necessity)
    }
    else if(cetagory=== 'Point'){
      SetTopic(Point)
}
  }, [cetagory]);

  // topic.map( (tpc) => {
  //   let string = tpc.word;
  //   let Word = string.replace("{}",keyword);
  //   tpc.word=Word;
  //   console.log("Replaced value: ", Word)
  // })



  return (
    <div>
         <div className='container'>
           
              <div>
                  {topic.map( sub => {

                    return(
                   <div  className='text-center' id={id.title}> 
                     <span key={sub.id}>{sub.word}</span>
                     <span className={classes.copy} >
                       <button >Copy</button>
                     </span>
                  
                   </div>
                   )
                     })
                  }
                
              </div>
            </div>

    </div>
  )
}


// {cetagory.map( sub => {
//   return(
//  <div  className='text-center' id={id.title}> 
//    <span key={sub.id}>{sub.word}</span>
//    <span className={classes.copy} >
//      <button >Copy</button>
//    </span>

//  </div>
//  )
//    })
// }