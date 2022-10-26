// NEED TO DRAW UP HTML
//NEED TO FIGURE OUT IF THE WIREFRAMES ARE REFLECTIVE OF THE ENTIRE USER JOURNEY
//DEEP DIVE NEEDED INTO THE API USE, CAN IT DO WHAT I NEED IT TO DO?
//WHAT DO I WANT THIS TO LOOK LIKE IN CSS
//WHAT IS A GOOD LOGIN / SIGN UP API I CAN USE, DO YOU EVEN NEED THAT AT THIS STAGE?
//WHAT IS THE BEST TYPEFORM API 

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

//const companyList = document.getElementById ('companyList');
//const searchBar = document.getElementById('searchBar');
let startUp = [];

searchBar.addEventListener('keypress', (e) => {
  if(e.key==='Enter'){
 const searchString = e.target.value.toLowerCase();
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0f424e29d9mshf95ab5dc2691c8ap1be280jsn3e0cb32ce82e',
		'X-RapidAPI-Host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
	}
};

fetch(`https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes?query=(${searchString})&limit=10`, options)
	.then(response => response.json())
  .then(response =>{
    console.log(response)
    startUp=response
  })
	.catch(err => console.error(err));
  }
});

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

  //const displayCompanies = (companies) => {
    //const htmlString = companies

    //.map((company) => {
     // return `
    //  <li class="company">
   //   <h2>${company.name}</h2>
  //    </li>
 