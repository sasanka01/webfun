function random(quarters){
		while(quarters > 0){
			var win = Math.floor(Math.random()*100);
			if(win == 1){
				var amountWon = Math.random()*50 + 50
				return amountWon + quarters
			}
		}
		return 0
	}
