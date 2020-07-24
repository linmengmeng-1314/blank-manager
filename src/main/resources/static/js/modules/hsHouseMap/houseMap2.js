$(function() {
	showBMap(mapData)
})

//显示百度地图

//点聚合
/* function showBMap(res) {
	var map = new BMap.Map("container");
	var point = new BMap.Point(res[0]['BAIDULNG'], res[0]['BAIDULAT']); //第一个值表示经度，第二个值表示维度
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
	//绑定事件
	function addClickHandler(content, marker) {
		marker.addEventListener("click", function(e) {
			openInfo(content, e)
		});
	}
	//信息窗口
	function openInfo(content, e) {
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
		map.openInfoWindow(infoWindow, point); //开启信息窗口
	}

	//点聚合
	var markers = [];
	var pt = null;
	for (var i = 0; i < data_info.length; i++) {
		pt = new BMap.Point(data_info[i]['BAIDULNG'], data_info[i]['BAIDULAT']);
		var marker = new BMap.Marker(pt); // 创建标注
		var content = '<div style="font-size:14px;">' +
			'<p>民宿名称：' + data_info[i]['NAMECN'] + '</p>' +
			'</div>';
		addClickHandler(content, marker);
		markers.push(marker);
	}
	//最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
	var markerClusterer = new BMapLib.MarkerClusterer(map, {
		markers: markers
	});
} */

//加载海量点
function showBMap(res) {
	var map = new BMap.Map("container");
	var point = new BMap.Point(res[0]['BAIDULNG'], res[0]['BAIDULAT']); //第一个值表示经度，第二个值表示维度
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
	//绑定事件
	function addClickHandler(content, marker) {
		marker.addEventListener("click", function(e) {
			openInfo(content, e)
		});
	}
	//信息窗口
	function openInfo(content, e) {
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
		map.openInfoWindow(infoWindow, point); //开启信息窗口
	}

	//海量点
	if (document.createElement('canvas').getContext) { // 判断当前浏览器是否支持绘制海量点
		var points = []; // 添加海量点数据
		for (var i = 0; i < data_info.length; i++) {
			points.push(new BMap.Point(data_info[i]['BAIDULNG'], data_info[i]['BAIDULAT']));
		}
		var options = {
			size: BMAP_POINT_SIZE_SMALL,
			shape: BMAP_POINT_SHAPE_STAR,
			color: '#d340c3'
		}
		var pointCollection = new BMap.PointCollection(points, options); // 初始化PointCollection
		// pointCollection.addEventListener('click', function(e) {
		// 	alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat); // 监听点击事件
		// });
		map.addOverlay(pointCollection); // 添加Overlay
	} else {
		alert('请使用chrome、safari、IE8+以上浏览器！');
	}

}
