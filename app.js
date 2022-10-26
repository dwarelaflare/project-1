// NEED TO DRAW UP HTML
//NEED TO FIGURE OUT IF THE WIREFRAMES ARE REFLECTIVE OF THE ENTIRE USER JOURNEY
//DEEP DIVE NEEDED INTO THE API USE, CAN IT DO WHAT I NEED IT TO DO?
//WHAT DO I WANT THIS TO LOOK LIKE IN CSS
//WHAT IS A GOOD LOGIN / SIGN UP API I CAN USE, DO YOU EVEN NEED THAT AT THIS STAGE?
//WHAT IS THE BEST TYPEFORM API 

// variable for api key
//const apiKey = "1efba983fdc68bd9a381566971642982"

// variable for base url
//const baseURL = "https://api.crunchbase.com/api/v4/searches/organizations"

// function that does movie search
//function companySearch(identifier){
    //const url = `${baseURL}?t=${identifier}&apikey=${apiKey}`
    //console.log(url)
//}

//companySearch("breakr")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0f424e29d9mshf95ab5dc2691c8ap1be280jsn3e0cb32ce82e',
		'X-RapidAPI-Host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
	}
};

fetch('https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes?query=breakr', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));