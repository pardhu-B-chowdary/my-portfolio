import React, { useState } from 'react'
import './navbar.css'
import { MdHomeFilled } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

function Navbar() {
  const [currActive, setCurrACtive] =  useState('#Home')
  return (
    <nav>
      <a href='#home' className={currActive === '#Home'? 'active' : ''} onClick={()=>{setCurrACtive('#Home')}}><MdHomeFilled /></a>
      <a href='#about' className={currActive === '#About'? 'active' : ''} onClick={()=>{setCurrACtive('#About')}}><FaRegUser /></a>
      <a href='#skills' className={currActive === '#Skills'? 'active' : ''} onClick={()=>{setCurrACtive('#Skills')}}><BiBook /></a>
      <a href='#project' className={currActive === '#Projects'? 'active' : ''} onClick={()=>{setCurrACtive('#Projects')}}><BsArchive /></a>
      <a href='#contact' className={currActive === '#Contact'? 'active' : ''} onClick={()=>{setCurrACtive('#Contact')}}><IoChatboxEllipsesOutline /></a>
    </nav>
  )
}

export default Navbar