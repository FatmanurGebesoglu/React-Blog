import { useFetch } from '../../hook/useFetch';
import './home.css'
import BlogList from '../../component/blogList';

export default function Home() {

    const { data, yukleniyor, hata } = useFetch ('http://localhost:5000/bloglar');

    console.log(data);
    return (
        <div className="home">
            {hata && <p className="error">{hata}</p>}
            {yukleniyor && <p className="loading">Loading...</p>}
			
            {data && <BlogList bloglar={data}/>}
			
      </div>
    )
}