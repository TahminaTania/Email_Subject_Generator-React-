import React from 'react';
import benefits from '../db.json';
import Necessity from '../necessity.json';
import point from '../point.json';
import classes from './Output.module.css';
import id from './Output.module.css';
import UserInputForm from './UserInputForm';
import { useState, useEffect,useRef } from 'react';

export default function Output({cetagory} , {keyword}) {
  const [topic,SetTopic] =useState(point);

  console.log("Recieved keyword: ",keyword)
  console.log("Recieved category: ",cetagory)

  useEffect(() => {
    if(cetagory=== '1'){
      SetTopic(benefits)
      console.log("useeffect value: ", topic[1].word)
      let string = topic[1].word;
      const Word = string.replace("{}",keyword);
      console.log("Replaced value: ", Word)
    }
    else if(cetagory=== '3'){
      SetTopic(Necessity)
    }
    else{
      SetTopic(point)
}
  }, [cetagory]);



  return (
    <div>
         <div className='container'>
           
              <div>
                    {
                      topic.map( sub => {
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
