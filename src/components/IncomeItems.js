const IncomeItems = (props) => {
    return (
        <tr style={{ color: props.isIncome ? 'green' : null }}>
            <td>{props.name}</td>
            <td>{props.betrag}</td>
            <td>{props.date}</td>

        </tr>
    );
}

export default IncomeItems;