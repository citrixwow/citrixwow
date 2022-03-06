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
