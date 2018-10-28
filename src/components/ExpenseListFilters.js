import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (newFocusedInput) => {
        this.setState(() => ({
            calendarFocused: newFocusedInput
        }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        let value = e.target.value;
        value === 'date' ? this.props.sortByDate(value) : this.props.sortByAmount(value);
    };

    render() {
        return (
            <section className="section-filters">
                <div className="container">
                    <div className="section-filters__inputs">
                        <div className="section-filters__inputs__item mobile">
                            <input
                                type="text"
                                value={this.props.filters.text}
                                onChange={this.onTextChange}
                                className="text-input"
                                placeholder="Search expenses"
                            />
                        </div>
                        <div className="section-filters__inputs__item">
                            <select
                                value={this.props.filters.sortBy}
                                onChange={this.onSortChange}
                                className="text-input text-input--mobile"
                            >
                                <option value="date">Date</option>
                                <option value="amount">Amount</option>
                            </select>
                        </div>
                        <div className="section-filters__inputs__item">
                            <DateRangePicker
                                startDate={this.props.filters.startDate}
                                endDate={this.props.filters.endDate}
                                onDatesChange={this.onDatesChange}
                                focusedInput={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                                showClearDates={true}
                                startDateId="123?!"
                                endDateId="123?!"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
