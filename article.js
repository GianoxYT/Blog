// article.js

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            const article = data.articles.find(article => article.id == articleId);
            const articleContent = document.getElementById('article-content');
            articleContent.innerHTML = `
                <h1>${article.title}</h1>
                <p>${article.content}</p>
            `;
        });

    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentText = document.getElementById('comment-text').value;

        if (commentText) {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.textContent = commentText;
            commentsList.appendChild(commentElement);

            // Réinitialiser le formulaire
            commentForm.reset();
        }
    });
});
