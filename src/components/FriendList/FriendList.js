import PropTypes from 'prop-types';
import { Item, List, Status, Avatar, Name, } from './FriendsList.styled';

export const FriendList = ({ friends }) => {
    return (
        <List>{friends.map(({ id, name, avatar, isOnline }) => {
            return (
            <Item key={id}>
                <Status is_online={isOnline}>AA</Status>
                <Avatar src={avatar} alt={name} width="48" />
                <Name>{name}</Name>
            </Item>            
            )
        })}
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.string,
            isOnline: PropTypes.bool,
        })
    )
}