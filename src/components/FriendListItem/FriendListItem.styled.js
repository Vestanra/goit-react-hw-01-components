import styled from 'styled-components';

export const Item = styled.li`
display: flex;
justify-content: start;
align-items: center;
gap: ${p => p.theme.spacing(3)};
padding: ${p => p.theme.spacing(2)};
border: 2px solid ${p => p.theme.colors.background};
box-shadow: ${props => props.theme.shadow};
`;

export const Status = styled.span`
display: block;
width: ${p => p.theme.spacing(2)};
height: ${p => p.theme.spacing(2)};
border-radius: 50%;
background-color: ${({is_online}) => {
    return is_online ? "#23b34f" : "#e64730"
}}
`;

export const Avatar = styled.img`
    background-color: ${p => p.theme.colors.background}; 
    border-radius: 30%;
`;

export const Name = styled.p`
color: ${p => p.theme.colors.textTitle};
`;