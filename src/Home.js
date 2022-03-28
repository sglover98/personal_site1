import React from 'react'
import Navbar from './components-home/Nav';
import Intro from './components-home/Intro';
import Story from './components-home/whoami'

export default function Home() {
  return (
      <div className='App'>
        <Intro/>
        <Story/>
</div>
   
    )
}
