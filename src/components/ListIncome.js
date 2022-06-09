import IncomeItems from './IncomeItems';

let overview = [
    {
        id: 0,
        name: 'Gehalt',
        betrag: 1000,
        date: '01.06.2022',
        isIncome: true,
    },
    {
        id: 1,
        name: 'Miete',
        betrag: 300,
        date: '02.06.2022',
        isIncome: false
    },
    {
        id: 2,
        name: 'Internet',
        betrag: 50,
        date: '04.06.2022',
        isIncome: false
    }
]


const ListIncome = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Ein/Ausgabe</th>
                    <th>Betrag</th>
                    <th>Datum</th>
                </tr>
            </thead>
            <tbody>
                {overview.map((ele) =>
                    <IncomeItems
                        key={ele.id}
                        name={ele.name}
                        betrag={ele.betrag}
                        date={ele.date}
                        isIncome={ele.isIncome}
                    />
                )}
            </tbody>
        </table>
    );
}

export default ListIncome;