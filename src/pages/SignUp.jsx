import React, { useState } from "react";
import { FolderBase } from "../FAKEAPI/fakeDatabase";
import { useNavigate } from "react-router-dom";

const SignUp = ({ onSignSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [whatsappURL, setWhatsappURL] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // when the field is empty
    if (!username || !password || !email) {
      setErrorMessage("All Fields required!");
      setSuccessMessage("");
      return;
    }
    //  when is in the db already
    const userExists = FolderBase.find(
      (user) => user.name === username || user.email === email
    );
    if (userExists) {
      setErrorMessage("User already exist!");
      setSuccessMessage("");

      return;
    }

    //  when a new user is signing up
    const newUser = { username, email, password };
    FolderBase.push(newUser);

    setUsername("");
    setEmail("");
    setPassword("");
    setErrorMessage("");
    setSuccessMessage("User succesfully registered");

    if (onSignSuccess) onSignSuccess(); // Notifying the parent of successful sign up
  };

  return (
    <div className=" xxs:w-[90%] sm:w-full xs:max-w-md mx-auto xxs:mt-10 md:mt-5 p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSignUp} className=" xxs:space-x-2 sm:space-x-6">
        <h2 className="text-2xl font-bold text-center mb-4">Sign-Up</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <div>
          <label htmlFor="email" className="block mb-1">
            Email:
            <input
              type="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-blue-600"
            />
          </label>

          <label htmlFor="username" className="block mb-1">
            Username:
            <input
              type="text"
              value={username}
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-blue-600"
            />
          </label>

          <div className="mb-4">
            <label htmlFor="Gender" className="mb-1 block">Gender:</label>
            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2"
                />
                Male
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="mr-2"
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  className="mr-2"
                />
                Others
              </label>
            </div>
          </div>

          <label htmlFor="Whatsapp" className="block mb-1">
            WhatsappURL:
            <input
              type="text"
              value={whatsappURL}
              id="whatsappURL"
              onChange={(e) => setWhatsappURL(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-blue-600"
            />
          </label>

          <label htmlFor="password" className="block mb-4">
            Password:
            <input
              type="password"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-blue-600"
            />
          </label>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
