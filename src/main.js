// Define the URL of your PHP backend
const backendUrl = "https://https://my-phpapp-dffreaa5gte4e2hu.southindia-01.azurewebsites.net//api"; // Replace with your actual backend URL

// Function to fetch data from the backend
function fetchData() {
  fetch(backendUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Process the data from the backend
      document.getElementById('output').textContent = JSON.stringify(data, null, 2); // Display data in an HTML element
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('output').textContent = "Error fetching data.";
    });
}

// Call fetchData when the window loads
window.onload = fetchData;
