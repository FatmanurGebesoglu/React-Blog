import './blog.css';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hook/useFetch';
import React from 'react'
import { useTheme } from '../../hook/useTheme';

import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export default function Blog() {
  const { id } = useParams();
  //const url = 'http://localhost:5000/bloglar/'+id;

  const { mode } = useTheme();

  //const {hata,yukleniyor, data:blog}= useFetch(url);

  const [blog, setBlog] = useState(null)
  const [yukleniyor, setYukleniyor] = useState(false)
  const [hata, setHata] = useState(false)

  useEffect(()=>{
    setYukleniyor(true)
    const ref=doc(db,'bloglar',id)

    getDoc(ref).then(doc=>{
      //console.log(doc.data());
      if(doc.exists){
        setYukleniyor(false);
        setBlog(doc.data())
      }else{
        setYukleniyor(false)
        setHata('veriye erişilemedi')
      }
    })

  },[id])

  return (
    <div className={`blog ${mode}`}>
      {hata && <p className='error'>{hata}</p>}
      {yukleniyor && <p className='loading'>Yükleniyor...</p>}
      {blog && (
        <>
          <h2 className='page-title'>{blog.baslik}</h2>
          <p className='time'>Okuma Süresi: {blog.okunmaSuresi}</p>
          <ul>
            {blog.kategoriler.map(kat => <li key={kat}>{kat}</li>)}
          </ul>
          <p className='info'>{blog.icerik}</p>
        </>
      )}
    </div>
  )
}
