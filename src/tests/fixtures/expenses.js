import moment from 'moment';
const expenses = [
    {
        id: '1',
        description: 'Rent',
        amount: 500,
        note: '',
        createdAt: 0
    },{
        id: '2',
        description: 'Rental Insurance',
        amount: 600,
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },{
        id: '3',
        description: 'Car payment',
        amount: 7000,
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

export default expenses;
