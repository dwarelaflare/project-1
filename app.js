// NEED TO DRAW UP HTML
//NEED TO FIGURE OUT IF THE WIREFRAMES ARE REFLECTIVE OF THE ENTIRE USER JOURNEY
//DEEP DIVE NEEDED INTO THE API USE, CAN IT DO WHAT I NEED IT TO DO?
//WHAT DO I WANT THIS TO LOOK LIKE IN CSS
//WHAT IS A GOOD LOGIN / SIGN UP API I CAN USE, DO YOU EVEN NEED THAT AT THIS STAGE?
//WHAT IS THE BEST TYPEFORM API 

// variable for api key
const apiKey = "1efba983fdc68bd9a381566971642982"

// variable for base url
const baseURL = "https://api.crunchbase.com/api/v4/searches/organizations"

// function that does movie search
function companySearch(identifier){
    const url = `${baseURL}?t=${identifier}&apikey=${apiKey}`
    console.log(url)
}

companySearch("breakr")