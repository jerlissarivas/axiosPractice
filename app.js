const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    // *form* is the name of the variable assigned to document.querySelector('#searchForm')
    // *query* is the name you gave to the input

    const config = { params: {q: searchTerm}}
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = "";
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
        const img = document.createElement('IMG');
        img.src = result.show.image.medium;
        // result is res.data --> the data of the response from the axios call
        document.body.append(img);
        }
    }
}