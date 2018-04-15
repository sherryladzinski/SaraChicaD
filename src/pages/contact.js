import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const Banner = styled.div`
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/5/52/Mount_Ellinor%2C_Mount_Washington_Panorama.jpg');
    background-position: center center;
`;

const Container = styled.div`
  margin: 3rem auto;
  margin-top: 0;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.p`
  padding-top: 30px;
`;


const ContactPage = () => (
  <div>
    <Container>
      <Banner className="page-banner">
        <h1>Contact</h1>
      </Banner>
      <Content>I’m Director of Women Who Code Austin, which is a very active chapter of the Women Who Code network,
      check us out and feel free to reach out if you’d like to sponsor us or work with us:</Content>
    </Container>
  </div>
)

export default ContactPage