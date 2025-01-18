const toggle = document.getElementById('toggle');
const body = document.body;

const toggleTheme = () => {
  const newTheme = body.classList.contains('light') ? 'dark' : 'light';
  body.className = newTheme;  
  toggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.className = savedTheme;  
  toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
};

const readLocalStorage = () => {
  const data = localStorage.getItem('blogPosts');
  return data ? JSON.parse(data) : [];
};

const storeLocalStorage = (newPost) => {
  const existingPosts = readLocalStorage();
  existingPosts.push(newPost);
  localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
};

let redirectURL = '';
const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

document.addEventListener('DOMContentLoaded', loadTheme);
toggle.addEventListener('click', toggleTheme);

//cite: https://claude.ai/



// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page