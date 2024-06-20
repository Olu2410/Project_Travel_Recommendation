const userInput = document.getElementById('userInput')
const searchBtn = document.getElementById('search')
const searchResults = document.getElementById('searchResults')

searchBtn.addEventListener('click', function(){
   query = userInput.value.trim().toLowerCase();

   fetch('./travel_recommendation_api.json')
   .then(res => res.json())
   .then(data => {
       if(query == 'beach'){
        console.log(data.beaches[0])
        searchResults.innerHTML = data.beaches[0].imageUrl
       }
    })

})
