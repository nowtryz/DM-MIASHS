var data = {
	"it": {
		"name": "Italie",
		"cpc": 3,
		"dpm": 1062
	  },
	"fr": {
		"name": "France",
		"cpc": 3.5,
		"dpm": 853
	},
	"es": {
		"name": "Espagne",
		"cpc": 3.7,
		"dpm": 1012
	},
	"be": {
		"name": "Belgique",
		"cpc": 5.3,
		"dpm": 1549
	},
	"hu": {
		"name": "Hongrie",
		"cpc": 2.8,
		"dpm": 694
	},
}

function showCard(id) {
	var value = data[id];
	var div = document.createElement('div');
	div.classList.add('card');

	div.innerHTML = `
	<div class="drapeau">
		<img src="images/${id}.svg">
	</div>
	<a href="#">
		<img src="images/close.jpg" > 
	</a>
	<h1 class="pays">${value.name}</h1>
	<div class="morts" style="height: ${value.dpm / 10}px">
		<div>${value.dpm}</div>
	</div>
	<div class="cas" style="height: ${value.cpc * 10}px">
		<div>${value.cpc}%</div>
	</div>
	`;

	document.getElementById('covid-cards').appendChild(div);
	div.querySelector('a').onclick = function(e) {
		e.preventDefault();
		div.remove()
	};
}

var areas = document.querySelectorAll('#left-map map>area')

for (i = 0; i < areas.length; i++) {
	areas[i].addEventListener("click", function(e){
		e.preventDefault();
		showCard(this.id);
	});
}