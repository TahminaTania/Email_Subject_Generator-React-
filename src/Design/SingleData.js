import React, { Component } from 'react'
import classes from './Output.module.css';
import { useState, useEffect,useRef } from 'react';
import { match } from 'assert';


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
    string=Word; 
    word = string.replace(keyword, match => `<span style="color:black;font-weight:lighter;">${match} </span>` );
   //let Word1= '<span style="color:black">'+Word+'</span>';
   
    console.log("Replaced value: ", word)
}



   

  return (

    <div  className='text-center' key={id}> 
                           <div className={classes.title}>
                           
                              <span></span>
                              <span className={classes.word} ref={sentence} dangerouslySetInnerHTML={{__html: word}}></span>
                              <span className={classes.copy} onClick={(e) => {navigator.clipboard.writeText(word)}}><span onClick={() => handleClick(id)}>{copyText}</span></span> 
                            </div>
                          
      
  </div>
                 
  )
}


// changed color ----->  https://stackoverflow.com/questions/54562124/how-to-add-color-to-a-specific-part-of-a-string-in-react-using-replace