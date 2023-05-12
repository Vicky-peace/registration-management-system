// Users data array
let users = [];

// The Function to add a new user
function addUser(event) {
  event.preventDefault();
  
  // Get values from form
  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;
  const country = document.getElementById('country').value;
  const languages = document.getElementById('languages').value;
  
  // Create  a new user objects
  const newUser = {
    name,
    id,
    country,
    languages
  };
  
  // Add users to the array
  users.push(newUser);
  
}