import { useFetch } from '../../hook/useFetch';
import { useLocation } from 'react-router-dom';
import BlogList from '../../component/blogList'
import './search.css';

import React from 'react'

export default function Search() {

  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  const url = 'http://localhost:5000/bloglar?q=' + query;
  const { hata, yukleniyor, data } = useFetch(url);
  return (
    <div>
      <h2 className='page-title'>Aranan Kelime "{query}"</h2>
      {hata && <p className='error'>{hata}</p>}
      {yukleniyor && <p className="loading">Loading...</p>}

      {data && <BlogList bloglar={data} />}
    </div>
  )
}
