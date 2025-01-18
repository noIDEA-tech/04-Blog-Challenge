const form = document.querySelector('form');
const errorElement = document.getElementById('error');

const handleFormSubmit = (event) => {
    event.preventDefault();

    const usernameInput = form.querySelector('#username');
    const titleInput = form.querySelector('#title');
    const contentInput = form.querySelector('#content');

    const formData = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
        timestamp: new Date().toLocaleString()
    };

 if(!formData.username || !formData.title || !formData.content) {
    errorElement.textContent = 'Please fill in all fields';
    return;
 }

errorElement.textContent = '';

storeLocalStorage(formData);
redirectPage('index.html');

};

form.addEventListener('submit', handleFormSubmit);

//cite: https://claude.ai/

// TODO: Create a variable that selects the form element

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
