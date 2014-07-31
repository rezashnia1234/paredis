$(function(){

  // 
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


});