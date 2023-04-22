import homePhoto from "../assets/home-photo.jpg";
import Image from "next/image";

const IndexPage = () => (
  <main className="md:container md:mx-auto">
    <div className="container h-screen">
      <nav className="bg-blue-950 shadow opacity-90 rounded">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-white text-xl">Everything Gaming</h1>
            </div>
            <div className="flex items-center">
              <a
                href="/login"
                id="login-button"
                className="text-white-600 text-xl hover:opacity-80  px-3 py-2 rounded-md  font-medium"
              >
                Login
              </a>
              <a
                href="/signup"
                id="sign-up-button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-md font-medium ml-3"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Image className="h-4/5 object-cover" src={homePhoto} alt="Home" />
    </div>
    <div className="container h-screen"></div>
  </main>
);

export default IndexPage;
