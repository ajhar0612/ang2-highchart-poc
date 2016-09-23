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
	semiDonutChartData = {};
	semiMultiDonutChartData = {};

	columnChartData = {};
	stagedColumnChartData = {};

	line1ChartData = {};
	line2ChartData = {};

	multiLineChartData = {};

	bubbleChartData = {};


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
		this.semiDonutChartData = {
			chart: {
				type: 'pie',
				plotBackgroundColor: null,
				plotBorderWidth: 0,
				plotShadow: false
			},
			title: {
				text: '<b>20%</b><br>Title',
				floating: true,
				verticalAlign: 'bottom',
				y: -20,
				useHTML: true
			},
			plotOptions: {
				pie: {
					size: '60%',
					shadow: false,
					showInLegend: true,
					startAngle: -90,
					endAngle: 90,
					center: ['50%', '100%']
				}
			},
			legend: {
				enabled: false,
			},
			series: [{
				name: 'Votes',
				data: data = [{
					name: 'Yes',
					y: 30,
					color: colors[0]
				}, {
					name: 'No',
					y: 70,
					color: colors[1]
				}],
				innerSize: '85%',
				dataLabels: {
					enabled: false
				}
			}]
		}

		this.semiMultiDonutChartData = {
			chart: {
				type: 'pie',
				plotBackgroundColor: null,
				plotBorderWidth: 0,
				plotShadow: false
			},
			title: {
				text: '<b>20%</b><br>Title',
				floating: true,
				verticalAlign: 'bottom',
				y: -20,
				useHTML: true
			},
			plotOptions: {
				pie: {
					size: '60%',
					shadow: false,
					showInLegend: true,
					startAngle: -90,
					endAngle: 90,
					center: ['50%', '100%']
				}
			},
			legend: {
				enabled: false,
			},
			series: [{
				name: 'Votes',
				data: data = [{
					name: 'Yes',
					y: 30,
					color: colors[0]
				}, {
					name: 'No',
					y: 70,
					color: colors[1]
				}],
				size: '100%',
				innerSize: '85%',
				dataLabels: {
					enabled: false
				}
			},
			{
				name: 'Votes',
				data: data = [{
					name: 'Yes',
					y: 30,
					color: colors[0]
				}, {
					name: 'No',
					y: 70,
					color: colors[1]
				}],
				size: '80%',
				innerSize: '95%',
				dataLabels: {
					enabled: false
				}
			}
			]
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
					name: 'CC',
					data: [27, 25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5],
					pointStart: Date.UTC(2016, 8, 1, 1, 10, 35, 0),
					pointInterval: 1000
				}
			]
		};

		this.stagedColumnChartData = {
			chart: {
				type: 'column'
			},
			title: {
				text: 'Bar Chart'
			},
			plotOptions: {
				column: {
					showInLegend: false,
					stacking: 'normal'
				}
			},
			xAxis: {
				categories: ['First', 'Second', 'Third', 'Forth', 'Fifth'],
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
					name: 'Series1',
					data: [27, 25, 23, 21, 19]
				},
				{
					name: 'Series2',
					data: [13, 11, 9, 7, 5]
				},
				{
					name: 'Series3',
					data: [14, 11, 9, 10, 9]
				}
			]
		};

		this.line1ChartData = {

			title: {
				text: ''
			},
			xAxis: {
				type: 'datetime',
				tickInterval: 5 * 60 * 1000,
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
					text: 'Unit'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}],
				labels: {
					formatter: function () {
						return this.value + "%";
					}
				}
			},
			tooltip: {
				valueSuffix: '%'
			},
			legend: {
				enabled: false,
			},
			series: [{
				name: 'Series 1',
				data: [5.0, 8.9, 18.5, 14.3, 19.2, 20.5, 22.2, 25.5, 24.3, 19.3, 18.9, 20.6],
				pointStart: Date.UTC(2016, 8, 1, 12, 20, 0, 0),
				pointInterval: 5 * 60 * 1000,
			}]
		}

		this.line2ChartData = {

			title: {
				text: ''
			},
			xAxis: {
				type: 'datetime',
				tickInterval: 5 * 60 * 1000,
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
					text: 'Unit'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}],
				labels: {
					formatter: function () {
						return this.value + "%";
					}
				}
			},
			tooltip: {
				valueSuffix: '%'
			},
			legend: {
				enabled: false,
			},
			series: [{
				name: 'Series 2',
				linecap: "round",
				data: [10.1, 15.1, 18.5, 20.6, 40.2, 50.7, 80.9, 60.2, 50.1, 40.9, 30.0, 10.0],
				pointStart: Date.UTC(2016, 8, 1, 12, 20, 0, 0),
				pointInterval: 5 * 60 * 1000,
				marker: {
					symbol: "circle"
				}
			}]
		}

		this.multiLineChartData = {

			title: {
				text: ''
			},
			xAxis: {
				type: 'datetime',
				tickInterval: 5 * 60 * 1000,
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
					text: 'Unit'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}],
				labels: {
					formatter: function () {
						if (this.isFirst)
							return this.value + "%";
						else
							return this.value;
					}
				}
			},
			tooltip: {
				valueSuffix: '%'
			},
			legend: {
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'top',
				symbolWidth: 8
			},
			series: [{
				name: 'Series 1',
				data: [5.0, 8.9, 18.5, 14.3, 19.2, 20.5, 22.2, 25.5, 24.3, 19.3, 18.9, 20.6],
				pointStart: Date.UTC(2016, 8, 1, 12, 20, 0, 0),
				pointInterval: 5 * 60 * 1000,
				marker: {
					symbol: "circle"
				}
			}, {
				name: 'Series 2',
				linecap: "round",
				data: [0.1, 1.1, 1.8, 2.6, 4.2, 5.7, 8.9, 10.2, 10.1, 9.9, 10.0, 10.0],
				pointStart: Date.UTC(2016, 8, 1, 12, 20, 0, 0),
				pointInterval: 5 * 60 * 1000,
				marker: {
					symbol: "circle"
				}
			}, {
				name: 'Series 3',
				data: [3.4, 5.8, 9.4, 16.5, 18.3, 17.0, 15.5, 14.9, 15.3, 15.0, 15.4, 14.9],
				pointStart: Date.UTC(2016, 8, 1, 12, 20, 0, 0),
				pointInterval: 5 * 60 * 1000,
				marker: {
					symbol: "circle"
				}
			}, {
				name: 'Series 4',
				data: [1.1, 16.3, 18.8, 14.5, 11.9, 10.2, 7.5, 6.6, 5.2, 5.3, 5.0, 4.8],
				pointStart: Date.UTC(2016, 8, 1, 12, 20, 0, 0),
				pointInterval: 5 * 60 * 1000,
				marker: {
					symbol: "circle"
				}
			}]
		}

		this.bubbleChartData = {

			chart: {
				type: 'bubble',
				zoomType: 'xy'
			},

			title: {
				text: ''
			},

			xAxis: {
				type: 'datetime',
				tickInterval: 24 * 60 * 60 * 1000,
				gridLineWidth: 1,
				gridLineDashStyle: 'ShortDot',
				labels: {
					formatter: function () {
						if (this.isLast)
							return 'Today';
						else
							return Highcharts.dateFormat('%e/%d', this.value);
					}
				}
			},

			yAxis: {
				type: 'datetime',
				tickInterval: 4 * 60 * 60 * 1000,
				maxPadding: 0.2,
				labels: {
					formatter: function () {
						return Highcharts.dateFormat('%I:%M %p', this.value);
					}
				}
			},
			plotOptions: {
				series: {
					dataLabels: {
						enabled: false,
						format: '{point.name}'
					}
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'top',
				symbolWidth: 8
			},
			series: [{
				data: [
					{ x: Date.UTC(2016, 8, 11), y: Date.UTC(2016, 8, 12, 5, 13, 0), z: 13.8 },
					{ x: Date.UTC(2016, 8, 12), y: Date.UTC(2016, 8, 12, 18, 18, 0), z: 14.7 },
					{ x: Date.UTC(2016, 8, 13), y: Date.UTC(2016, 8, 12, 3, 24, 0), z: 15.8 },
					{ x: Date.UTC(2016, 8, 14), y: Date.UTC(2016, 8, 12, 20, 0, 0), z: 12 }
				]
			},
			{
				data: [
					{ x: Date.UTC(2016, 8, 10), y: Date.UTC(2016, 8, 12, 6, 10, 0), z: 13.8 },
					{ x: Date.UTC(2016, 8, 13), y: Date.UTC(2016, 8, 12, 8, 18, 0), z: 14.7 },
					{ x: Date.UTC(2016, 8, 14), y: Date.UTC(2016, 8, 12, 13, 29, 0), z: 15.8 },
					{ x: Date.UTC(2016, 8, 16), y: Date.UTC(2016, 8, 12, 15, 40, 0), z: 12 }
				]
			},
			{
				data: [
					{ x: Date.UTC(2016, 8, 11), y: Date.UTC(2016, 8, 12, 8, 35, 0), z: 13.8 },
					{ x: Date.UTC(2016, 8, 12), y: Date.UTC(2016, 8, 12, 11, 19, 0), z: 14.7 },
					{ x: Date.UTC(2016, 8, 15), y: Date.UTC(2016, 8, 12, 13, 34, 0), z: 15.8 },
					{ x: Date.UTC(2016, 8, 16), y: Date.UTC(2016, 8, 12, 18, 38, 0), z: 12 }
				]
			},
			{
				data: [
					{ x: Date.UTC(2016, 8, 11), y: Date.UTC(2016, 8, 12, 5, 13, 0), z: 13.8 },
					{ x: Date.UTC(2016, 8, 12), y: Date.UTC(2016, 8, 12, 18, 18, 0), z: 14.7 },
					{ x: Date.UTC(2016, 8, 13), y: Date.UTC(2016, 8, 12, 22, 0, 0), z: 15.8 }
				]
			}
			]

		}
	}
}