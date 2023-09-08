import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Card from "./Card";
import { Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import quoteData from "./assets/Quotes.json";
import colorData from "./assets/Colors.json";

function App() {
  const [quote, setQuote] = useState(quoteData[0].quote);
  const [author, setAuthor] = useState(quoteData[0].name);
  const [color, setColor] = useState(colorData[0].name);

  let changeQuote = () => {
    const randomNumber = Math.floor(Math.random() * 9);
    setQuote(quoteData[randomNumber].quote);
    setAuthor(quoteData[randomNumber].name);
    setColor(colorData[Math.floor(Math.random() * 30)]);
  };

  return (
    <Box
      sx={{
        margin: 0,
        display: "grid",
        placeItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        minWidth: 320,
        backgroundColor: color.name,
      }}
    >
      <Card
        quote={quote}
        author={author}
        changeQuote={changeQuote}
        color={color.name}
      />
    </Box>
  );
}

export default App;
