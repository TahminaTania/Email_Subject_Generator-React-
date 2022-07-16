import React from 'react';
import benefits from '../db.json';
import classes from './Output.module.css';
import id from './Output.module.css';
import UserInputForm from './UserInputForm';

export default function Output() {
  return (
    <div>
         <div className='container'>
              <div>
                    {
                      benefits.map( sub => {
                       return(
                      <div  className='text-center' id={id.title}> 
                        <span key={sub.id}>{sub.word}</span>
                        <span className={classes.copy}>Copy</span>

                      </div>
                      )
                        })
                    }
              </div>
            </div>

    </div>
  )
}
