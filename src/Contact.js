import styled from "styled-components";

 const Contact = () => {

return (
    <Wrapper>
    <p>Email me at avishmita@gmail.com or send me a message on LinkedIn</p>
    </Wrapper>
)

 };
 
 const Wrapper = styled.div`
 background-color: var(--color-secondary);
 width: 100vw;
 padding: 2rem 0;
 color: var(--color-primary);
 text-align: center;

 @media screen and (min-width: 768px) {
    width: 80vw;
}
 `

 export default Contact