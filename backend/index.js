import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@scms.com" && password === "Hari@123") {
    return res.json({
      message: "Login successful",
      token: "mock-token-123", // Add this
    });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running.");
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});




