const search =document.getElementById('search');
const matchList = document.getElementById('match-list');

//search state.json and filter it
const searchStates = async searchText => {
	const res = await fetch('states.json');
	const states = await res.json();
	//Get matches to current text input
	let matches = states.filter(state => {
		const regex = new RegExp(`^${searchText}`,'gi');
		return state.state.match(regex) || state.city.match(regex);
	});
	if (searchText.length === 0) {
		matches = [];
		matchList.innerHTML = 'results will display here';
	}
	outputHtml(matches);
};

//Show results in Html
const outputHtml = matches =>{

	if (matches.length > 0) {

		const html = matches.map(
			match => `<div class="result">
			<h4>${match.city} (${match.state})</h4>
			</div>
			<hr>
			`
			)
		.join('');
		matchList.innerHTML = html;
	}
};
search.addEventListener('input', () => searchStates(search.value));

// Get the modal
var modal = document.getElementById("myModal");
var result = document.getElementById("result");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
matchList.onclick = function() {
  modal.style.display = "block";
  matchList.innerHTML = html1;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
