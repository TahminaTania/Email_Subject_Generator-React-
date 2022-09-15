import React, { Component } from 'react'
import classes from './Output.module.css';
import { useState, useEffect,useRef } from 'react';
// import { match } from 'assert';


export default function SingleData({word,id,keyword}) {
 const [copyText,setCopy]=useState('COPY');
 const sentence=useRef(null)

const handleClick = (id) => {
    setCopy('Copied');

    setTimeout(() => {
        setCopy('Copy');
    }, 1000);

    }

const copyToClip=()=>{
  let string=word
  let Word = string.replace(`<span style="color:black;font-weight:lighter;">`,(''));
  let Word2 = Word.replace(`</span>`,(''));
  word=Word2
 // I don't need this funtion if i can change color without dangerouslySetInnerHTM, just simply  useOnclick={()=>{navigator.clipboard.writeText(word);}
  navigator.clipboard.writeText(word);
}
          
        

 if(keyword){
 // Word.replace(keyword, (highlight) => `<div style="background-color: yellow">${highlight}</div>`);
    let string = word;
    let Word = string.replace(`{}`,keyword);
     let Word1 = Word.replace(keyword, match => `<span style="color:black;font-weight:lighter;">${match} </span>` ); 
    word=Word1; 
  console.log("Replaced value: ", word)
}





   

  return (

    <div  className='text-center' key={id}> 
                           <div className={classes.title}>
                           
                              <span></span>
                              
                               <span className={classes.word} ref={sentence} dangerouslySetInnerHTML={{__html: word}}></span> 
                              <span className={classes.copy} onClick={copyToClip}><span onClick={() => handleClick(id)}>{copyText}</span></span> 
                            </div>
                          
      
  </div>
                 
  )
}


// changed color ----->  https://stackoverflow.com/questions/54562124/how-to-add-color-to-a-specific-part-of-a-string-in-react-using-replace