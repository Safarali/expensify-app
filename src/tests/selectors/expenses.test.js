import moment from 'moment';
import { getVisibleExpenses as selectExpenses} from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
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
