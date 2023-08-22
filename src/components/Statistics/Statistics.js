import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
    return (
        <section class="statistics">
            <h2 class="title">{title}</h2>
            <ul class="stat-list">{stats.map(el => {
                return (
                    <li class="item" key={el.id}>
                        <span class="label">{el.label}</span>
                        <span class="percentage">{el.percentage}</span>
                    </li>
                    )
                })}     
            </ul>
        </section>
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