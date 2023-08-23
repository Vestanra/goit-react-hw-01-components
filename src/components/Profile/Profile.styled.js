import styled from 'styled-components';

export const ProfileWrap = styled.div`
    min-width: 300px;
    justify-content: center;
    text-align:center;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
`;

export const Description = styled.div`
    border: 2px solid ${p => p.theme.colors.background};
    box-shadow: ${props => props.theme.shadow};
    padding: ${p => p.theme.spacing(2)};
`;

export const Avatar = styled.img`
    width: 200px;
    background-color: ${p => p.theme.colors.background}; 
    border-radius: 50%;
`;
export const Name = styled.p`
    color: ${p => p.theme.colors.textTitle};
    font-weight: 700;
    font-size: 24px;
    margin-top: ${p => p.theme.spacing(2)};
    margin-bottom: ${p => p.theme.spacing(1)};
`;

export const Location = styled.p`
    margin-top: ${p => p.theme.spacing(1)};
    margin-bottom: ${p => p.theme.spacing(1)};
`;
export const List = styled.ul`
    display:flex;
    background-color: ${p => p.theme.colors.backgroundOpacity};
    :nth-child(2) {
    border-left: none;
    border-right: none;
    }
`;
export const ListItem = styled.li`
    display: flex;
    width: 100%;
    border: 2px solid ${p => p.theme.colors.background};
    border-top: none;
    padding: ${p => p.theme.spacing(1)};
    flex-direction: column;
`;

export const Quantity = styled.span`
    color:${p => p.theme.colors.textTitle};
    font-weight: 500;
`;