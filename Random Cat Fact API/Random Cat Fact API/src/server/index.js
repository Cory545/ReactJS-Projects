import express from "express";
import cors from "cors";
const app = express();
const port = 5173;

// Allow requests from your React application
app.use(cors({
  origin: 'http://localhost:3000' // Replace with your React app's URL if different
}));

app.get('/data', (req, res) => {
  const data = {
    message: 'Hello from Node.js!',
  };

  res.json(data);
});

app.listen(port, () => {
  console.log(`Node.js server listening on port ${port}`);
});