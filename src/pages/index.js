import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import ReactDOM from 'react-dom'
import '../layouts/index.css'

const FlipSection = styled.div`
  // margin: 3rem auto;
  max-width: 100%;
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

const CardName = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Excerpt = styled.p`
  vertical-align: middle;
`;

const Flipper = props => (
  <Container className="flip-container">
    <Card className="flipper">
      <Front className="front"
        style={{
          backgroundImage: `url(${props.avatar})`,
          backgroundPosition: 'center center',
        }}
      >
        <span><CardName>{props.username}</CardName></span>
      </Front>
      <Link to={props.link}>
        <Back className="back">
          <Excerpt>{props.back_text}</Excerpt>
        </Back>
      </Link>
    </Card>
  </Container>
);

export default () => (
  <FlipSection className="flip-section">
    <row>
      <Flipper
        username="Writing and Speaking"
        avatar="https://www.thehappycatsite.com/wp-content/uploads/2017/10/best-treats-for-kittens.jpg"
        front_text="Writing and Speaking"
        back_text="Description text and link for Writing and Speaking card"
        link="/writing-and-speaking/"/>
      <Flipper
        username="Twitter"
        avatar="http://www.plupetstore.com/wp-content/uploads/1499/99595d7cd7c3b23.jpg"
        front_text="Twitter"
        back_text="Description text and link for Twitter card"
        external_link="https://twitter.com/sarachicad"/>
      <Flipper
        username="Freelance"
        avatar="https://www.pets4homes.co.uk/images/articles/3448/large/six-health-essentials-that-you-should-monitor-in-your-kittens-first-few-weeks-of-life-56a6114cb4003.jpg"
        front_text="Twitter"
        back_text="Description text and link for Freelance card"
        link="/freelance/"/>
      <Flipper
        username="Women Who Code"
        avatar="https://wallpapersite.com/images/wallpapers/cute-kittens-2560x1440-adorable-hd-5655.jpg"
        front_text="Twitter"
        back_text="Description text and link for Women Who Code card"
        link="/women-who-code/"/>
      <Flipper
        username="Github"
        avatar="https://www.pets4homes.co.uk/images/articles/3715/large/dealing-with-fleas-on-young-kittens-57ec003b91a56.jpg"
        front_text="Twitter"
        back_text="Description text and link for Github card"
        link="/github/"/>
      <Flipper
        username="Medium"
        avatar="https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/56/147/83454811.jpg"
        front_text="Twitter"
        back_text="Description text and link for Medium card"
        link="/medium/"/>
      <Flipper
        username="About"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpCfUzfgP9AwDH4wyRqKQcE_8HKNWBOfL6NpxayiismPIbPqLXw"
        front_text="Twitter"
        back_text="Description text and link for About card"
        link="/about/"/>
      <Flipper
        username="Contact"
        avatar="https://assets.vancouverisawesome.com/wp-content/uploads/2017/11/27140838/tiny-kittens.jpg"
        front_text="Twitter"
        back_text="Description text and link for Contact card"
        link="/contact/"/>
      <Flipper
        username="LinkedIn"
        avatar="https://i.pinimg.com/originals/2d/52/94/2d52942768bc5c1e2835b1e8b06924a2.jpg"
        front_text="Twitter"
        back_text="Description text and link for LinkedIn card"
        external_link="/github/"/>
    </row>
  </FlipSection>
);