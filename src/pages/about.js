import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import ReactDOM from 'react-dom'
import '../layouts/index.css'

const Banner = styled.div`
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/5/52/Mount_Ellinor%2C_Mount_Washington_Panorama.jpg');
    background-position: center center;
`;

const Container = styled.div`

`;

const Content = styled.p`
  padding-top: 30px;
`;


const AboutPage = () => (
  <div>
    <Container className="container">
      <Banner className="page-banner">
        <h1>About</h1>
      </Banner>
      <Content>
        Hi — I’m Sara Inés Calderón!
        I’m a software engineer, writer, Director of Women Who Code Austin, dangly earring aficionado, nail artist and Star Trek fan.
        I began my career as a journalist working at— The Brownsville Herald, Austin American-Statesman and The San Antonio Express-News — then I switched to digital media —
        Inside Facebook, NewsTaco and MiTú Network — until I found my way to Sabio.la and trained as a software developer.
        Find out more on Twitter or LinkedIn.
      </Content>
    </Container>
  </div>
)

export default AboutPage