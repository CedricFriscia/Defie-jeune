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

import "./styles.scss";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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

export default function RecipeReviewCard({
  firstname,
  lastname,
  birthday,
  search,
  linkedin,
  description,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [link, setLink] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLinkedInClick = () => {
    window.open(linkedin, "_blank");
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
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
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
          <Typography paragraph>{linkedin}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
