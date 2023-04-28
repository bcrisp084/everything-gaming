import Nightgame from "../assets/Nightgame.jpg";
import Image from "next/image";

const IndexPage = () => (
  <>
    <main className="home-screen">
      <Image className="home-screen-image" src={Nightgame} alt="Home" />
    </main>
    <nav className="z-1 bg-black-950 shadow opacity-90 rounded">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-white text-5xl">Everything Gaming</h1>
          </div>
          <div className="flex items-center">
            <a
              href="/login"
              id="login-button"
              className="text-white text-xl hover:opacity-80  px-3 py-2 rounded-md  font-medium"
            >
              Login
            </a>
            <a
              href="/signup"
              id="sign-up-button"
              className="bg-black text-white px-4 py-2 rounded-md hover:opacity-80 text-md font-medium ml-3"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  </>
);

export default IndexPage;
