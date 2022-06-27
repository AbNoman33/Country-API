function loadPosts() {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(posts => displayPost(posts))
}

loadPosts();

function displayPost (posts) {
    let postsConatainer = document.getElementById('data_1');

    for (let singlePost of posts) {
        let singleData = document.createElement('div');
        singleData.classList.add('data_2');
        singleData.innerHTML = `
        <h1 class="countryN">Country Name: ${singlePost.name.common}</h1>
        <h3>Population: ${singlePost.population}</h3>
        <p><img class="png" src="${singlePost.flags.png}"></p>
         `;
        postsConatainer.appendChild(singleData); 
    }
}