/**
 *
 * @type {JSON[]} data
 * @type {string} data[].displayName
 * @type {string} data[].parentElementId
 * @type {string[]} data[].keywords
 */
let data = [];
$.get("/page-contents.json").then(response => data = response);
$("input#search").on("keyup", e => {
    search();
})
$("input#search").on("blur", e => {
    search();
})

function search() {
    const value = $("input#search").val();
    if (data === []) {
        $("input#search").hide();
        return;
    }
    if (value === "") {
        $("*").removeClass("darken");
        return;
    }
    const result = data.filter(item => {
        return item.keywords.some(keyword => keyword.includes(value))
    });
    result.forEach(item => {
        const parentElement = $(`#${item.parentElementId}`);
        $(`#content :not('#${item.parentElementId}')`).addClass("darken");
        // loop through the parent element's children and remove the darken class
        $(`#${item.parentElementId} *`).removeClass("darken");
        // remove the darken class from the parent element
        parentElement.removeClass("darken");
        // loop through the parent element's parents and remove the darken class
        parentElement.parents().removeClass("darken");
    })
}