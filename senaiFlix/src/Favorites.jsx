import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container, MovieList,  Movie } from "./style";








function Favorites(){
    //Variável/Gaveta para guardar os item que estão no Local Storage
     const [favs, setFavs] = useState([])


     const img_path = 'https://image.tmdb.org/t/p/w500/'


     useEffect(()=>{
        const savedFavs = JSON.parse(localStorage.getItem('favorites'))
        setFavs(savedFavs)
     },[])

  function removeFavoritos(id) {
    const updatedFavs = favs.filter(movie => String(movie.id) !== String(id));
    setFavs(updatedFavs);
    localStorage.setItem('favorites', JSON.stringify(updatedFavs));
  }

 if (favs.length === 0) {
    return (
      <>
        <Header />
        <Container>
          <p style={{textAlign: 'center', margintop: '15rem', color: '#aaa', fontSize: "4rem"}}>Você ainda não tem filmes favoritos adicionados.</p>
        </Container>
        <Footer />
      </>
    );
  }

    

     

     
return(<>
<Header/>
<Container>
    <MovieList>
        {favs.map(movie => 
            (<Movie key={movie.id}>
                <Link to={`/details/movie/${movie.id}`}>
                <img src={`${img_path}${movie.poster}`}
                alt={movie.title}/>
                </Link>
              <span>{movie.title}</span>  
              <button 
                className="favorite-btn" 
                onClick={() => removeFavoritos(movie.id)}>Remover</button>
            </Movie>))}
    </MovieList>
</Container>
<Footer/>
</>)
    
}

export default Favorites