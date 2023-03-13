import {Link} from 'react-router-dom';

import React from 'react'
import './navbar.css'
import SearchBar from './searchBar';
import { useTheme } from '../hook/useTheme';

export default function Navbar() {
  const {bgColor}=useTheme();
  return (
    <div className='navbar' style={{backgroundColor:bgColor}}>
        <nav>
            <Link to="/" className='brand'>
                <h1>Fatmanur</h1>
            </Link>
            <SearchBar/>
            <Link to="/create">
                Yeni Yazı
            </Link>
        </nav>

    </div>
  )
}
