// import logo from './logo.svg';
import './App.css';
import React from 'react';


import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective, TimelineViews, TimelineMonth } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

class App extends React.Component {
  localData: EventSettingsModel = {
    dataSource: [{
      Id: 1,
      End: new Date(2019, 0, 11, 6, 30),
      Start: new Date(2019, 0, 11, 4, 0),
      Summary: 'Testing',
      IsAllDay: true,
      RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10',
      IsReadonly: true,
      IsBlock: true
    },
    {
      Id: 2,
      End: new Date(2019, 0, 21, 8, 30),
      Start: new Date(2019, 0, 21, 7, 0),
      Summary: 'Meeting',
    }
    ],
    fields: {
      subject: { name: 'Summary', default: 'No title is provided' },
      startTime: { name: 'Start' },
      endTime: { name: 'End' }
    }

  };

  remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  })

  render() {
    return <ScheduleComponent height='550px' currentView='Week' selectedDate={new Date(2019, 0, 11)}
      eventSettings={this.localData} >
      <ViewsDirective>
        <ViewDirective option='Day' interval={3} displayName='3 Days' startHour='03:00' endHour='18:00'></ViewDirective>
        <ViewDirective option='Week'></ViewDirective>
        <ViewDirective option='WorkWeek'></ViewDirective>
        <ViewDirective option='Month' isSelected={true} showWeekNumber={true}></ViewDirective>
        <ViewDirective option='Agenda'></ViewDirective>
        <ViewDirective option='TimelineDay'></ViewDirective>
        <ViewDirective option='TimelineMonth'></ViewDirective>
      </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth]} />
    </ ScheduleComponent >
  }
}


export default App;

