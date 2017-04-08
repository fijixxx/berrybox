import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-charting',
  template: `
    <div>
      <p>{{name}}</p>
      <div style="display: block">
        <canvas width="500" height="80"
                baseChart
                [datasets]="barChartData"
                [labels]="barChartLabels"
                [options]="barChartOptions"
                [legend]="barChartLegend"
                [chartType]="barChartType"
                (chartHover)="chartHovered($event)"></canvas>
      </div>
    </div>
  `
})

export class ChartingComponent implements OnInit {

  @Input()name;
  @Input()nDPS;
  @Input()gDPS;

  ngOnInit(){
    this.createChart();
  }

  public barChartData:any[];
  public barChartLabels:string[];

  public barChartOptions:any = {
    responsive: true,
    scales: {xAxes: [{ticks: {min: 0, max: 2500}}]}
  };

  public barChartType:string = 'horizontalBar';
  public barChartLegend:boolean = false;

  private createChart(){

    this.barChartLabels = [
      ""
    ];

  this.barChartData = [
      {data: [this.nDPS], label: ["netDps"]},
      {data: [this.gDPS], label: ["grossDPS"]}
    ];

  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
