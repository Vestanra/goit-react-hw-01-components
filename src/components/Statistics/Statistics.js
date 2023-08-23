import PropTypes from 'prop-types';
import { ItemStat, ListStats, Section, TitleText } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
    return (
        <Section>
            {title && <TitleText>{title}</TitleText>}
            <ListStats>{stats.map(el => {
                return (
                    <ItemStat key={el.id}>
                        <span class="label">{el.label}</span>
                        <span class="percentage">{el.percentage}%</span>
                    </ItemStat>
                    )
                })}     
            </ListStats>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}