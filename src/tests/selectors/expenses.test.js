import { getVisibleExpenses as selectExpenses} from '../../selectors/expenses';
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

const defaultFilters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};


describe('Test getVisibleExpenses function', () => {
    test('should filter by text value', () => {
        const filters = {
            ...defaultFilters,
            text: 'rent'
        };
        const result = selectExpenses(expenses, filters);
        expect(result).toEqual([expenses[0], expenses[1]])
    });

    test('should filter by startDate', () => {
        const filters = {
            ...defaultFilters,
            startDate: moment(0)
        };

        const result = selectExpenses(expenses, filters);
        expect(result).toEqual([expenses[2], expenses[0]]);
    });

    test('should filter by endDate', () => {
        const filters = {
            ...defaultFilters,
            endDate: moment(0)
        };

        const result = selectExpenses(expenses, filters);
        expect(result).toEqual([expenses[0], expenses[1]]);
    });

    test('should sortBy date', () => {
        const filters = {
            ...defaultFilters
        };

        const result = selectExpenses(expenses, filters);
        expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
    });

    test('should sortBy amount', () => {
        const filters = {
            ...defaultFilters,
            sortBy: 'amount'
        };

        const result = selectExpenses(expenses, filters);
        expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
    });
});
