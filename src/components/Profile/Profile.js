import PropTypes from 'prop-types';
import { Avatar, Description, Name, ProfileWrap, Location, List, ListItem, Quantity } from './Profile.styled';

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
    return (
        <ProfileWrap>
        <Description>
            <Avatar
            src={avatar}
            alt={username}
            />
            <Name>{username}</Name>
            <p>@{tag}</p>
            <Location>{location}</Location>
        </Description>
        
        <List>
            <ListItem>
            <span>Followers</span>
            <Quantity>{stats.followers}</Quantity>
            </ListItem>
            <ListItem>
            <span>Views</span>
            <Quantity>{stats.views}</Quantity>
            </ListItem>
            <ListItem>
            <span>Likes</span>
            <Quantity>{stats.likes}</Quantity>
            </ListItem>
        </List>
    </ProfileWrap>
    )
};

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }),
    })
}