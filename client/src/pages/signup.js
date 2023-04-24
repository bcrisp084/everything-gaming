import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutation";

function Signup() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        userName: formState.userName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Sign up</h1>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col space-y-4 w-full max-w-md"
      >
        <label className="block">
          <span className="text-white-700">First Name</span>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-white-700">Last Name</span>
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-white-700">Email</span>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            className="form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-white-700">Username</span>
          <input
            onChange={handleChange}
            type="text"
            name="userName"
            className="text-black-500 form-input mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-white-700">Password</span>
          <input
            onChange={handleChange}
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
}

export default Signup;
