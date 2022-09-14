import React from 'react';
import classes from './Output.module.css';
import id from './Output.module.css';
import UserInputForm from './UserInputForm';
import { useState, useEffect,useRef } from 'react';
import { Point,Benefit, Necessity } from './data';
import SingleData from './SingleData';



export default function Output({cetagory ,keyword}) {
  const [topic,SetTopic] =useState(Point);

  const [color,Setcolor] =useState('red');
  const textAreaRef =useRef(null);
  const [Num,SetN]=useState(3);
  const [NumB,SetNB]=useState(0);

  // console.log("Recieved keyword: ",keyword)
  // console.log("Recieved category: ",cetagory)
  

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


function loadMore(){
  if((Num<topic.length) && (Num+3<topic.length)){
    SetNB(NumB+3);
    SetN(Num+3);
    console.log("firstone")
  }
  else if(Num==topic.length){
    SetN(3)
    SetNB(0)
    console.log("2one")
  }
  else if(Num+3>topic.length){
    SetNB(topic.length-3);
    SetN(topic.length);
   console.log("3one")
  }else{
    SetN(Num+3)
    SetNB(NumB+3)
  }

console.log(NumB)
console.log(Num)
console.log(topic.length)
}
  

 

  return (
    <div>
      {(() => {

        if (cetagory && keyword) {
          return (
            <div>
              <div className='container'>
                <div>
                    {topic.slice(NumB,Num).map( (sub,i) => {
                      return(
                        <SingleData key={sub.id} {...sub} keyword={keyword}></SingleData>  
                    )
                      })
                    }     
                </div>
                <div className='text-center mt-5'><button className='btn btn-primary' onClick={loadMore}>Load More...</button></div>
                </div>
            </div>
          )
        }else {
          return (
            <div className={classes.homePage}> 
            <h1>Find Suitable Email Subject Line for Your Mail................</h1>
         
            </div>
            
          )
        }

      })()}
    </div>
  )
}






{/* <div className='container'>

<div>
    {topic.slice(NumB,Num).map( (sub,i) => {
      return(
        <SingleData key={sub.id} {...sub} keyword={keyword}></SingleData>  
     )
       })
    }
  
</div>

<div className='text-center mt-5'><button className='btn btn-primary' onClick={loadMore}>Load More...</button></div>
</div> */}