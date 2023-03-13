import { useState } from "react";
import { useHistory } from "react-router-dom";

import './searchBar.css'

import React from 'react'

export default function SearchBar() {
    
    const[kelime,setKelime]=useState('');
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();

        history.push(`/search?q=${kelime}`)
    }

  return (
    <div className="searchbar">
        <form onSubmit={handleSubmit}>
            <input placeholder="Aranacak kelime" id="search" type="text" onChange={
                (e)=> setKelime(e.target.value)}/>
        </form>

    </div>
  )
}
