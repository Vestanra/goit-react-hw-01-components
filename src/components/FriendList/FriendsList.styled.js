import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: ${p => p.theme.spacing(2)};
min-width: 300px;
font-size: 20px;
line-height: 1.5;
letter-spacing: 0.02em;
color: ${p => p.theme.colors.textTitle};
font-weight: 500;
`;
