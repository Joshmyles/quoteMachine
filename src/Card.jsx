import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import QuoteIcon from "@mui/icons-material/FormatQuote";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  return (
    <Container>
      <Paper
        elevation={3}
        sx={{
          width: 500,
          height: "auto",
          display: "grid",
          padding: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <FontAwesomeIcon
            icon={faQuoteLeft}
            style={{ color: props.color, fontSize: 35, marginRight: 15 }}
          />
          <Typography variant="h5" component="h2" sx={{ color: props.color }}>
            {props.quote}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            pt: 3,
            pb: 3,
            color: props.color,
          }}
        >
          - {props.author}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: props.color,
              }}
            >
              <TwitterIcon />
            </Button>
            <Button
              variant="contained"
              sx={{ ml: 1 }}
              style={{ backgroundColor: props.color }}
            >
              <InstagramIcon />
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={props.changeQuote}
              style={{
                backgroundColor: props.color,
              }}
            >
              New Quote
            </Button>
          </Box>
        </Box>
      </Paper>
      <Container sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography variant="body2" component="p" sx={{ color: "white" }}>
          By: Wass gud
        </Typography>
      </Container>
    </Container>
  );
}

export default Card;
