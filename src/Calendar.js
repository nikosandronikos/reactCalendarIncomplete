import React from 'react';

/**
 * Get the number of days in a month of the year.
 *
 * @param {number}  year    The year.
 * @param {number}  month   The month. Zero based.
 *
 * @returns {number}    The number of days in the given month
 */
function daysInMonth(year, month) {
    // Selecting zero for the day in the Date constructor results in the date for
    // the prior day - this is how we select the last day of the month.
    return new Date(year, month + 1, 0).getDate();
}

class Calendar extends React.Component {
    constructor(props) {
        super(props);

        // This is a stateful component.
        // External changes to the props will not result in
        // a re-render, only changes the internal state will.

        this.state = {
            daysInMonth: daysInMonth(props.year, props.month),
        };
    }

    handleClick(evt) {
        const { id } = evt.target;

        const day = parseInt(id, 10);

        this.setState({ selected: day });

        if (this.props.onChange) this.props.onChange(this.props.id, day);
    }

    // day is an integer. An element of days array incremented by 1.
    _renderDay(day) {
        let classNameInput = null;
        const dayNumber = (new Date(this.props.year, this.props.month, day)).getDay();
        
        if (day === this.state.selected) {
            classNameInput = "calendarDay calendarDaySelected";
        } else if (dayNumber === 0 || dayNumber === 6) {
            classNameInput = "calendarDay calendarDayWeekend";
        } else {
            classNameInput = "calendarDay";
        }
        
        /*
         * null was used here in the ternary operator instead of "" as JSX expects a function, not a string.
         */
        return (
            <>
                <div
                    className={classNameInput}
                    id={day}
                    onClick={this.props.disableWeekends === true && (dayNumber === 0 || dayNumber === 6) ? null : this.handleClick.bind(this)}
                >
                {day}
                </div>
                {day % 7 === 0 ? <div className='break'></div> : null}
            </>
        );
    }

    render() {
        const days = [...(new Array(this.state.daysInMonth)).keys()];
        
        /*
         * This leads to the warning: "Warning: Each child in a list should have a unique "key" prop.".
         * However, this is fine as the days array is a static array, which will not be edited,
         * rearranged or filtered. Therefore, we don't need a unique key for each item.
         */
        return (
            <div className='calendar'>
                {days.map( day => this._renderDay(day + 1))}
            </div>
        );
    }
}

export { Calendar };
