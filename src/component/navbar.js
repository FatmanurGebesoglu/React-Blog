import {Link} from 'react-router-dom';

import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className='brand'>
                <h1>Fatmanur</h1>
            </Link>
            <Link to="/create">
                Yeni Yazı
            </Link>
        </nav>

    </div>
  )
}
