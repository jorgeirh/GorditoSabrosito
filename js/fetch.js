async function getRestaurants(){
    // Enviar la informacion al API
    const reqRestaurants = new Request(
        'http://localhost:3000/restaurants', // Cambiar por tu propia API
        {
            method: 'GET'
        }
    );

    let response = await fetch(reqRestaurants)
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Something went wrong on api server!');
        }
    })
    .then((response) => {
        return response;
    }).catch((error) => {
        console.error(error);
    });

    return response;
}

async function renderRestaurants() {
    let restaurants = await getRestaurants();

    let restaurantsNode = document.getElementById('restaurantList');
    let articleNode = document.querySelector('#restaurantList article');
    articleNode.remove();

    restaurant.forEach((product) => {
        let newArticle = articleNode.cloneNode(true);
        newArticle.children[0].src = 'img/' + .photo;
        newArticle.children[1].children[0].innerText = product.name;
        newArticle.children[1].children[1].innerText = product.tag;
        newArticle.children[1].children[2].innerText = product.hour;
        newArticle.children[1].children[4].innerText = product.shipprice;

        restaurantsNode.appendChild(newArticle);
    });
}



renderRestaurants();
