import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Ng2Highcharts, Ng2Highmaps, Ng2Highstocks } from 'ng2-highcharts';


@Component({
	moduleId: module.id,
	selector: 'highchart-examples',
	templateUrl: 'highchart-examples.component.html'
})

export class HighchartExamplesComponent implements OnInit {

	donutChartData = {};
	columnChartData = {};

	constructor(private http: Http) { }

	ngOnInit(): any {

		var colors = Highcharts.getOptions().colors,
			data = [{
				name: 'Yes',
				y: 70,
				color: colors[0]
			}, {
				name: 'No',
				y: 30,
				color: colors[1]
			}];

		this.donutChartData = {
			chart: {
				type: 'pie',
				margin: [0, 0, 0, 0],
				spacing: [0, 0, 0, 0],
				spacingTop: 0,
				spacingBottom: 0,
				spacingLeft: 0,
				spacingRight: 0
			},
			title: {
				text: ''
			},
			plotOptions: {
				pie: {
					size: '100%',
					shadow: false,
					showInLegend: true
				}
			},
			legend: {
				enabled: true,
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				useHTML: true,
				labelFormatter: function () {
					return '<b>' + this.y + '</b> ' + this.name;
				}
			},
			series: [{
				name: 'Votes',
				data: data,
				size: '80%',
				innerSize: '70%',
				dataLabels: {
					formatter: function () {
						return this.y > 5 ? this.point.name : null;
					},
					color: '#ffffff',
					distance: 0
				}
			}]
		}

		this.columnChartData = {
			chart: {
				type: 'column'
			},
			title: {
				text: 'Bar Chart'
			},
			plotOptions: {
				column: {
					showInLegend: false
				}
			},
			xAxis: {
				type: 'datetime',
				tickInterval: 1000,
				labels: {
					rotation: -60,
					style: {
						fontSize: '13px',
						fontFamily: 'Verdana, sans-serif'
					}
				}
			},
			yAxis: {
				title: {
					text: ''
				}
			},
			series: [
				{
					name: 'NC',
					data: [27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5],
					pointStart: Date.UTC(2016, 8, 1, 1, 10, 35, 0),
            		pointInterval: 1000
				}
			]
		};
	}
}