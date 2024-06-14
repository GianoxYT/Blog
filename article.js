// article.js

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            const article = data.articles.find(article => article.id == articleId);
            if (article) {
                document.getElementById('article-title').textContent = article.title;
                document.getElementById('article-content').textContent = article.content;
            }
        });
});
