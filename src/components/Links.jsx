import React from "react";
import { Stack } from "@mui/material";
import UIBox from "./ui/UIBox";
import CardButton from "./ui/CardButton";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Links() {
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
          <CardButton onClick={portfolioPageClick}>
            <WebIcon />
            Portfolio
          </CardButton>
        </UIBox>
        <UIBox>
          <CardButton onClick={githubPageClick}>
            <GitHubIcon />
            GitHub
          </CardButton>
        </UIBox>
        <UIBox>
          <CardButton onClick={twitterPageClick}>
            <TwitterIcon />
            Twitter
          </CardButton>
        </UIBox>
        <UIBox>
          <CardButton onClick={youtubePageClick}>
            <YouTubeIcon />
            Youtube
          </CardButton>
        </UIBox>

        <UIBox>
          <CardButton onClick={linkedInPageClick}>
            <LinkedInIcon />
            LinkedIn
          </CardButton>
        </UIBox>
      </Stack>
    </div>
  );
}
