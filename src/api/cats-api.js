export default function getCats() {
    return fetch(
        "https://api.thecatapi.com/v1/images/search?limit=15&mime_types=jpg,png"
    )
    .then((response) => {
        
        if (response.ok) {
            return response;
        }

        throw new Error(`${response.status} — ${response.statusText}`);
     })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
