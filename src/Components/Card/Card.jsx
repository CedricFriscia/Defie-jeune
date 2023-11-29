import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const downloadCV = (cvPath, firstname, lastname) => {
  fetch(cvPath)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `CV-${firstname}-${lastname}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => console.error("Error downloading CV:", error));
};

const RecipeReviewCard = ({
  firstname,
  lastname,
  birthday,
  search,
  linkedin,
  description,
  mail,
  cv,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLinkedInClick = () => {
    window.open(linkedin, "_blank");
  };

  const handleMailClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(mail);

    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const handleDownloadCV = () => {
    downloadCV(cv, firstname, lastname);
  };

  return (
    <Card sx={{ width: 345 }} className="card">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {firstname && lastname
              ? `${firstname.charAt(0)}${lastname.charAt(0)}`
              : ""}
          </Avatar>
        }
        title={firstname + " " + lastname}
        subheader={birthday}
      />

      <div className="card__content">
        <h2 className="card__content--search">Poste recherché :</h2>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {search}
          </Typography>
        </CardContent>
      </div>

      <CardActions disableSpacing>
        {linkedin === "" ? null : (
          <IconButton aria-label="Linkedin" onClick={handleLinkedInClick}>
            <LinkedInIcon />
          </IconButton>
        )}
        {mail === "" ? null : (
          <IconButton aria-label="mail" onClick={handleMailClick}>
            <MailOutlineIcon />
          </IconButton>
        )}

        {open === true ? (
          <p className="card__notification">Mail copié !</p>
        ) : null}

        {cv === "" ? null : (
          <IconButton aria-label="CV" onClick={handleDownloadCV}>
            <AccountBoxIcon />
          </IconButton>
        )}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description :</Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeReviewCard;
