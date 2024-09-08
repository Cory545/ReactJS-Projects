import express from "express";
const app = express();
const port = 3000;

app.get('/api/data', async (req, res) => {
  try {
    //Make the url a variable, and then fetch() it
    const url = "https://api.quotable.io/quotes/random";
    const response = await fetch(url);
    //If response is not ok - error.
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // Get the response in json.
    const json = await response.json();
    // Grab the first one in the array of the json variable.
    const quote = json[0];
    res.status(200).json(quote); // Send the quote object as JSON response
  } catch (error) {
    console.log(error);
  };
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});