import PropTypes from 'prop-types';
import { Avatar, Item, Name, Status} from './FriendListItem.styled';

export const FriendListItem = ({ friend: {isOnline, avatar, name} }) => {
    return (
         <Item>
                <Status is_online={isOnline}></Status>
                <Avatar src={avatar} alt={name} width="48" />
                <Name>{name}</Name>
            </Item>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            avatar: PropTypes.string,
            isOnline: PropTypes.bool,
        })
    )
}