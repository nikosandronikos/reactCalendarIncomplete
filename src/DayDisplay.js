import React from 'react';

const dayStrings = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function DayDisplay(props) {
    // Use Date to figure out the day
    const dateObj = new Date(props.year, props.month, props.day);
    const dayIndex = dateObj.getDay();
    const day = dayStrings[dayIndex];

    // Display it
    return <div> {day} </div>;
}

export { DayDisplay };
