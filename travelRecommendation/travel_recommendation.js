
    const userInput = document.getElementById('userInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.querySelector('#searchResults');
    // let results = {};

    function handleFetch(){
        fetch('./travel_recommendation_api.json')
        .then((Response) => { 
            Response.json()
        .then((data) => {
            // results = data;
            let query = userInput.value.trim().toLowerCase();
        
            if(query == 'beach' || query == 'beaches'){
                searchResults.innerHTML = `<h1>${data.beaches[1].name}</h1>
                <img src="${data.beaches[1].imageUrl}" alt="${data.beaches[1].name}" style="width: 500px; height: auto;">
                <p>${data.beaches[1].description}</p>`
                // console.log(searchResults);

            }
            else if(query == 'country' || query == 'countries'){
                searchResults.innerHTML = `                                
                <h1>${data.countries[0].name}</h1>
                <h2>${data.countries[0].cities[1].name}</h2>
                <img src="${data.countries[0].cities[1].imageUrl}" alt="${data.countries[0].name}" style="width: 500px; height: auto;">
                <p>${data.countries[0].cities[1].description}</p>`
                console.log(searchResults);

            }
            else if(query == 'temple' || query == 'temples'){
                searchResults.innerHTML = `                                
                <h1>${data.temples[1].name}</h1>
                <img src="${data.temples[1].imageUrl}" alt="${data.temples[1].name}" style="width: 500px; height: auto;">
                <p>${data.temples[1].description}</p>`
            }
            else {
                alert('Search not found. Try again')
            }
        });
    });

    };
    searchBtn.addEventListener('click', handleFetch);


// document.addEventListener('DOMContentLoaded', function() {
//     const userInput = document.getElementById('userInput');
//     const searchBtn = document.getElementById('searchBtn');
//     const searchResults = document.getElementById('searchResults');

//     searchBtn.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent the form from submitting
//         const query = userInput.value.trim().toLowerCase();
//         handleSearch(query);
//     });
        
//     function handleSearch(query) {
//         fetch('./travel_recommendation_api.json')
//             .then(res => res.json())
//             .then(data => {
//                 const results = searchInData(query, data);
//                 console.log(results)
//                 displayResults(results);
//             })
//             .catch(error => {
//                 searchResults.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
//             });
//     }

//     function searchInData(query, data) {
//         const results = [];

//         for (const category in data) {
//             const items = data[category];
//             for (const item of items) {
//                 if (item.name.toLowerCase().includes(query)) {
//                     results.push({ category, item });
//                 }
//             }
//         }

//         return results;
//     }

//     function displayResults(results) {
//         searchResults.innerHTML = '';

//         if (results.length === 0) {
//             searchResults.innerHTML = '<p>No results found.</p>';
//         } else {
//             results.forEach(result => {
//                 searchResults.innerHTML += `
//                     <div>
//                         <h3>${result.category}</h3>
//                         <p><strong>${result.item.name}</strong></p>
//                         <img src="${result.item.imageUrl}" alt="${result.item.name}" style="width: 100px; height: auto;">
//                         <p>${result.item.description}</p>
//                     </div>
//                 `;
//             });
//         }
//     }
// });


