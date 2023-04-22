const Signup = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Sign up</h1>
      <form className="flex flex-col space-y-4 w-full max-w-md">
        <label className="block">
          <span className="text-gray-700">First Name</span>
          <input
            type="text"
            name="firstName"
            className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Last Name</span>
          <input
            type="text"
            name="lastName"
            className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            name="password"
            className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Sign up
        </button>
      </form>
      <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-4">
        Sign up with Google
      </button>
    </div>
  );
};

export default Signup;
