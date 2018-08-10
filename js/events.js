//Obtener el formulario
// (function register() {
//   const formNode = document.getElementById('register-form');
//
//   formNode.addEventListener('submit', function(e){
//     e.preventDefault();
//
//     const nameNode = document.getElementById('name');
//     const emailNode = document.getElementById('email');
//     const passwordNode = document.getElementById('password');
//
//     data = {
//       name: nameNode.value,
//       email: emailNode.value,
//       password: passwordNode.value,
//     };
//
//     console.log(data);
//   });
// })();

//Agregar a la canasta
(function addBasket() {
  let counter = 0;
  const buttons = document.getElementsByClassName('addBasket');
  const basketCounterNode = document.getElementById('basketCounter');

  for(buttonNode of buttons){
    buttonNode.addEventListener('click', function(){
      console.log('Le di ckick');
      counter += 1;
      basketCounterNode.innerText = counter;
    });
  }
})();
