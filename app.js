// variable for api key
//const apiKey = '0f424e29d9mshf95ab5dc2691c8ap1be280jsn3e0cb32ce82e'

// variable for base url
//const baseURL = 'https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes'

//=breakr

// function that does movie search
//function companySearch(identifier){

  //const url = `${baseURL}?query=${identifier}&apikey=${apiKey}&limit=10`
    //console.log(url)
//}

//companySearch("breakr")

// const companyList = document.getElementById ('companyList');
// const searchBar = document.getElementById('searchBar');
// let startUp = [];

//Add event listener to make functional searchbar
searchBar.addEventListener('keypress', (e) => {
  if(e.key==='Enter'){
//To get specific value from api output
 const searchString = e.target.value.toLowerCase();
 //use GET to add in API and API Key
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0f424e29d9mshf95ab5dc2691c8ap1be280jsn3e0cb32ce82e',
		'X-RapidAPI-Host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
	}
};

//Use fetch to use API to run query with the searchstring value and limit responses to top 1
fetch(`https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes?query=(${searchString})&limit=1`, options)
	.then(response => response.json())
  .then(response =>{
    console.log(response)
    startUp=response
  })
	.catch(err => console.error(err));
  }
});

// str = JSON.stringify(`${entities[0].short_description}`);
// // str = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
// console.log(str); // Logs output to dev tools console.
// alert(str); // Displays output using window.alert()

// (function() {
//   var exLog = console.log;
//   console.log = function(msg) {
//       exLog.apply(this, arguments);
//       alert(msg);
//   }
// })();

//console.log("hello")
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0f424e29d9mshf95ab5dc2691c8ap1be280jsn3e0cb32ce82e',
// 		'X-RapidAPI-Host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes?query=()&limit=10', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

  //const loadCompanies = async () => {
  //  try {
   //   const res = await fetch('https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes?query=breakr&limit=10', options);
  //    startUp = await res.json();
 //    displayCompanies(startUp);
 //   } catch (err) {
 //     console.error(err);
 //   }
// };

  // variable for api key
//const apiKey = '0f424e29d9mshf95ab5dc2691c8ap1be280jsn3e0cb32ce82e'

//variable for base url
//const baseURL = 'https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes?query='

// function that does movie search
//function companySearch(identifier){
    //const url = `${baseURL}?t=${identifier}&apikey=${apiKey}`
    //console.log(url)
//}

//const options = {
	//method: 'GET',
	//headers: {
	//	'X-RapidAPI-Key': '0f424e29d9mshf95ab5dc2691c8ap1be280jsn3e0cb32ce82e',
	//	'X-RapidAPI-Host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
//	}
//};
//console.log(options);

//   const displayCompanies = (companies) => {
//     const htmlString = companies

//     .map((company) => {
//      return `
//      <li class="company">
//      <h2>${company.name}</h2>
//      </li>
//  `;
//     })
//     .join('')
//     companyList.innerHTML = htmlString
//   };

