import styled from 'styled-components';

export const Table = styled.table`
min-width: 300px;
text-align: center;
box-shadow: ${props => props.theme.shadow};

border: 2px solid red;
border-collapse: collapse;
`;

export const Head = styled.thead`
background-color: ${p => p.theme.colors.background};
`;

export const HeadText = styled.th`
color: ${p => p.theme.colors.textTitle};
border: 2px solid ${p => p.theme.colors.table};
padding: 12px; 
`
export const Body = styled.tbody`
tr:nth-child(even) {
  background-color: ${p => p.theme.colors.backgroundOpacity};
}
`;

export const BodyText = styled.td`
padding: 8px; 
border: 2px solid ${p => p.theme.colors.table};
`;