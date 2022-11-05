import React from "react";
import { Stack, Typography } from "@mui/material";
import UIBox from "./ui/UIBox";
import CardButton from "./ui/CardButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ComputerIcon from "@mui/icons-material/Computer";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

export default function Links() {
  const linksData = [
    {
      link: "https://www.melxincognito.com/",
      title: "Website",
      icon: <LanguageIcon />,
    },
    {
      link: "https://melxincognito.hashnode.dev/",
      title: "Blog",
      icon: <ComputerIcon />,
    },
    {
      link: "https://github.com/melxincognito",
      title: "GitHub",
      icon: <GitHubIcon />,
    },
    {
      link: "https://www.linkedin.com/in/melgonzalez092/",
      title: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    {
      link: "https://www.instagram.com/melxincognito_cssart",
      title: "CSS Art",
      icon: <InstagramIcon />,
    },
    {
      link: "https://www.twitch.tv/melxincognito",
      title: "Twitch",
      icon: <OndemandVideoIcon />,
    },
    {
      link: "https://www.youtube.com/channel/UCIsEgMaokVbYBt6siV9y1NQ",
      title: "Youtube",
      icon: <YouTubeIcon />,
    },
  ];

  return (
    <div>
      <Stack spacing={2} direction="column">
        {linksData.map((link, index) => (
          <UIBox key={index}>
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
