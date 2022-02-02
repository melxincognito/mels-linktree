import React from "react";
import { Stack, Button } from "@mui/material";
import UIBox from "./ui/UIBox";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Links() {
  const buttonStyles = {
    backgroundColor: "rgb(55, 6, 101)",
    gap: "10px",
  };

  function portfolioPageClick() {
    window.open("https://www.melxincognito.com/", "_blank");
  }
  function twitterPageClick() {
    window.open("https://www.twitter.com/melxincognito", "_blank");
  }

  function youtubePageClick() {
    window.open(
      "https://www.youtube.com/channel/UCIsEgMaokVbYBt6siV9y1NQ",
      "_blank"
    );
  }
  function githubPageClick() {
    window.open("https://github.com/melxincognito", "_blank");
  }

  function linkedInPageClick() {
    window.open("https://www.linkedin.com/in/melgonzalez092/", "_blank");
  }

  return (
    <div>
      <Stack spacing={2} direction="column">
        <UIBox>
          <Button
            variant="contained"
            sx={buttonStyles}
            onClick={portfolioPageClick}
          >
            <WebIcon />
            Portfolio
          </Button>
        </UIBox>
        <UIBox>
          <Button
            variant="contained"
            sx={buttonStyles}
            onClick={githubPageClick}
          >
            <GitHubIcon />
            GitHub
          </Button>
        </UIBox>
        <UIBox>
          <Button
            variant="contained"
            sx={buttonStyles}
            onClick={twitterPageClick}
          >
            <TwitterIcon />
            Twitter
          </Button>
        </UIBox>
        <UIBox>
          <Button
            variant="contained"
            sx={buttonStyles}
            onClick={youtubePageClick}
          >
            <YouTubeIcon />
            Youtube
          </Button>
        </UIBox>

        <UIBox>
          <Button
            variant="contained"
            sx={buttonStyles}
            onClick={linkedInPageClick}
          >
            <LinkedInIcon />
            LinkedIn
          </Button>
        </UIBox>
      </Stack>
    </div>
  );
}
