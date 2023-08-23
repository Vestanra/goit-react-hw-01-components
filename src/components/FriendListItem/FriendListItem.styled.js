import styled from 'styled-components';

export const Item = styled.li`
display: flex;
justify-content: start;
align-items: center;
gap: 24px;
padding: 16px;
border: 2px solid ${p => p.theme.colors.background};
box-shadow: ${props => props.theme.shadow};
`;

export const Status = styled.span`
display: block;
width: 20px;
height: 20px;
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