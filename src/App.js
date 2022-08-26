import { useState , useEffect } from "react";
import Header from "./components/Header";
function App() {
  const [animeList , SetAnimeList] = useState([]);
  const [topAnime , SetTopAnime] = useState([]);
  const [search , SetSearch] = useState("");


  return (
    <div className="App">
     <Header />
     <div className="contect-wrap">
        <sidebar 
          topAnime={topAnime} />

     </div>
    </div>
  );
}

export default App;
