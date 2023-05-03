import Nav from "@/comps/Navbar";
import gameData from "@/utils/games";
import { Grid, Container } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import { GameCard } from "@/comps/Card";
import Sidebar from "@/comps/Sidebar";
import Link from "next/link";
import "intersection-observer";

function Lobby() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const lastGameRef = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[entries.length - 1];
        if (lastEntry.isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.5 } // adjust the threshold as needed
    );

    if (lastGameRef.current) {
      observer.current.observe(lastGameRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [games]);

  useEffect(() => {
    gameData
      .allGames(page)
      .then((res) => {
        console.log(res.data.results);
        setGames((prevGames) => [...prevGames, ...res.data.results]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <Container>
       <Nav />
       <div className="h-full w-150 fixed z-1 top-0 left-0  overflow-x-hidden pt-20 bg-black">
         <Sidebar />
       </div>
     <div className="ml-[150px]">      
      <Grid.Container gap={2} justify="center">
        {games.map((game, index) => (
          <Grid xs={12} md={6} lg={4} key={game.id}>
            <Link href={`/${game.id}`}>
            <GameCard
              shadow="true"
              hoverable="true"
              width="100%"
              src={game.background_image}
              name={game.name}
              released={game.released}
            />
            </Link>
            {games.length === index + 1 && (
              <div ref={lastGameRef} className="game">
                {/* this element will be observed by the IntersectionObserver */}
              </div>
            )}
          </Grid>
        ))}
      </Grid.Container>
      </div>
    </Container>
  );
}

export default Lobby;

