import React from "react";
import { CardGroup, Card, Button, Modal, Carousel } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import "./Project.css";

function ProjectCarousel(params) {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="./Img/DSV1.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Img/DSV2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./Img/DSV3.png" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./Img/DSV4.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Img/DSV5.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./Img/DSV6.png" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
const TitleContainer = styled(animated.div)`
  display: inline-block;
  padding: 13px 10px 5px 10px;
  background: #c7d2fe66;
  border-radius: 30px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
function Project() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <div className="Projectobject">
      <TitleContainer
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
        }}
      >
        {" "}
        <div className="Title">
          <h1>Project</h1>
        </div>
      </TitleContainer>
      <Card className="ProjectCard">
        <ProjectCarousel />
        <Card.Body>
          <h2 className="titleChange">D.S.V</h2>
          <Card.Title className="ProjectCardLittleTitle">Purpose</Card.Title>
          <h6>
            By visualizing data, users can fully understand how the data
            structure works.
          </h6>
          <Card.Title className="ProjectCardLittleTitle">Tool</Card.Title>
          <div className="ProjectCardTool">
            <img src="https://img.icons8.com/offices/64/000000/php-logo.png" />
            <img src="https://img.icons8.com/color/30/000000/pug.png" />
            <img src="https://img.icons8.com/color/48/000000/mongodb.png" />
          </div>
          <Button variant="secondary">See it on GitHub</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;
