const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

const buildBlogPost = (post) => {
    const article = document.createElement('article');
    
    const title = document.createElement('h2');
    title.textContent = post.name;

    const quote = document.createElement('blockquote');
    quote.textContent = post.message;

    const timestamp = document.createElement('p');
    timestamp.textContent = post.timestamp;

    article.appendChild(title);
    article.appendChild(quote);
    article.appendChild(timestamp);

    return article;
};

const handleNoPosts = () => {
    const message = document.createElement('h2');
    message.textContent = "No blog posts yet! Use the contact form to create one.";
    message.style.textAlign = 'center';
    mainElement.appendChild(message);
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

const renderBlogList = () => {
    const posts = readLocalStorage();

    if (posts.length === 0) {
        handleNoPosts();
        return;
    }

    posts.forEach(post => {
        const blogPost = buildBlogPost(post);
        mainElement.appendChild(blogPost);
    });

};

if (backButton) {
    backButton.addEventListener('click', () => redirectPage('index.html'));
}

document.addEventListener('DOMContentLoaded', renderBlogList);


//cite: https://claude.ai/

// TODO: Create a variable that selects the main element, and a variable that selects the back button element

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
