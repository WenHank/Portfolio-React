import React from "react";
import { CardGroup, Card, Button, Modal, Carousel } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import "./About.css";

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
function About() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <div className="Aboutobject">
      <TitleContainer
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
        }}
      >
        {" "}
        <div className="Title">
          <h1>About</h1>
        </div>
      </TitleContainer>
      <Card style={{ width: "500px" }} className="MyselfCard">
        <Card.Body className="MyselfCardBody">
          <img className="MyselfImg" src="./Img/wen.jpg" />
          <div>
            <Card.Title className="MyselfCardTitle">
              Name:{" "}
              <Card.Subtitle className="mb-2 text-muted">Wen</Card.Subtitle>
            </Card.Title>
            <Card.Title className="MyselfCardTitle">
              Graduate:{" "}
              <Card.Subtitle className="mb-2 text-muted">YZU</Card.Subtitle>
            </Card.Title>
            <Card.Title className="MyselfCardTitle">
              Email:{" "}
              <Card.Subtitle className="mb-2 text-muted">
                hanklovemrs30@gmail.com
              </Card.Subtitle>
            </Card.Title>
            <Card.Title className="MyselfCardTitle">
              Skill:{" "}
              <Card.Subtitle className="mb-2 text-muted">
                <img src="https://img.icons8.com/plasticine/100/000000/react.png" />
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <img src="https://img.icons8.com/fluency/48/000000/node-js.png" />
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <img src="https://img.icons8.com/color/48/000000/mongodb.png" />
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                <img src="https://img.icons8.com/ios/50/000000/mysql-logo.png" />
              </Card.Subtitle>
            </Card.Title>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
