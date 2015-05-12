
function initOrbs() { 
	var orbs = [];
	var col,row;
	var test = "hello ww";

		for(row = 0; row < 5; row++){
		orbs[row] = [];
		for(col = 0; col <6; col++){
			orbs[row][col] = col;
		}	
	}

	document.getElementById("orbElement").innerHTML = orbs;
}
