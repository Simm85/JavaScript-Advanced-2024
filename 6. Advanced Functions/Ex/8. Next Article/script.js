function getArticleGenerator(articles) {
    const article = document.createElement('article');
    const content = document.getElementById('content');

    return () => {
        if (articles.length == 0) {
            return;
        }
        
        const currentArticle = article.cloneNode();
        currentArticle.textContent = articles.shift();
        content.appendChild(currentArticle);
    }
}
