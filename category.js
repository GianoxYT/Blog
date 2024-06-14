// category.js

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryName = urlParams.get('name');
    const categoryTitle = document.getElementById('category-title');
    categoryTitle.textContent = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            const categoryArticles = data.articles.filter(article => article.category === categoryName);
            const categoryArticlesSection = document.getElementById('category-articles');
            categoryArticles.forEach(article => {
                const articleCard = document.createElement('div');
                articleCard.classList.add('article-card');
                articleCard.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.excerpt}</p>
                    <a href="article.html?id=${article.id}">Lire plus</a>
                `;
                categoryArticlesSection.appendChild(articleCard);
            });
        });
});
