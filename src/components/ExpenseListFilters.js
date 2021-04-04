import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = ( calendarFocused ) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else {
            this.props.sortByAmount();
        }
        
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filter.text} 
                    onChange={this.onTextChange}
                />
                <select 
                    type="text"
                    value={this.props.filter.sortBy}
                    onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filter.startDate}
                    endDate={this.props.filter.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    isOutsideRange={(day) => false}
                    showClearDates={true}
                />
            </div>
        );
    }

}
// const ExpenseListFilters = (props) => (
//     <div>
//         <input 
//             type="text" 
//             value={props.filter.text} 
//             onChange={(e) => {
//                 props.dispatch(setTextFilter(e.target.value));
//             }}
//         />
//         <select 
//             type="text"
//             value={props.filter.sortBy}
//             onChange={(e) => {
//                 if (e.target.value === 'date') {
//                     props.dispatch(sortByDate());
//                 } else {
//                     props.dispatch(sortByAmount());
//                 }
                
//             }}>
//             <option value="date">Date</option>
//             <option value="amount">Amount</option>
//         </select>
//     </div>
// );

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);