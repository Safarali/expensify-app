import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';


describe('<ExpensesSummary/>', () => {
    test('should correctly render ExpensesSummary with 1 expense ', () => {
        const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={400}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should correctly render ExpensesSummary with multiple expenses ', () => {
        const wrapper = shallow(<ExpensesSummary expensesCount={5} expensesTotal={4230}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
