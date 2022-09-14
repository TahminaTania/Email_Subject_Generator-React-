import React from 'react'
import classes from './Output.module.css';
import { useState, useEffect,useRef } from 'react';
import Slider from "react-slick";


export default function SingleData({word,id,keyword}) {



 const [copyText,setCopy]=useState('COPY');
 const sentence=useRef(word)

    const handleClick = (id) => {
        setCopy('Copied');

        setTimeout(() => {
            setCopy('Copy');
        }, 1000);

        }

if(keyword){
    let string = word;
    let Word = string.replace(`{}`,keyword);
    let Word1= '<span style="color:black">'+Word+'</span>';
    word=Word; 
    console.log("Replaced value: ", word)
}



   

  return (

    <div  className='text-center' key={id}> 
                           <div className={classes.title}>
                           <span ref={sentence}>{word}</span>
                            <span className={classes.copy} onClick={() => handleClick(id)}>
                              <button onClick={(e) => {navigator.clipboard.writeText(word)}}>{copyText}</button>
                            </span> 
                          </div>
  </div>
                 
  )
}
