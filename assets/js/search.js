/**
 * Represents a collection of data.
 *
 * @typedef {Object} Data
 * @property {string} displayName - The display name of the data.
 * @property {string} parentElementId - The ID of the parent element.
 * @property {Array<string>} keywords - An array of keywords associated with the data.
 */
let data = [];
if (data === []) {
    $("input#search").hide();
}
search();

$.get("/page-contents.json").then(response => data = response);
$("input#search").on("keyup", e => {
    if (e.key === "Enter") {
        $("#hamburger").trigger("click");
    }
    search();
})
$("input#search").on("blur", e => {
    search();
})

function search() {
    const result = fuzzySearchData();
    const searchResults = $(".search-results");
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
            if (window.screen.width < 1150) $("#hamburger").trigger("click");
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

// function search() {
//     const value = $("input#search").val();
//     if (data === []) {
//         $("input#search").hide();
//         return;
//     }
//     if (value === "") {
//         $("*").removeClass("darken");
//         return;
//     }
//     const result = data.filter(item => {
//         return item.keywords.some(keyword => keyword.includes(value))
//     });
//     result.forEach(item => {
//         const parentElement = $(`#${item.parentElementId}`);
//         $(`#content :not("#${item.parentElementId}")`).addClass("darken");
//         // loop through the parent element's children and remove the darken class
//         $(`#${item.parentElementId} *`).removeClass("darken");
//         // remove the darken class from the parent element
//         parentElement.removeClass("darken");
//         // loop through the parent element's parents and remove the darken class
//         parentElement.parents().removeClass("darken");
//     })
// }