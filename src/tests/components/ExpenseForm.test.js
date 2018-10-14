import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

describe('<ExpenseForm/>', () => {
    describe('form submission', () => {
        test('should render ExpenseForm correctly', () => {
            const wrapper = shallow(<ExpenseForm/>);
            expect(wrapper).toMatchSnapshot();
        });

        test("should render ExpenseForm with expense date", () => {
            const wrapper = shallow(<ExpenseForm expense={{...expenses[1]}}/>);
            expect(wrapper).toMatchSnapshot();
        });

        test('should render error for invalid form submission', () => {
            const wrapper = shallow(<ExpenseForm/>);
            expect(wrapper).toMatchSnapshot();
            wrapper.find('form').simulate('submit', {
                preventDefault: () => { }
            });
            expect(wrapper.state('error').length).toBeGreaterThan(0);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('input changes', () => {
        test('should set description on input change', () => {
            const value = 'New description';
            const name = 'description';
            const wrapper = shallow(<ExpenseForm/>);
            wrapper.find('input').at(0).simulate('change', {
                target: { name, value }
            });
            expect(wrapper.state(name)).toBe(value);
        });

        test('should set note on input change', () => {
            const value = 'New note';
            const name = 'note';
            const wrapper = shallow(<ExpenseForm/>);
            wrapper.find('textarea').at(0).simulate('change', {
                target: { name, value }
            });
            expect(wrapper.state(name)).toBe(value);
        });

        test('should set amount on valid input', () => {
            const value = '100.05';
            const wrapper = shallow(<ExpenseForm/>);
            wrapper.find('input').at(1).simulate('change', {
                target: { value }
            });
            expect(wrapper.state('amount')).toBe(value);
        });

        test('should not set amount on not valid input', () => {
            const value = '100.105';
            const wrapper = shallow(<ExpenseForm/>);
            wrapper.find('input').at(1).simulate('change', {
                target: { value }
            });
            expect(wrapper.state('amount')).not.toBe(value);
        });
    });
});
