import React from "react";
import { Stack, Typography } from "@mui/material";
import UIBox from "./ui/UIBox";
import CardButton from "./ui/CardButton";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Links() {
  const linksData = [
    {
      link: "https://www.melxincognito.com/",
      title: "Portfolio",
      icon: <WebIcon />,
      index: 0,
    },
    {
      link: "https://www.linkedin.com/in/melgonzalez092/",
      title: "LinkedIn",
      icon: <LinkedInIcon />,
      index: 1,
    },
    {
      link: "https://github.com/melxincognito",
      title: "GitHub",
      icon: <GitHubIcon />,
      index: 2,
    },
    {
      link: "https://www.twitter.com/melxincognito",
      title: "Twitter",
      icon: <TwitterIcon />,
      index: 3,
    },
    {
      link: "https://www.youtube.com/channel/UCIsEgMaokVbYBt6siV9y1NQ",
      title: "Youtube",
      icon: <YouTubeIcon />,
      index: 4,
    },
  ];

  return (
    <div>
      <Stack spacing={2} direction="column">
        {linksData.map((link) => (
          <UIBox key={link.index}>
            <CardButton
              onClick={() => {
                window.open(`${link.link}`, "_blank");
              }}
            >
              {link.icon}
              <Typography> {link.title} </Typography>
            </CardButton>
          </UIBox>
        ))}
      </Stack>
    </div>
  );
}
