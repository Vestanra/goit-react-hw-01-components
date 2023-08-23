import PropTypes from 'prop-types';
import { List } from './FriendsList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(el => {
                return <FriendListItem key={el.id} friend={el} />
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