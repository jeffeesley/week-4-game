$(document).ready(function(){


		

		var answer = Math.floor((Math.random() * 102) + 19);
		var green = Math.floor((Math.random() * 12) + 1);
		var blue = Math.floor((Math.random() * 12) + 1);
		var grey = Math.floor((Math.random() * 12) + 1);
		var orange = Math.floor((Math.random() * 12) + 1);
		var userTotal = 0;
		var wins = 0;
		var losses = 0;
		console.log(answer);
		$("#win").html(wins);
		$("#lose").html(losses);
		$("#target").html(answer);
		$(".green-crystal").on("click", function(){
			console.log(green);
			userTotal = userTotal + green;
			$("#total").html(userTotal);
			if(userTotal > answer){
				losses++;
				reset();
				
				alert("You lose");
				
			}if(userTotal == answer){
				wins++;
				reset();
				
				alert("You win");
				
			}
		})
		$(".blue-crystal").on("click", function(){
			console.log(blue);
			userTotal = userTotal + blue;
			$("#total").html(userTotal);
			if(userTotal > answer){
				losses++;
				reset();
				
				alert("You lose ");
				
			}if(userTotal == answer){
				wins++;
				reset();
				
				alert("You win");
				
			}
		})
		$(".grey-crystal").on("click", function(){
			console.log(grey);
			userTotal = userTotal + grey;
			$("#total").html(userTotal);
			if(userTotal > answer){
				losses++;
				reset();
				
				alert("You lose");
				
			}if(userTotal == answer){
				wins++;
				reset();
				
				alert("You win");
				
			}
		})
		$(".orange-crystal").on("click", function(){
			console.log(orange);
			userTotal = userTotal + orange;
			$("#total").html(userTotal);
			if(userTotal > answer){
				losses++;
				reset();
				
				alert("You lose");
				
			}if(userTotal == answer){
				wins++;
				reset();
				
				alert("You win");
				
			}
		})
		function reset(){
		answer = Math.floor((Math.random() * 102) + 19);
		green = Math.floor((Math.random() * 12) + 1);
		blue = Math.floor((Math.random() * 12) + 1);
		grey = Math.floor((Math.random() * 12) + 1);
		orange = Math.floor((Math.random() * 12) + 1);
		userTotal = 0;
		
		$("#target").html(answer);
		$("#total").html(userTotal);
		$("#win").html(wins);
		$("#lose").html(losses);
		}

	})