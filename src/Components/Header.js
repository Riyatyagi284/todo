import React from 'react'
import './Header.css';

import {FaArrowLeft} from "react-icons/fa"
import {FaThLarge} from "react-icons/fa"
import {ImParagraphRight} from "react-icons/im"
import {ImEqualizer2} from "react-icons/im"
import {FaProjectDiagram} from "react-icons/fa"
// import {IoAddCircleSharp} from "react-icons/io5"
// import {IoMdArrowBack} from "react-icons/io"




export  function Header(props)  {
  return (
    <div>
       <div className='nav'>lorium simply a dummy text aap.</div>
      <div className='container'>
      <div className='left'>
      <span className='name '>
      <h5>N</h5>Name 
      <FaArrowLeft/>
      </span>
      <span className='home'>
     
       <FaThLarge/>
      Home
      </span>

      <span className='home'>
      <ImParagraphRight/>
      section
      </span>

      <span className='home'>
     < ImEqualizer2/> Section
      </span>

      <span className='home'>
      <FaProjectDiagram/>
       section B
      </span>
      <span>
        <button>
        <FaProjectDiagram/>
          section 8
        </button>
      </span>
      <div className='v1'></div>
      </div>


      {/* middle vala section start */}
      {/* <div className='middle'>
        <div className='section'>Section
     <hr/>
     </div>
      <div className='v2'></div>
      <span>
      <button className='btn'>List: Things to Buy</button>
      <button className='btn'>List: Empty List</button>
      <button className='btn'>Add Todo -List</button>
      </span>

      <span className='btun'>
        <button1 className='add'>
        < IoAddCircleSharp/>
         <b>Add todo</b> <br/>
         Add to description
        
        </button1>
        <button2 className='add'>
        < IoAddCircleSharp/>
        <b>Add todo</b> <br/>
        
         Add to description
         
       </button2>
      </span>
     <div className='carrot'>
     <button1 className='add'>
        < IoAddCircleSharp/>
         <b>Add todo</b> <br/>
         Add to description
        
        </button1>
        <button2 className='add'>
        < IoAddCircleSharp/>
         <b>Add todo</b> <br/>
         Add to description                                                         m
        
        </button2>
     </div>
     
      </div> */}

      {/* right vala section start */}
      {/* <div className='right'>
     <div className='edit'>
      <IoMdArrowBack/>
      Edit Todo
     </div>
      <div className='carot'>
        <button className='cart'>Carrot</button>
        <button className='desc'>description</button>
        <button className='save'>save</button>
      </div>
      
      </div> */}
      </div>
     

      
    </div>
  )
}





