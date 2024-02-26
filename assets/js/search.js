/**
 * Represents a collection of data.
 *
 * @typedef {Object} Data
 * @property {string} displayName - The display name of the data.
 * @property {string} parentElementId - The ID of the parent element.
 * @property {Array<string>} keywords - An array of keywords associated with the data.
 */
let data = [];
const searchResults = $(".search-results");
searchResults.hide();
$("input#search").on("focus", e => {
    searchResults.show();
});

$("input#search").on("blur", e => {
    setTimeout(() => {
        searchResults.hide();
    }, 100)
});

$.get("/page-contents.json").then(response => data = response).then(() => {
    if (data === []) {
        $("input#search").hide();
    } else {
        search();
    }
});
$("input#search").on("keyup", e => {
    if (e.key === "Enter") {
        $("#hamburger").trigger("click");
    }
    search();
})

function search() {
    const result = fuzzySearchData();
    searchResults.empty();
    if (result.length === 0) {
        searchResults.append("<p>No results found</p>");
        return;
    }
    result.forEach(item => {
        const parentElement = $(`#${item.parentElementId}`);
        const link = $(`<a class="result" href="#${item.parentElementId}">${item.displayName}</a>`);
        searchResults.append(link);
        link.on("click", () => {
            closeSidebar();
            $("html, body").animate({
                scrollTop: parentElement.offset().top - 100
            }, 0);
        })
    });
}

function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}

function createFuzzyRegEx(str) {
    return new RegExp('.*' + str.toLowerCase().split('').map(escapeRegExp).join('.*') + '.*');
}

function fuzzySearchData() {
    let searchTerm = $("input#search").val();
    let regex = createFuzzyRegEx(searchTerm);

    return data.filter(item => {
        return item.keywords.some(keyword => regex.test(keyword.toLowerCase()));
    });
}
