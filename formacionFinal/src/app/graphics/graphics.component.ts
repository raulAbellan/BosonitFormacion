import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { DataService } from './data.service';
import { DataCovid } from './data.interface';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
})
export class GraphicsComponent implements OnInit {
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public lineChartType: ChartType = 'line';

  public barChartData: ChartData<'bar'> = {
    labels: [
      '30 Days Ago',
      '2 Months Ago',
      '3 Months Ago',
      '4 Months Ago',
      '5 Months Ago',
      '6 Months Ago',
    ],
    datasets: [
      { data: [], label: 'Hospitalized' },
      { data: [], label: 'Positive' },
    ],
  };

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Hospitalized',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [],
        label: 'Death',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      // {
      //   data: [],
      //   label: 'Dead',
      //   yAxisID: 'y1',
      //   backgroundColor: 'rgba(255,0,0,0.3)',
      //   borderColor: 'red',
      //   pointBackgroundColor: 'rgba(148,159,177,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      //   fill: 'origin',
      // },
    ],
    labels: [
      '30 Days Ago',
      '2 Months Ago',
      '3 Months Ago',
      '4 Months Ago',
      '5 Months Ago',
      '6 Months Ago',
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },
  };

  constructor(private data_: DataService) {}
  ngOnInit(): void {
    //BAR CHART DATA
    this.data_.getData().subscribe((data: DataCovid) => {
      const values = Object.values(data);

      values.forEach((e: DataCovid) => {
        if (e.hospitalized % 30 === 0) {
          this.barChartData.datasets[0].data.push(e.hospitalized);
        }
      });
      values.forEach((e: DataCovid) => {
        if (e.positive % 30 === 0) {
          this.barChartData.datasets[1].data.push(e.positive);
        }
      });

      //LINECHART DATA
      this.data_.getData().subscribe((data: DataCovid) => {
        const values = Object.values(data);
        values.forEach((e: DataCovid) => {
          if (e.hospitalized % 30 === 0) {
            this.lineChartData.datasets[0].data.push(e.hospitalized);
          }
        });
        values.forEach((e: DataCovid) => {
          if (e.death % 30 === 0) {
            this.lineChartData.datasets[1].data.push(e.death);
          }
        });
        // values.forEach((e: DataCovid) => {
        //   if (e.death % 30 === 0) {
        //     this.lineChartData.datasets[2].data.push(e.death);            
        //   }
        // });

        console.log(values);
      });
    });
  }
}
