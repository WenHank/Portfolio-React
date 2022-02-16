import React from "react";
import { CardGroup, Card, Button, Modal, Carousel } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import "./Contact.css";

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
    <div className="Contactobject">
      <TitleContainer
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
        }}
      >
        {" "}
        <div className="Title">
          <h1>Contact</h1>
        </div>
      </TitleContainer>
    </div>
  );
}

export default Project;
