import React from 'react'
import '/Users/stanleyglover/Desktop/personal_site/src/App.css';
import Description from "./components-about/Decription.js";
import Techstack from './components-about/TechStack.js';
import ItStack from './components-about/ITStack.js';


export default function about() {
  return (

    <div className='App1'>
           <Description/>
           <Techstack/>
           <ItStack/>
    </div>

  )
}
