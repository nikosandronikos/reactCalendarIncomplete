import React from 'react';

import { DayDisplay } from './DayDisplay';
import { Calendar } from './Calendar';

class App extends React.Component {
    // This is a stateful container component.

    constructor(props) {
        super(props);

        this.state = {
            year: 2019,
            month: 1,   // zero based. 0 = January
            day: null,
            disableWeekends: false
        };
    }

    handleCalendarChange(id, day) {
        this.setState({ day: day });
    }

    handleCheckboxChange(event) {
        this.setState({ disableWeekends: event.target.checked });
    }

    render() {
        // Note we create a new function for onChange via the bind function, the new
        // returned function is bound to 'this' so that whatever context the call back
        // is passed to and executed in, 'this' is always our App class instance.
        //
        // We make the binding to "this" so that when the handle functions get called,
        // they have some "context object" to use.
        return (
            <div className="App">
                <div className="CalendarDisplay">
                    <input
                        type="checkbox"
                        name="disableWeekends" 
                        onChange={this.handleCheckboxChange.bind(this)}
                    />
                    <label> Disable weekends </label>
                    <Calendar
                        year={this.state.year}
                        month={this.state.month}
                        disableWeekends={this.state.disableWeekends}
                        onChange={this.handleCalendarChange.bind(this)}
                    />
                    <DayDisplay year={this.state.year} month={this.state.month} day={this.state.day} />
                </div>
            </div>
        );
    }
}

export default App;
