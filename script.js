const searchBar = document.getElementById("searchBar");
const categoryFilter = document.getElementById("categoryFilter");
const cards = document.querySelectorAll(".article-card");

function filterArticles() {
    const searchText = searchBar.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    cards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch = title.includes(searchText);
        const matchesCategory = (selectedCategory === "all" || category === selectedCategory);

        card.style.display = (matchesSearch && matchesCategory) ? "block" : "none";
    });
}

searchBar.addEventListener("input", filterArticles);
categoryFilter.addEventListener("change", filterArticles);
