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
            daysInMonth: daysInMonth(props.year, props.month)
        };
    }

    handleClick(evt) {
        const { id } = evt.target;

        const day = parseInt(id, 10);

        this.setState({ selected: day });

        if (this.props.onChange) this.props.onChange(this.props.id, day);
    }

    _renderDay(day) {
        return (
            <>
                <div
                    className={`calendarDay${day === this.state.selected ? ' calendarDaySelected':''}`}
                    id={day}
                    onClick={this.handleClick.bind(this)}
                >
                {day}
                </div>
                {day % 7 === 0 ? <div className='break'></div> : null}
            </>
        );
    }

    render() {
        const days = [...(new Array(this.state.daysInMonth)).keys()];

        return (
            <div className='calendar'>
                {days.map( day => this._renderDay(day + 1))}
            </div>
        );
    }
}

export { Calendar };
