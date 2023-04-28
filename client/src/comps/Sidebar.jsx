import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title text-3xl">username</span>
        <ul>
          <li>Wishlist</li>
          <li>My games</li>
          <li>My reviews</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title text-3xl">Genres</span>
        <ul>
          <li>Action</li>
          <li>Adventure</li>
          <li>Indie</li>
          <li>RPG</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title text-3xl">Platforms</span>
        <ul>
          <li>PC</li>
          <li>Playstation</li>
          <li>Xbox</li>
          <li>Nintendo</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title text-3xl">Other</span>
        <ul>
          <li>Free to play</li>
          <li>Multiplayer</li>
          <li>Singleplayer</li>
          <li>Co-op</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title text-3xl">Voted</span>
        <ul>
          <li>Best of 2022</li>
          <li>Greatest Hits</li>
          <li>Top 50</li>
        </ul>
      </div>
    </div>
  );
}
