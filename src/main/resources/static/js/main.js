var vm = new Vue({
	el: '#rrapp',
	data: {
		mainInfo: {
			ysh: 0,
			wsh: 0,
			shz: 0,
			shwtg: 0
		}
	},
	methods: {
		getMainInfo: function() {
//			$.getJSON(baseURL + "hsIndex/queryHsUserStateList", function(r) {
//				if (r.code == 200) {
//					var result = r.resultList;
//					vm.mainInfo.ysh = result[0].count;
//					vm.mainInfo.wsh = result[1].count;
//					vm.mainInfo.shz = result[2].count;
//					vm.mainInfo.shwtg = result[3].count;
//				} else {
//					alert(r.msg);
//				}
//			});
		},
		setEchartsOption: function(data) {
			var xA = [];
			var yA = [];
			for (var i = 0; i < data.length; i++) {
				if(data[i].productName){
					xA.push(data[i].productName);
					yA.push(data[i].count);
				}
			}

			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('main'));

			// 指定图表的配置项和数据
			var option = {
				title: {
					text: '产品背调记录'
				},
				tooltip: {},
				legend: {
					data: ['记录']
				},
				xAxis: {
					data: xA,
					axisLabel: {
						interval: 0,
						rotate: 30,
						margin: 10
					}
				},
				yAxis: {
					splitNumber: 10
				},
				series: [{
					name: '记录',
					type: 'bar',
					data: yA
				}]
			};

			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		},
		getEchartsData: function() {
//			$.ajax({
//				type: "POST",
//				url: baseURL + "hsIndex/queryHsProductRecordList",
//				contentType: "application/json",
//				success: function(r) {
//					if (r.code == 200) {
//						var result = r.resultList;
//						vm.setEchartsOption(result);
//					} else {
//						alert(r.msg);
//					}
//				}
//			});
		}
	},
	created: function() {
		var flag = hasPermission('hsIndex:queryHsUserStateList,hsIndex:queryHsProductRecordList')
		if (flag) {
			document.getElementById('hxbd-box').style.display = 'block';
			this.getMainInfo();
			this.getEchartsData();
		} else {
			document.getElementById('ms-box').style.display = 'block';
		}
	}
});
