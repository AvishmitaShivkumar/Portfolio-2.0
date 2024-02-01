import { styled } from "styled-components";

const Home = () => {
    return (
      <Wrapper>
        <Container>
            <FName>Avishmita</FName>
            <LName>Shivkumar</LName>
            <SubTitle> Full-Stack Developer </SubTitle>
        </Container>
        <Menu>
            <Header>About</Header>
            <Header>Projects</Header>
            <Header>Contact</Header>
        </Menu>
      </Wrapper>
    )
};

const Wrapper = styled.div`
background-color: var(--color-primary);
color: var(--color-secondary);
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Container = styled.div`
padding: 2rem;
`
const FName = styled.h1`
font-family: var(--header-font-family);
font-size: 3rem;
`
const LName =styled.h1`
font-family: var(--subheader-font-family);
font-size: 3rem;
`
const SubTitle = styled.h2`
font-family: var(--subheader-font-family);
font-size: 1.5rem;
color: var(--color-tertiary);
`
const Menu = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height:10rem;
padding: 2rem;
`
const Header = styled.h3`
font-family: var(--subheader-font-family);
font-size: 1.3rem;
`

export default Home;
