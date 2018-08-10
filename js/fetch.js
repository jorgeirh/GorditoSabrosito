async function getRestaurants(){
  window.lat = window.lat || 20.675094;
  window.lng = window.lng || -103.392790;
  let category = window.location.hash.substring(1) || 'mexican';
    // Enviar la informacion al API
    const reqRestaurants = new Request(
        'https://whispering-island-74129.herokuapp.com/near_restaurants?lat=' + lat + '&lon=' + lng + '&category=' + category,  // Cambiar por tu propia API
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
    while (restaurantsNode.firstChild) {
      restaurantsNode.removeChild(restaurantsNode.firstChild);
    }

    restaurants.forEach((restaurant) => {
        let newArticle = articleNode.cloneNode(true);
        newArticle.children[0].src = restaurant.img_url;
        newArticle.children[1].children[0].innerText = restaurant.name;
        newArticle.children[1].children[1].innerText = restaurant.category;
        newArticle.children[1].children[2].innerText = restaurant.service_hours;
        newArticle.children[1].children[3].innerText = 'Envio $' + restaurant.delivery_cost;
        restaurantsNode.appendChild(newArticle);
    }
  );
}

renderRestaurants();

window.addEventListener("hashchange", renderRestaurants, false);
