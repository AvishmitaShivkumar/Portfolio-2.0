import styled from "styled-components";
import dataProjects from "./dataProjects";


const Projects = () => {

return (
    <Wrapper> 
            {
            dataProjects.map((project) => {
                return (
                    <ProjectWrapper key={project.title}>
                        <TitleImage>
                            <HeaderStyle>
                                <div>
                                    <Title>{project.title}</Title>
                                    <SubTitle>{project.subtitle}</SubTitle>
                                </div>
                                <LinkStyle>
                                <ExtLink href={project.repo}>Github</ExtLink>   
                                {project.deployedURL && <ExtLink href={project.deployedURL}>Website</ExtLink>}
                                
                                </LinkStyle>
                            </HeaderStyle>
                        <a href={project.deployedURL ? project.deployedURL : project.repo}><Image src={project.image} alt={project.imageAlt}/></a>
                        </TitleImage>
                        <TextDetails>
                            <p>{project.description}</p>
                            <div>
                            <TechTitle>Technologies used: </TechTitle> {project.technologies.map((technology) => {
                                return (
                                    <p>{technology}</p>
                                )
                            })}  
                        </div>
                        </TextDetails>                      
                    </ProjectWrapper>
                )
            })
            }
    </Wrapper>
)
};

const Wrapper = styled.div`
background-color: var(--color-secondary);
width: 100vw;
color: var(--color-primary);
margin: auto;

@media screen and (min-width: 768px) {
width: 80vw;
display: flex;
flex-direction: column;
align-items: center;
}
`
const ProjectWrapper = styled.div`
padding: 1.5rem 0;

@media screen and (min-width: 768px) {
margin: 1.5rem 4rem;
display: flex;
align-items: center;
}
`
const TitleImage = styled.div`
margin: 0.5rem 2rem;

@media screen and (min-width: 768px) {
}
`
const TextDetails = styled.div`
margin: 0.5rem 2rem;

@media screen and (min-width: 768px) {
    margin: 0.5rem ;
}
`
const HeaderStyle =styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
`
const Title = styled.h1`
font-size: 1.2rem;
`
const SubTitle = styled.h3`
padding: 0.7rem 0;
`
const LinkStyle = styled.div`
display: flex;
flex-direction: column;
`

const TechTitle = styled.p`
text-decoration: underline;
padding-top: 0.8rem;

@media screen and (min-width: 768px) {
padding: 0;
}
`
const ExtLink = styled.a`
text-decoration: none;
background-color: var(--color-tertiary);
height: 1.2rem;
padding:0.3rem 0.5rem;
color: var(--color-secondary);
font-family: var(--header-font-family);
margin: 0.3rem;
margin-right: 0;

&:link,
&:visited {
  color: var(--color-secondary);
}
&:hover,
&:active {
  background-color: var(--color-primary);
}
`
const Image = styled.img`
width: 100%;
height:auto ;
object-fit: contain;
margin-top: 1rem;

@media screen and (min-width: 768px) {
width: 40vw;
}
`



export default Projects