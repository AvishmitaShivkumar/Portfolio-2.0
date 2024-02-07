import styled from "styled-components";


const Technologies = () => {

    const technologies = ["HTML", "CSS", "Javascript", "React.js", "Node.js", "Express.js", "Mongo DB", "Git", "VSCode", "Figma", "Adobe XD", "Trello", "Notion", "Google Cloud"]
    
    
    return (
        <Wrapper>
            <Container>
            {technologies.map((technology) => {
                return(
                    <TechName>{technology}</TechName>
                )
            })
            }
            </Container>
        </Wrapper>
    )
};

const Wrapper = styled.div`
background-color: var(--color-secondary);
color: var(--color-primary);
width: 100vw;
padding: 1rem 0;
text-align: center;

@media screen and (min-width: 768px) {
    width: 80vw;
}
`
const Container = styled.div`
margin: 1rem;
line-height: 1.3rem;
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const TechName = styled.p`
padding: 0.2rem 0.4rem;
`

export default Technologies;