import { APIKEY } from "./config/key";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, SearchBar } from "./style";

function Home() {

  const img_path = "https://image.tmdb.org/t/p/w500/";

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");
  const [genero, setGenero] = useState("");
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tipoSelecionado = queryParams.get("tipo");

  useEffect(() => {

    setLoading(true);

    const fetchMovies = fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=pt-BR`
    ).then((res) => res.json());

    const fetchSeries = fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}&language=pt-BR`
    ).then((res) => res.json());

    Promise.all([fetchMovies, fetchSeries])
      .then(([movieData, seriesData]) => {

        setMovies(movieData.results || []);
        setSeries(seriesData.results || []);
        setLoading(false);

      })

      .catch((error) => {

        console.error("Erro ao buscar dados no servidor do TMDB:", error);
        setLoading(false);

      });

  }, []); //para nao fazer loop infinito =========================================================================

  const filtrar = (lista) =>{
    return lista.filter((item) => {
        //================== para filtra a array mesmo se tiver em minusculo ou maiusculo ===============
        const nomeItem = (item.title || item.name).tolowerCase()
        const matchesSearch = nomeItem.includes(search.toLowerCase())
        const matchesGenre = genero === '' || item.genre_ids.includes(Number(genero))
        return matchesSearch && matchesGenre

    });
  }

  return (
    <Container>
        <SearchBar>

        </SearchBar>
    </Container>
  );
}

export default Home;