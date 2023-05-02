import Nav from "@/comps/Navbar";
import gameData from "@/utils/games";
import { Grid, Container } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import { GameCard } from "@/comps/Card";
// import { useInView } from "react-intersection-observer";
import Sidebar from "@/comps/Sidebar";
import "intersection-observer";


function Lobby() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const observer = useRef();

  

  useEffect(() => {
    gameData
      .allGames(page)
      .then((res) => {
        console.log(res.data.results);
        setGames(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [page]);

  // useEffect(() => {
  //   if (games.length > 0) {
  //     observer.current = new IntersectionObserver((entries) => {
  //       const lastEntry = entries[entries.length - 1];
  //       if (lastEntry.isIntersecting) {
  //         setPage((prevPage) => prevPage + 1);
  //       }
  //     });
  //     if (observer.current) {
  //       observer.current.observe(document.querySelector(".game:last-child"));
  //     }
  //   }
  // }, [games]);
  

  // useEffect(() => {
  //   observer.current = new IntersectionObserver((entries) => {
  //     const lastEntry = entries[entries.length - 1];
  //     if (lastEntry.isIntersecting) {
  //       setPage((prevPage) => prevPage + 1);
  //     }
  //   });
  //   if (observer.current) {
  //     observer.current.observe(document.querySelector(".game:last-child"));
  //   }
  //   return () => {
  //     if (observer.current) {
  //       observer.current.disconnect();
  //     }
  //   };
  // }, []);

  return (
    <Container>
      <Nav />
      <div className="h-full w-150 fixed z-1 top-0 left-0  overflow-x-hidden pt-20 bg-black">
        <Sidebar />
      </div>
      <div className="ml-[150px]">
        <Grid.Container gap={2} justify="center">
          {games.map((game) => (
            <Grid xs={12} md={6} lg={4} key={game.id}>
              <GameCard
                shadow="true"
                hoverable="true"
                width="100%"
                src={game.background_image}
                name={game.name}
                released={game.released}
              />
            </Grid>
          ))}
          {/* {loading && <div>Loading...</div>}
        {!loading && games.length > 0 && <div ref={observer}>Observer</div>} */}
        </Grid.Container>
      </div>
    </Container>
  );
}

export default Lobby;
