import React from 'react';
import './app.css';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

class App extends React.Component {
    public render() {
        return <ScheduleComponent>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
    }
}

export default App