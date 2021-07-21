import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  chartsModel:any =[
    {
      title: 'First',
      type : 'PieChart',
      data: [['First', 45.0],
        ['First2', 26.8],
        ['First3', 12.8],
        ['First4', 8.5],
        ['First5', 6.2],
        ['First6', 0.7] ],
      columns: ['asd', 'asd2'],
      options: {},
      width: 0,
      height: 500,
    },
    {
      title: 'Second',
      type: 'Bar',
      data: [['Second', 45.0],
        ['Second2', 26.8],
        ['Second3', 12.8],
        ['Second4', 8.5],
        ['Second5', 6.2],
        ['Second6', 0.7] ],
      columns: ['asd', 'asd2'],
      options: {},
      width: 0,
      height: 500
    },
    {
      title: 'Third',
      type: 'ComboChart',
      data: [['third', 45.0],
        ['third2', 26.8],
        ['third3', 12.8],
        ['third4', 8.5],
        ['third5', 6.2],
        ['third6', 0.7] ],
      columns: ['asd', 'asd2'],
      options: {},
      width: 0,
      height: 500
    },
    {
      title: 'Fourth',
      type: 'Line',
      data: [['fourth', 45.0],
        ['fourth2', 26.8],
        ['fourth3', 12.8],
        ['fourth4', 8.5],
        ['fourth5', 6.2],
        ['fourth6', 0.7] ],
      columns: ['asd', 'asd2'],
      options: {},
      width: 0,
      height: 500
    }
  ]
















}
