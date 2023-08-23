import styled from "styled-components";

export const Layout = styled.div`
display: flex;
/* flex-direction: column;
align-items: center; */
padding: ${p => p.theme.spacing(5)} 0;
flex-wrap: wrap;
gap: ${p => p.theme.spacing(5)};
justify-content: center;
color: ${p => p.theme.colors.text};
`;