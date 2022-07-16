import React from 'react';
import classes from './Home.module.css';
import Output from './Output';
import UserInputForm from './UserInputForm';



export default function Home() {
  return (
    <section className={classes.body}>
        <header className={classes.label}>
        <h1 class="text-center mb-5 pt-5">Email Subject Line Generator</h1>
            <p class="text-center">Choose a keyword category (Benefit, Topic, or Pain-Point), then enter your keyword. 
               Then click "generate subject lines"  <br/>
               to get a list of ideas for your next great subject line! </p>
        </header>

        <div class="container">
            <div class="col-md-10 offset-1">
                <h6>Fill up those things</h6>
                <UserInputForm/>    
            </div>
            <div className='mb-5'>
            </div>
            <div className='col-md-8 offset-2 mt-5'>
              <Output/>
            </div>
           
        </div>



        
    </section>
  )
}
