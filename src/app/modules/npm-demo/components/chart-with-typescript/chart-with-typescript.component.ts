import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-with-typescript',
  templateUrl: './chart-with-typescript.component.html',
  styleUrls: ['./chart-with-typescript.component.scss']
})
export class ChartWithTypescriptComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  canvas: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const canvas = this.canvas.nativeElement as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      },

      // Configuration options go here
      options: {}
    });
  }

}
