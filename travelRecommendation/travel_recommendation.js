document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');

    searchBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        const query = userInput.value.trim().toLowerCase();
        handleSearch(query);
    });

    function handleSearch(query) {
        fetch('travel_recommendation_api.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const results = searchInData(query, data);
                displayResults(results);
            })
            .catch(error => {
                searchResults.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
            });
    }

    function searchInData(query, data) {
        const results = [];

        for (const category in data) {
            const items = data[category];
            for (const item of items) {
                if (item.name.toLowerCase().includes(query)) {
                    results.push({ category, item });
                }
            }
        }

        return results;
    }

    function displayResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found.</p>';
        } else {
            results.forEach(result => {
                searchResults.innerHTML += `
                    <div>
                        <h3>${result.category}</h3>
                        <p><strong>${result.item.name}</strong></p>
                        <img src="${result.item.imageUrl}" alt="${result.item.name}" style="width: 100px; height: auto;">
                        <p>${result.item.description}</p>
                    </div>
                `;
            });
        }
    }
});






// document.addEventListener('DOMContentLoaded', function() {
//     const userInput = document.getElementById('userInput');
//     const searchBtn = document.getElementById('searchBtn');
//     const searchResults = document.getElementById('searchResults');

//     searchBtn.addEventListener('click', function() {
//         const query = userInput.value;
//         handleSearch(query);
//     });

//     function handleSearch(query) {
//         fetch('travel_recommendation_api.json')
//             .then(res => res.json())
//             .then(data => {
//                 const results = searchInData(query, data);
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
//                 if (item.toLowerCase().includes(query)) {
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
//                 searchResults.innerHTML += `<p>${result.category}: ${result.item}</p>`;
//             });
//         }
//     }
// });




// document.addEventListener('DOMContentLoaded', function() {
//     const userInput = document.getElementById('userInput');
//     const searchBtn = document.getElementById('searchBtn');
//     const searchResults = document.getElementById('searchResults');

//     searchBtn.addEventListener('click', function() {
//         const query = userInput.value.trim().toLowerCase();
//         handleSearch(query);
//     });

//     function handleSearch(query) {
//         const keywords = {
//             beach: ['beach', 'beaches'],
//             temple: ['temple', 'temples'],
//             country: ['country', 'countries']
//         };

//         let found = false;
//         for (const category in keywords) {
//             if (keywords[category].includes(query)) {
//                 displayResults(category);
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             displayResults('noResults');
//         }
//     }

//     function displayResults(category) {
//         searchResults.innerHTML = '';

//         if (category === 'noResults') {
//             searchResults.innerHTML = '<p>No results found.</p>';
//         } else {
//             // Placeholder for actual results
//             fetch('./travel_recommendation_api.json')
//                 .then(res => {
//                     if (!res.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     return res.json();
//                 })
//                 .then(data => {
//                     console.log(data)
//                     if (data[category]) {
//                         // searchResults.innerHTML = `<p>Displaying results for ${category}:</p>`;
//                         // Example to show how you might display multiple results
//                         data[category].forEach(item => {
//                             searchResults.innerHTML += `<p>${item}</p>`;
//                         });
//                     } else {
//                         searchResults.innerHTML = '<p>No results found in the data.</p>';
//                     }
//                 })
//                 .catch(error => {
//                     searchResults.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
//                 });
//         }
//     }
// });
