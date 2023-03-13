import './blog.css';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hook/useFetch';
import React from 'react'
import { useTheme } from '../../hook/useTheme';


export default function Blog() {
  const {id} = useParams();
  const url = 'http://localhost:5000/bloglar/'+id;

  const {mode}=useTheme();

  const {hata,yukleniyor, data:blog}= useFetch(url);

  return (
    <div className={`blog ${mode}`}>
      {hata && <p className='error'>{hata}</p>}
      {yukleniyor && <p className='loading'>Yükleniyor...</p>}
      {blog && (
        <>
          <h2 className='page-title'>{blog.baslik}</h2>
          <p className='time'>Okuma Süresi: {blog.okunmaSuresi}</p>
          <ul>
            {blog.kategoriler.map(kat=> <li key={kat}>{kat}</li>)}
          </ul>
          <p className='info'>{blog.icerik}</p>
        </>
      )}
    </div>
  )
}
