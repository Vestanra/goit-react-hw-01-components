import PropTypes from 'prop-types';
import { Avatar, Description, Name, ProfileWrap, Tag, Location, List, ListItem, Label, Quantity } from './Profile.styled';

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
    return (
        <ProfileWrap>
        <Description>
            <Avatar
            src={avatar}
            alt={username}
            />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Description>
        
        <List>
            <ListItem>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
            </ListItem>
            <ListItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
            </ListItem>
            <ListItem>
            <Label>Likes</Label>
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