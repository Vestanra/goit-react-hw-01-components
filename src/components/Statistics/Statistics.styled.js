import styled from 'styled-components';

export const Section = styled.section`
min-width: 300px;
`;

export const TitleText = styled.h2`
padding: ${p => p.theme.spacing(2)} 0;
text-align: center;
color: ${p => p.theme.colors.textTitle};
border: 2px solid ${p => p.theme.colors.background};
border-bottom: none;
box-shadow: ${props => props.theme.shadow};
`;

export const ListStats = styled.ul`
display: flex;
justify-content: center;
text-align: center;
border: 2px solid ${p => p.theme.colors.background};
:first-child {
    border-left: none;
    }
`;

export const ItemStat = styled.li`
display: flex;
width: 100%;
flex-direction: column;
padding: ${p => p.theme.spacing(1)};
background-color: ${p => p.theme.colors.backgroundOpacity};
border-left: 2px solid ${p => p.theme.colors.background};
`;