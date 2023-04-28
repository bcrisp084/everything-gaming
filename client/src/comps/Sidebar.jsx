import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title text-3xl">username</span>
        <ul>
          <li>
            <Link className="side-link" href="/wishlist">
              Wishlist
            </Link>
          </li>
          <li>
            <Link className="side-link" href="/mygame">
              My games
            </Link>{" "}
          </li>
          <li>
            <Link className="side-link" href="/reviews">
              My reviews
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title text-3xl">Genres</span>
        <ul>
          <li>
            <Link className="side-link" href="/action">
              Action
            </Link>{" "}
          </li>
          <li>
            <Link className="side-link" href="/adventure">
              Adventure
            </Link>{" "}
          </li>
          <li>
            <Link className="side-link" href="/indie">
              Indie
            </Link>{" "}
          </li>
          <li>
            <Link className="side-link" href="/rpg">
              RPG
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title text-3xl">Platforms</span>
        <ul>
          <li>
            <Link className="side-link" href="/pc">
              PC
            </Link>{" "}
          </li>
          <li>
            <Link className="side-link" href="/playstation">
              Playstation
            </Link>{" "}
          </li>
          <li>
            <Link className="side-link" href="/xbox">
              Xbox
            </Link>{" "}
          </li>
          <li>
            <Link className="side-link" href="/nintendo">
              Nintendo
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title text-3xl">Mode</span>
        <ul>
          <li>
            <Link className="side-link" href="/free">
              Free to play
            </Link>{" "}
          </li>
          <li>
            <Link className="side-link" href="/multiplayer">
              Multiplayer
            </Link>{" "}
          </li>
          <li>
            <Link className="side-link" href="/singleplayer">
              Singleplayer
            </Link>{" "}
          </li>
          <li>
            <Link className="side-link" href="/coop">
              Co-op
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title text-3xl">Voted</span>
        <ul>
          <li>
            <Link className="side-link" href="/bestof2022">
              Best of 2022
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link className="side-link" href="greatesthits">
              Greatest Hits
            </Link>{" "}
          </li>
          <li>
            <Link className="side-link" href="top50">
              Top 50
            </Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
