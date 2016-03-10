function balloon(balloonstring){
	var balloons = balloonstring
	            .split(",")
	             .slice(1);


	            var balloon = [];
	            for(var i = 0; i< balloon.length;i++){
	            	var balloon = balloons[i];


	            	var balloonstring = balloon
	            	          .replace(",","")
	            	          .replace("of", "")
	            	          trim();
	            }



    return balloons;

};

 