import React from "react";
import { AnimatedText } from "../atoms/AnimatedText";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export const About = () => {
  return (
    <div className="about flex-col">
      <div className="about-wrapper flex-col">
        <div className="about-header flex-row">
          <h1>Despre noi!</h1>
        </div>
        <div className="about-main flex-col">
          <div className="first-row">
            <div className="row-content flex-row">
              <div className="content">
                <div className="content-left">
                  <h3>
                    <AnimatedText content="Despre ACT Men Serv!" />
                  </h3>
                  ACT Men Serv este o companie înființată în 2023 și specializată în furnizarea de
                  servicii de mentenanță în industria panificației pe raza localității Cluj-Napoca.
                  Suntem dedicați în oferirea soluțiilor profesionale și eficiente pentru
                  întreținerea echipamentelor și instalațiilor utilizate în procesul de producție a
                  produselor de panificație. Echipa noastră este alcătuită din profesioniști
                  calificați și experimentați, care pun accent pe calitate, promptitudine și
                  satisfacția clienților. Ne străduim să fim partenerul de încredere al afacerilor
                  din industria panificației, asigurând funcționarea optimă a echipamentelor și
                  minimizând timpul de inactivitate.
                </div>
              </div>
              <div className="content">
                <div className="content-right">
                  <h3>
                    <AnimatedText content="Despre Personal!" />
                  </h3>
                  <List>
                    <ListItem>
                      <ListItemIcon sx={{ color: "#fefefe" }}>
                        <DoneOutlineIcon />
                      </ListItemIcon>
                      <ListItemText>
                        Experiență vastă în domeniu - Specialiștii noștri au o experiență
                        îndelungată în industria panificatiei.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ color: "#fefefe" }}>
                        <DoneOutlineIcon />
                      </ListItemIcon>
                      <ListItemText>
                        Competență tehnică ridicată - Personalul nostru este bine instruit și posedă
                        cunoștințe tehnice avansate.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon sx={{ color: "#fefefe" }}>
                        <DoneOutlineIcon />
                      </ListItemIcon>
                      <ListItemText>
                        Servicii profesionale și prompte - Oferim servicii de calitate, asigurând
                        intervenții rapide și eficiente.
                      </ListItemText>
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="second-row">
            <div className="content-bottom">
              <h3>
                <AnimatedText content="Despre Servicii!" />
              </h3>
              <List>
                <ListItem>
                  <ListItemIcon sx={{ color: "#fefefe" }}>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Montarea echipamentelor - Specialiștii noștri montează cu precizie echipamentele
                    necesare în industria panificatiei.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ color: "#fefefe" }}>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Întreținerea echipamentelor - Ne asigurăm că echipamentele sunt întreținute
                    periodic pentru a funcționa în parametri optimi.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon sx={{ color: "#fefefe" }}>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Repararea echipamentelor - Avem abilitățile și cunoștințele necesare pentru a
                    repara echipamentele defecte, minimizând timpul de inactivitate.
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
