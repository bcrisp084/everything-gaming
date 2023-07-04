import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import singleGameData from "@/utils/games";
import gameTrailersData from "@/utils/games";

export default function () {
  const router = useRouter();
  const { gameid } = router.query;
  const gameId = parseInt(gameid);
  const [game, setGame] = useState([]);
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    singleGameData
      .singleGame(gameid)
      .then((res) => {
        console.log("res", res.data);
        setGame(res.data);
      })
      .catch((err) => console.log(err));
  }, [gameid]);

  useEffect(() => {
    gameTrailersData
      .gameTrailers(gameId)
      .then((res) => {
        console.log("res", res.data);
        setTrailer(res.data.results[0].data.max);
      })

      .catch((err) => console.log(err));
  }, [gameid]);

  return (
    <div>
      <div className="-z-1 top-0 left-0 opacity-30 w-full h-screen object-cover absolute">
        <Image
          priority
          src={game.background_image_additional}
          alt="game background image"
          width={500}
          height={500}
          className="bg-cover w-full h-full  "
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">{game.name}</h1>
        <div className="z-1 opacity-100">
          <Image
            src={game.background_image}
            alt="game background image"
            width={500}
            height={500}
            className="rounded-full  w-96 h-96 "
          />
        </div>
        <div className="card-description">
          <p className="text-white">{game.description_raw}</p>
        </div>
        <div>
          <video width="500" height="500" controls>
            <source src={trailer} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-white">Rating</h1>
          <p className="text-white">{game.rating}</p>

          <h1 className="text-2xl font-bold text-white">Released</h1>
          <p className="text-white">{game.released}</p>

          <h1 className="text-2xl font-bold text-white">Playtime</h1>
          <p className="text-white">{game.playtime}</p>

          <h1 className="text-2xl font-bold text-white">Genres</h1>
          <p className="text-white">
            {game.genres?.map((genre) => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>

          <h1 className="text-2xl font-bold text-white">Platforms</h1>
          <p className="text-white">
            {game.platforms?.map((platform) => (
              <span key={platform.platform.id}>{platform.platform.name} </span>
            ))}
          </p>

          <h1 className="text-2xl font-bold text-white">Developers</h1>
          <p className="text-white">
            {game.developers?.map((developer) => (
              <span key={developer.id}>{developer.name} </span>
            ))}
          </p>

          <h1 className="text-2xl font-bold text-white">Publishers</h1>
          <p className="text-white">
            {game.publishers?.map((publisher) => (
              <span key={publisher.id}>{publisher.name} </span>
            ))}
          </p>

          <h1 className="text-2xl font-bold text-white">Stores</h1>
          <p className="text-white">
            {game.stores?.map((store) => (
              <span key={store.store.id}>{store.store.name} </span>
            ))}
          </p>

          <h1 className="text-2xl font-bold text-white">Tags</h1>
          <p className="text-white">
            {game.tags?.map((tag) => (
              <span key={tag.id}>{tag.name} </span>
            ))}
          </p>

          <h1 className="text-2xl font-bold text-white">Parent Platforms</h1>
          <p className="text-white">
            {game.parent_platforms?.map((parent_platform) => (
              <span key={parent_platform.platform.id}>
                {parent_platform.platform.name}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
