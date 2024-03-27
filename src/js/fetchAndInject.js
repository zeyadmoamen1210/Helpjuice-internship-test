
export default function fetchAndInject(selector, path, onSuccess) {
    fetch(path)
        .then(response => response.text())
        .then(html => document.querySelector(selector).innerHTML = html)
        .then(() => {
            if(onSuccess) {
                onSuccess();
            }
        })
}