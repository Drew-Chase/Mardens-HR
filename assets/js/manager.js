const sd = new showdown.Converter();
const saveButton = $("#save");
let currentFile = "";
saveButton.on("click", () => save(currentFile, $("#md-editor").val()));

function loadMD(file) {
    currentFile = file;
    $.get(`/assets/md/${file}?v=${new Date().getTime()}`, (data) => {
        const content = $("#content");
        content.empty();
        const body = $(`<div class="markdown-body">${sd.makeHtml(data)}</div>`)
        content.append(body);
        const codeEditor = $(`<textarea id="md-editor" class="form-control">${data}</textarea>`)
        codeEditor.on("keyup", (e) => {
            body.html(sd.makeHtml(codeEditor.val()));
        });

        content.append(codeEditor);

    })
}

async function save(file, contents) {
    try {

        saveButton.text("Saving...");
        saveButton.prop("disabled", true);
        await $.post({url: `/api/manager.php?file=${file}`, data: contents, headers: {"Content-Type": "text/markdown"}});
        setTimeout(() => {
            saveButton.text("Save");
            saveButton.prop("disabled", false);
        }, 1000)
    } catch (e) {
        alert("Failed to save file");
        console.error(e)
    }
}

loadMD("welcome.md");