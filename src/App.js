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
            day: null
        };
    }

    handleCalendarChange(id, day) {
        this.setState({ day: day });
    }

    render() {
        // Note we create a new function for onChange via the bind function, the new
        // returned function is bound to 'this' so that whatever context the call back
        // is passed to and executed in, 'this' is always our App class instance.
        return (
            <div className="App">
                <div className="CalendarDisplay">
                    <Calendar year={this.state.year} month={this.state.month} onChange={this.handleCalendarChange.bind(this)}/>
                    <DayDisplay year={this.state.year} month={this.state.month} day={this.state.day} />
                </div>
            </div>
        );
    }
}

export default App;
