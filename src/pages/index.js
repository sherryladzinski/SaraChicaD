import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import ReactDOM from 'react-dom'
import '../layouts/index.css'

const FlipSection = styled.div`
  // margin: 3rem auto;
  // max-width: 600px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
`;

const Container = styled.div`
  // // display: flex;
  // // align-items: center;
  // // margin: 0 auto 12px auto;
`;

const Front = styled.div`

`;

const Back = styled.div`

`;

const Card = styled.div`

`;

const CardName = styled.h2`

`;

const Excerpt = styled.p`
  // margin: 0;
`;

const Flipper = props => (
  <Container className="flip-container">
    <Card className="flipper">
      <Front className="front"
        style={{
          backgroundImage: `url(${props.avatar})`
        }}
      >
        <CardName>{props.username}</CardName>
        <Excerpt>{props.front_text}</Excerpt>
      </Front>
      <Back className="back">
        <Link to={props.link}>{props.back_text}</Link>
      </Back>
    </Card>
  </Container>
);

export default () => (
  <FlipSection className="flip-section">
    <h1>Homepage</h1>
    <row>
      <Flipper
        username="Writing and Speaking"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        front_text="Writing and Speaking"
        back_text="this is the back text"
        link="/github/"/>
      <Flipper
        username="Twitter"
        avatar="https://img.buzzfeed.com/buzzfeed-static/static/2017-01/31/16/asset/buzzfeed-prod-fastlane-01/sub-buzz-29032-1485899452-1.jpg"
        front_text="Twitter"
        back_text="this is the back text"
        link="/github/"/>
      <Flipper
        username="Freelance"
        avatar="https://img.buzzfeed.com/buzzfeed-static/static/2017-01/31/16/asset/buzzfeed-prod-fastlane-01/sub-buzz-29032-1485899452-1.jpg"
        front_text="Twitter"
        back_text="this is the back text"
        link="/github/"/>
      <Flipper
        username="WWC"
        avatar="https://img.buzzfeed.com/buzzfeed-static/static/2017-01/31/16/asset/buzzfeed-prod-fastlane-01/sub-buzz-29032-1485899452-1.jpg"
        front_text="Twitter"
        back_text="this is the back text"
        link="/github/"/>
    </row>
  </FlipSection>
);