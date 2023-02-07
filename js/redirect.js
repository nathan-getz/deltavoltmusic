const urlParams = new URL(window.location.toLocaleString()).searchParams;
const id = urlParams.get("id").toString();

/**
 * @param {String} id
 */
function getUrl(id) {
    if (id == "") return "https://linktr.ee/deltavolt";

    return id;
}

/**
 * @param {String} id 
 */
function redirect(id) {
    let url = getUrl(id);
    if (url == id) return false;

    let meta = doc.createElement("meta");
    meta.httpEquiv = "Refresh";
    meta.content = "0; url=" + url;
    doc.head.appendChild(meta);

    return true;
}

redirect(id);