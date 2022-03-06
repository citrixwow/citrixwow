var map4 = L.map('map4').setView([61.248970, 46.645845], 14);
	
		var tiles4 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
			maxZoom: 24,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(map4);

		var marker4 = L.marker([61.246310, 46.641074]).addTo(map4)
		.bindPopup("<b style='color:red'>Мой город</b><br/> <span style='color:blue;'>Котлас.</span>").openPopup();

		function onMapClick4(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("<div style='color:red;'>Ты нажал на координаты </div>" + e.latlng.toString())
			.openOn(map4);
			console.log('Ты нажал на координаты' + e.latlng.toString());
	}

	map4.on('click', onMapClick4);


var map = L.map('map').setView([61.240138, 46.646512], 14);
	
		var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
			maxZoom: 24,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(map);

	    var popup = L.popup()
		.setLatLng([61.240138, 46.646512])
		.setContent("<div style='color:red'>Мой дом.</div>")
		.openOn(map);

		function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("<div style='color:red;'>Ты нажал на координаты </div>" + e.latlng.toString())
			.openOn(map);
	}

	map.on('click', onMapClick);



var map1 = L.map('map1').setView([61.240138, 46.646512], 14);
	
		var tiles1 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
			maxZoom: 24,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(map1);
	
		var circle = L.circle([61.239264, 46.64782], {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: 100
		}).addTo(map1).bindPopup("<div style='color:red;'>Моя школа.</div>");

		function onMapClick1(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("<div style='color:red;'>Ты нажал на координаты </div>" + e.latlng.toString())
			.openOn(map1);
	}

	map1.on('click', onMapClick1);


var map2 = L.map('map2').setView([61.263194, 46.629453], 14);
	
		var tiles2 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
			maxZoom: 24,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(map2);

		var polygon = L.polygon([
		[61.260270, 46.627212],
		[61.262262, 46.625622],
		[61.263194, 46.629453]
	]).addTo(map2).bindPopup("<div style='color:red;'>Мое любимое место.</div>");

	function onMapClick2(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("<div style='color:red;'>Ты нажал на координаты </div>" + e.latlng.toString())
			.openOn(map2);
	}

	map2.on('click', onMapClick2);


var map3 = L.map('map3').setView([61.248970, 46.645845], 14);
	
		var tiles3 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
			maxZoom: 13,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(map3);

		var marker = L.marker([61.246310, 46.641074]).addTo(map3)
		.bindPopup("<b style='color:red'>Мой город</b><br/> <span style='color:blue;'>Котлас.</span>").openPopup();

	var circle = L.circle([61.239264, 46.64782], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 100
	}).addTo(map3).bindPopup("<div style='color:red;'>Моя школа.</div>");

	var polygon = L.polygon([
		[61.260270, 46.627212],
		[61.262262, 46.625622],
		[61.263194, 46.629453]
	]).addTo(map3).bindPopup("<div style='color:red;'>Мое любимое место.</div>");


	var popup = L.popup()
		.setLatLng([61.240138, 46.646512])
		.setContent("<div style='color:red'>Мой дом.</div>")
		.openOn(map3);

	function onMapClick3(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("<div style='color:red;'>Ты нажал на координаты </div>" + e.latlng.toString())
			.openOn(map3);
	}

	map3.on('click', onMapClick3);

function testButtonClick(e)
{
	console.log('Нажали Test button');
	
	var num1 = 15;
	var num2 = 3;
	var num3 = 0;
	
	var r12 = num1 / num2;
	var r13 = num1 / num3;
}