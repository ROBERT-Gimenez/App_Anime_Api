import { useState , useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
function App() {
  const [animeList , SetAnimeList] = useState([]);
  const [topAnime , SetTopAnime] = useState([]);
  const [search , SetSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
    .then(res => res.json())
    .catch(err => console.log(err))
    
    SetAnimeList(temp.data)
    SetTopAnime(temp.data.slice(0,5));
  }
  
  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search);
  }

  const FetchAnime=async(query)=>{
    const res=await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=20`)
    const resData= await res.json();
    SetAnimeList(resData.data)
    console.log(resData)
  }

  useEffect(() => {
     GetTopAnime();
  },[])
  
  return (
    <div className="App">
     <Header />
     <div className="content-wrap">
        <Sidebar 
          topAnime={topAnime} />
          <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList} />

     </div>
    </div>
  );
}

export default App;
