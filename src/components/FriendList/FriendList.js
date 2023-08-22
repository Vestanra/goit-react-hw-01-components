import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">{friends.map(({ id, name, avatar, isOnline }) => {
            return (
            <li class="item" key={id }>
                <span class="status"></span>
                <img class="avatar" src={avatar} alt={name} width="48" />
                <p class="name">{name}</p>
            </li>            
            )
        })}
        </ul>
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