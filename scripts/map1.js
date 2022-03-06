var points = new Array(0);
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
                if(points.length==0)
                {
                 var marker = L.marker(e.latlng).addTo(map4);
                 points.push(e.latlng);
                }
                else
                {
                var marker = L.marker(e.latlng).addTo(map4);
                points.push(e.latlng);
                var totaldistance=Measure(points);
                marker.bindPopup("Расстояние " + totaldistance).openPopup();
                }
	}

	map4.on('click', onMapClick4);


function Measure(points)
{
 var result=0;
 for(var i=1;i<points.length;i++)
  {
  var p1=points[i-1];
  var p2=points[i];
  result=result+distance(p1, p2);
  }
return result;
}
function distance(p1, p2)
{
return 1;
}
