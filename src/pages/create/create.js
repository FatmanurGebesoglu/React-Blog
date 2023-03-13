import './create.css';
import { useState, useRef, useEffect } from 'react';
import { useFetch } from '../../hook/useFetch';
import React from 'react'
import {useHistory} from 'react-router-dom';

import { db } from '../../firebase/config';
import {collection,addDoc} from 'firebase/firestore'
import { async } from '@firebase/util';

export default function Create() {

  const {postData,data,error}=useFetch('http://localhost:5000/bloglar', 'POST');

  const [baslik, setBaslik] = useState("");
  const [icerik, setIcerik] = useState("");
  const [okunmaSuresi, setOkunmaSuresi] = useState("");

  const [yeniKategori, setYenikategori]= useState('');
  const [kategoriler,setkategori]= useState([]);
  const kategoriInput= useRef(null);

  const history= useHistory();

  const handleSubmit = async(e) => {
    e.preventDefault();
    //console.log(baslik, icerik, okunmaSuresi,kategoriler);

    //postData({baslik,kategoriler,icerik,okunmaSuresi: okunmaSuresi + ' dakika'})

    const doc ={baslik,kategoriler,icerik,okunmaSuresi: okunmaSuresi + ' dakika'}

    const ref=collection(db,'bloglar');

    try{
      await addDoc(ref,{
        ...doc
      })
      history.push('/')
    }catch(err){
      console.log(err);
    }

  }

  const handleAdd=(e)=>{
    e.preventDefault()
    const yKat= yeniKategori.trim();

    if(yKat && !kategoriler.includes(yKat) ){
      setkategori(oKat=>[...oKat,yeniKategori])
    }


    setYenikategori('')
    kategoriInput.current.focus()
  }

  // useEffect(()=> {
  //     if(data){
  //       history.push('/')
  //     }
  // },[data]);

  return (
    <div className='create'>
      <h2 className='page-title'>Yeni Yazı Oluştur</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>
            Yazı Başlık:
          </span>
          <input type="text" onChange={(e) => setBaslik(e.target.value)}
            value={baslik} required />
        </label>

        {/* kategoriler gelecek */}

        <label>
          <span>Yazı Kategorileri:</span>
          <div className='categories'>
              <input type="text" onChange={(e)=>setYenikategori(e.target.value)} value={yeniKategori} ref={kategoriInput}/>
              <button onClick={handleAdd} className="btnAdd btn">Ekle</button>
          </div>
        </label>

        <p>Kategoriler: <span className='list'>{kategoriler.map(i => <em key={i}>{i}, </em>)}</span></p>


        <label>
          <span>
            Yazı İçerik:
          </span>
          <textarea rows={5} onChange={(e) => setIcerik(e.target.value)}
            value={icerik} required></textarea>
        </label>

        <label>
          <span>
            Yazı Okunma Süresi:
          </span>
          <input type="number" onChange={(e) => setOkunmaSuresi(e.target.value)}
            value={okunmaSuresi} required />
        </label>

        <button className='btn'>Oluştur</button>

      </form>
    </div>
  )
}
