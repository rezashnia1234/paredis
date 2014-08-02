window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);
function loadURL(url){
	console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    loadURL click : ' + url);
	window.open(url, '_system', 'location=yes');
	return false;
}

var myScroll, wrapper, $sectionTitle, $btnLocation, activeLi = 1;

body = document.getElementById("body"),
wrapper = document.getElementById("wrapper");
$sectionTitle = $('h1.sectionTitle');
$btnLocation = $('a#location');

var xhReq = new XMLHttpRequest();
var heightBody = window.innerHeight-50;

var app = {

	initialize: function() {

	//Creation of the css class
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.cssClass { position:absolute; z-index:2; left:0; top:50px; width:100%; height: '+heightBody+'px; overflow:auto;}';
	document.getElementsByTagName('head')[0].appendChild(style);

	//Add the css class
	body.className = 'page center';
	wrapper.className = 'cssClass';

	//Add default active class to the menu
	$( "ul.ulMenu li:nth-child(1)" ).addClass( "active" );

	//Load default option
	xhReq.open("GET", "options/option1.html", false);
	xhReq.send(null);
	document.getElementById("sectionContent").innerHTML=xhReq.responseText;

	$("#slides").slidesjs({
    	width: 940,
    	height: 528,
		navigation: {
			active: false
		},
		pagination: {
			active: false
		},
		play: { auto: true}
    });
	
	//Creation of the scroll using iScroll plugin
	myScroll = new iScroll('wrapper', { hideScrollbar: true });

	//Add default header title
	$sectionTitle.text('خانه');
	localStorage.setItem("code","ubuca");

	}

};

function menu(option){

	//Remove previous active class
	$( "ul.ulMenu li:nth-child("+activeLi+")" ).removeClass( "active" );

	//Add active class to the current option
	$( "ul.ulMenu li:nth-child("+option+")" ).addClass( "active" );

	//Save active option
	activeLi = option;

	//Read by ajax the page
	xhReq.open("GET", "options/option"+option+".html", false);
	xhReq.send(null);
	document.getElementById("sectionContent").innerHTML=xhReq.responseText;

	if(option == 1){
		setTitle('خانه');
		$btnLocation.hide();
		$("#slides").slidesjs({
	    	width: 940,
	    	height: 528,
			navigation: {
				active: false
			},
			pagination: {
				active: false
			},
			play: { auto: true}
    	});
		myScroll.enable();
	}
	else if(option == 2){
		$btnLocation.hide();
		setTitle('آخرین اخبار');
		myScroll.enable();
	}
	else if(option == 3){
		$btnLocation.hide();
		setTitle('قیمت سهام');
		myScroll.enable();
																											  var d1 = [
																												[0,500],[1,1000],[2,1500],[3,1350],[4,1620],[5,1750]
																											  ];
																											  var titles = [
																												[ 0, "شنبه" ], [ 1, "یکشنبه" ],[ 2, "دوشنبه" ], [ 3, "سه شنبه" ],[ 4, "چهارشنبه" ], [ 5, "پنج شنبه" ]
																											  ];

																											  
																											  $("#flot-1ine").length && $.plot($("#flot-1ine"), [{
																													  data: d1
																												  }], 
																												  {
																													series: {
																														lines: {
																															show: true,
																															lineWidth: 1,
																															fill: true,
																															fillColor: {
																																colors: [{
																																	opacity: 0.3
																																}, {
																																	opacity: 0.3
																																}]
																															}
																														},
																														points: {
																															radius: 3,
																															show: true
																														},
																														grow: {
																														  active: true,
																														  steps: 50
																														},
																														shadowSize: 2
																													},
																													grid: {
																														hoverable: true,
																														clickable: true,
																														tickColor: "#f0f0f0",
																														borderWidth: 1,
																														color: '#f0f0f0'
																													},
																													colors: ["#1bb399"],
																													xaxis:{
																															ticks: titles
																													},
																													yaxis: {
																													  ticks: 5
																													},
																													tooltip: true,
																													tooltipOpts: {
																													  //content: "chart: %x.1 is %y.4",
																													  content: "chart: %x is %y.4",
																													  defaultTheme: false,
																													  shifts: {
																														x: 0,
																														y: 20
																													  }
																													}
																												  }
																											  );
	}
	else if(option == 4){
		setTitle('گالری تصاویر');
		myScroll.disable();
		var myPhotoSwipe = Code.PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), { enableMouseWheel: false , enableKeyboard: false } );
	}
	else if(option == 5){
		setTitle('تماس با مـــــا');
		myScroll.disable();
		mapObject.init();
	}

	//Refresh of the iScroll plugin
	myScroll.refresh();
	myScroll.scrollTo(0,0);

}

function setTitle(title){
	$sectionTitle.text(title);
}

//Map
/*
var map, markers = [], openInfoWindow, bounds = new google.maps.LatLngBounds();

var mapObject = {

	init : function(){
		$('div#mapCanvas').css({'height': heightBody - (heightBody/2) + 20 + 'px'});
		var markers = [];
		var latlng = new google.maps.LatLng(43.978518, 15.383649);
		var myOptions = {
			zoom: 16,
			center: latlng,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
		this.getMarkers();
	},

	getMarkers: function(){
		mapObject.addMarker(
			'43.978518',
			'15.383649',
			'Contact',
			'<h3>Contact me</h3><br><p>I am at this heart shaped island.</p>',
			1,
			false);
		//$btnLocation.show();
	},

	addMarker: function(lat,lng,title,description,id,position){
		var myLatlng = new google.maps.LatLng(lat, lng);

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			animation: google.maps.Animation.DROP,
			title: title
		});

		marker.infowindow = new google.maps.InfoWindow({
			content: description
		});

		marker.id = id;

		google.maps.event.addListener(marker, 'click', function() {

			if(marker.title != '')
			{
				if(typeof openInfoWindow != 'undefined'){
					openInfoWindow.infowindow.close();
				}

				openInfoWindow = marker;
				marker.infowindow.open(map, marker);    	
			}		
		});

		markers.push(marker);
	}

};
*/
$( window ).resize(function() {
  $('#wrapper').css('height',window.innerHeight-50);
});
