import axios from "axios";

export const loginUser = async (email, password) => {
  const response = await axios.post("http://localhost:5000/api/login", {
    email,
    password,
  });

  // Optional: Save login token or auth flag
  localStorage.setItem("auth", "true");

  return response.data.message;
};


