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

    restaurants.forEach((restaurant) => {
        let newArticle = articleNode.cloneNode(true);
        newArticle.children[0].src = 'img/' + restaurant.photo;
        newArticle.children[1].children[0].innerText = restaurant.name;
        newArticle.children[1].children[1].innerText = restaurant.tag;
        newArticle.children[1].children[2].innerText = restaurant.hour;
        newArticle.children[1].children[3].innerText = 'Envio $' + restaurant.ship;
        restaurantsNode.appendChild(newArticle);
    }
  );
}



renderRestaurants();
