import PropTypes from 'prop-types';
import { Head, Table, HeadText, BodyText, Body } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Head>
                <tr>
                <HeadText>Type</HeadText>
                <HeadText>Amount</HeadText>
                <HeadText>Currency</HeadText>
                </tr>
            </Head>

            <Body>{items.map(({ id, type, amount, currency }) => {
                return (
                    <tr key={id}>
                    <BodyText>{type}</BodyText>
                    <BodyText>{amount}</BodyText>
                    <BodyText>{currency}</BodyText>
                    </tr>
                )
            })}
            </Body>
            </Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}