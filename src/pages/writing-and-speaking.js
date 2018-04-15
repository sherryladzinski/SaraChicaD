import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import ReactDOM from 'react-dom'
import '../layouts/index.css'

const Container = styled.div`

`;

const ArticleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.a`

`;

const Excerpt = styled.p`
  margin: 0;
`;

const Banner = styled.div`
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/5/52/Mount_Ellinor%2C_Mount_Washington_Panorama.jpg');
    background-position: center center;
`;

const Intro = styled.p`
  padding-top: 30px;
`;

const Article = props => (
  <ArticleWrapper>
    <Description>
      <a href={props.link} target="_blank">{props.title}</a>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </ArticleWrapper>
);

export default () => (
  <Container className="container">
    <Banner className="page-banner">
      <h1>Writing and Speaking</h1>
    </Banner>
    <Intro>
      In addition to being a software developer, I still write and I’m a public speaker.
      Check out some of my recent writing here: <br /><br />
      <a href="">Link 1</a><br />
      <a href="">Link 2</a>
    </Intro>
    <Article
      title="Tech Inclusion in Austin"
      link="https://motherboard.vice.com/en_us/article/qkv5xq/can-learning-to-code-delay-alzheimers"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
    <Article
      title="Sample Article 2"
      link="https://motherboard.vice.com/en_us/article/qkv5xq/can-learning-to-code-delay-alzheimers"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
  </Container>
);