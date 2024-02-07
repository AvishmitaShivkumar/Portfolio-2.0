import { styled } from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { useState } from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import Technologies from "./Technologies";


const Home = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  

    return (
      <Wrapper>
        <Container>
            <FName>Avishmita</FName>
            <LName>Shivkumar</LName>
            <SubTitle> Full-Stack Developer </SubTitle>
        </Container>
        <TextBody>Passionate about storytelling and crafting experiences. 
            I love well-thought-out details, imbued with meaning, 
            and helping you bring your ideas to life.</TextBody>
        <Menu>
          <Header onClick={() => setOpenAbout(!openAbout)}>Technologies, Frameworks & Tools</Header>
            {openAbout && (
              <Technologies/>
            )}
            <Header onClick={() => setOpenProjects(!openProjects)}>Projects</Header>
            {openProjects && (
              <Projects/>
            )}
            <Header onClick={() => setOpenContact(!openContact)}>Contact</Header>
            {openContact && (
              <Contact/>
            )}
            
        </Menu>
        <Socials>
          <ExtLink href="https://linkedin.com/in/avishmita-shivkumar">
            <FaLinkedin/>
          </ExtLink>
          <ExtLink href="https://github.com/avishmitaShivkumar">
            <FaGithub/>
          </ExtLink>
        </Socials>
      </Wrapper>
    )
};

const Wrapper = styled.div`
color: var(--color-secondary);
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin: 1rem;

@media screen and (min-width: 768px) {
  margin: 5rem;
}
`
const Container = styled.div`
margin: 2rem;

@media screen and (min-width: 768px) {
  margin: 3rem;
}
`
const FName = styled.h1`
font-family: var(--header-font-family);
font-size: 3rem;
position: relative;
left:-1rem;

@media screen and (min-width: 768px) {
  font-size: 5rem;
  left:-2rem;
}
`
const LName =styled.h1`
font-family: var(--subheader-font-family);
font-size: 3rem;
position: relative;
left: 1rem;

@media screen and (min-width: 768px) {
  font-size: 5rem;
  left: 2rem;
}
`
const SubTitle = styled.h2`
font-family: var(--subheader-font-family);
font-size: 1.5rem;
color: var(--color-tertiary);
margin-top: 2rem;

@media screen and (min-width: 768px) {
  font-size: 2rem;
  text-align: center;
}
`
const TextBody = styled.p`
font-family: var(--body-font-family);
width: 17rem;
text-align: center;
hyphens: none;
line-height: 1.4;

@media screen and (min-width: 768px) {
  line-height: 1.6;
  width: 40vw;
  
}
`
const Menu = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin: 1.5rem 2rem;

@media screen and (min-width: 768px) {
 margin: 2rem;
}
`
const Header = styled.button`
font-family: var(--subheader-font-family);
font-size: 1.5rem;
color: var(--color-secondary);
background: none;
border: none;
margin: 0.6rem;
max-width: 80vw;

@media screen and (min-width: 768px) {
 margin: 1rem;
}
`
const Socials = styled.div`
display: flex;
margin: 1rem;

`
const ExtLink = styled.a`
font-size: 1.5rem;
padding: 0 1rem;

&:link,
&:visited {
  color: var(--color-secondary);
}
&:hover,
&:active {
  color: var(--color-tertiary);
}

@media screen and (min-width: 768px) {
 font-size: 2rem;
}
`

export default Home;
