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
    margin-top: 20px;
    margin-bottom: 12px;
`;

export const Location = styled.p`
    margin-top: 8px;
    margin-bottom: 8px;
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
    padding: 8px;
    flex-direction: column;
`;

export const Quantity = styled.span`
    color:${p => p.theme.colors.textTitle};
    font-weight: 500;
`;