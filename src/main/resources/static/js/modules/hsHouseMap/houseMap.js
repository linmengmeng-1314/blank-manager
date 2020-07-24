$(function() {
	getPoint()
})

//显示百度地图
function showBMap(res) {
	var map = new BMap.Map("container");

	var point = new BMap.Point(res[0]['longitude'], res[0]['latitude']); //第一个值表示经度，第二个值表示维度
	map.centerAndZoom(point, 15); //地图初始化，同时设置地图展示级别
	map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
	//添加定位控件
	var geolocationControl = new BMap.GeolocationControl({
		anchor: BMAP_ANCHOR_TOP_RIGHT
	});
	map.addControl(geolocationControl);

	//显示标注
	var data_info = res;
	var opts = {
		width: 200, // 信息窗口宽度
		height: 180, // 信息窗口高度
		//title: "民宿信息", // 信息窗口标题
		enableMessage: true //设置允许信息窗发送短息
	}

	for (var i = 0; i < data_info.length; i++) {
		var marker = new BMap.Marker(new BMap.Point(data_info[i]['longitude'], data_info[i]['latitude'])); // 创建标注
		var content = '<div style="font-size:14px;">' +
			'<p>民宿名称：' + data_info[i]['name'] + '</p>' +
			'<p>联系姓名：' + data_info[i]['userName'] + '</p>' +
			'<p>联系电话：' + data_info[i]['mobile'] + '</p>' +
			'<p style="display: table;"><span style="display: table-cell;width: 72px;">民宿地址：</span><span style="display: table-cell;">' +
			data_info[i]['detailAddress'] + '</span></p>' +
			'</div>';
		map.addOverlay(marker); // 将标注添加到地图中
		addClickHandler(content, marker);
	}

	function addClickHandler(content, marker) {
		marker.addEventListener("click", function(e) {
			openInfo(content, e)
		});
	}

	function openInfo(content, e) {
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
		map.openInfoWindow(infoWindow, point); //开启信息窗口
	}
}

//获取初始化坐标
function getPoint() {
	$.ajax({
		type: "POST",
		url: baseURL + "hsHouseMap/queryHouseMapList",
		contentType: "application/json",
		//data: JSON.stringify(data.field),
		success: function(r) {
			if (r.code == 200) {
				var res = r.resultList;
				showBMap(res);
			} else {
				alert(r.msg);
			}
		}
	});
}
