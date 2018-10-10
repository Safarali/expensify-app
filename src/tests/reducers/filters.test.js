import { filtersReducer } from '../../reducers/filters';
import moment from 'moment';


describe('Filters Reducers', () => {
    describe('@@INIT', () => {
        test('should set up default filter values', () => {
            const state = filtersReducer(undefined, { type: '@@INIT'});
            expect(state).toEqual({
                text: '',
                sortBy: 'date',
                startDate: moment().startOf('month'),
                endDate: moment().endOf('month')
            });
        });
    });

    describe('SORT_BY_AMOUNT', () => {
        test('should set sortBy to amount', () => {
            const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
            expect(state.sortBy).toBe('amount');
        })
    });

    describe('SORT_BY_DATE', () => {
        test('should set sortBy to date', () => {
            const defaultState = {
                text: '',
                sortBy: 'amount',
                startDate: undefined,
                endDate: undefined
            };

            const action = { type: 'SORT_BY_DATE' }
            const state = filtersReducer(defaultState, action);
            expect(state.sortBy).toBe('date');
        });
    });

    describe('SET_TEXT_FILTER', () => {
        test('should set text filter', () => {
            const text = 'something';
            const action = {
                type: 'SET_TEXT_FILTER',
                text
            };
            const state = filtersReducer(undefined, action);

            expect(state.text).toBe(text);
        })
    });

    describe('SET_START_DATE', () => {
        test('should set start date', () => {
            const startDate = moment();
            const action = {
                type: 'SET_START_DATE',
                startDate
            };
            const state = filtersReducer(undefined, action);
            expect(state.startDate).toBe(startDate);
        });
    });

    describe('SET_END_DATE', () => {
        test('should set end date', () => {
            const endDate = moment();
            const action = {
                type: 'SET_END_DATE',
                endDate
            }
            const state = filtersReducer(undefined, action);
            expect(state.endDate).toBe(endDate);
        })
    });
});
