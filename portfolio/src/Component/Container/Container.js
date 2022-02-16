import React from "react";
import { CardGroup, Card, Button, Modal, Carousel } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import "./Container.css";
import About from "./About/About";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";

function Container() {
  return (
    <div className="Containerobject">
      <div id="About">
        <About />
      </div>
      <div id="Project">
        <Project />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default Container;
