import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 3rem;
  min-height: 100vh;
  background: linear-gradient(180deg, #58585b 0%, #1c1c3c 100%);
  color: #fff;

  /* 🎬 DETALHES DO FILME */
  .details {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 3rem;
    flex-wrap: wrap;
  }

  /* POSTER */
  .details img {
    width: 500px;
    max-width: 100%;
    border-radius: 14px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.6);
    transition: transform 0.3s;
    cursor: pointer;
  }

  .details img:hover {
    transform: scale(1.03);
  }

  /* INFO DO FILME */
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    margin-left: 15rem;
  }

  .info h1 {
    font-size: 2.2rem;
    margin: 0;
  }

  /* 🎞 GÊNEROS */
  .genres {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .genre {
    background: rgba(255,255,255,0.1);
    padding: 0.35rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #ffb3c1;
  }

  /* SINOPSE, LANÇAMENTO E RATING */
  .sinopse, .release, .rating {
    display: flex;
    gap: 1rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  .sinopse strong, .release strong, .rating strong {
    color: #aaa;
    text-transform: uppercase;
    flex-shrink: 0;
    gap: 10rem;
  }

  /* BOTÃO VOLTAR / FAVORITO */
  .botaoInfo,
  .favorite-btn {
    margin-top: 1rem;
    width: fit-content;
    background: linear-gradient(135deg,#e94560,#ff6b6b);
    color: white;
    border: none;
    border-radius: 30px;
    padding: 0.7rem 1.6rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  .botaoInfo:hover,
  .favorite-btn:hover {
    transform: translateY(-2px);
  }

  .favorite-btn.active {
    background: #ff6b6b;
    color: #fff;
  }

  /* 🎬 TRAILER */
  .trailer {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .trailer iframe {
    width: 100%;
    max-width: 900px;
    height: 480px;
    border-radius: 16px;
    border: none;
    box-shadow: 0 12px 35px rgba(0,0,0,0.7);
  }

  /* 🎭 ELENCO */
  .cast {
    margin-top: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cast h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .cast-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  .actor {
    width: 160px;
    background: rgba(255,255,255,0.06);
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    transition: transform 0.3s;
    cursor: pointer;
  }

  .actor:hover {
    transform: translateY(-5px);
    background: rgba(255,255,255,0.1);
  }

  .actor img {
    width: 120px;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 0.5rem;
  }

  .actor-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0.2rem;
  }

  .actor-character {
    font-size: 0.75rem;
    color: #ffb3c1;
  }

  /* RESPONSIVO */
  @media (max-width: 768px) {
    padding: 1.5rem;

    .details {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .details img {
      width: 260px;
    }

    .info {
      max-width: 100%;
      align-items: center;
    }

    .trailer iframe {
      height: 260px;
    }
  }
`;