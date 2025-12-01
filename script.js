function searchArticles() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let cards = document.querySelectorAll(".article-card");
    let categoryFilter = document.getElementById('categoryFilter');

    cards.forEach(card => {
        let title = card.dataset.title.toLowerCase();
        let desc = card.dataset.desc.toLowerCase();
        let category = card.dataset.category.toLowerCase()

        if (title.includes(input) || desc.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
function resetFilters() {
      searchInput.value = '';
      categoryFilter.value = 'all';
      filterCards();
    }

    searchInput.addEventListener('input', filterCards);
    categoryFilter.addEventListener('change', filterCards);
