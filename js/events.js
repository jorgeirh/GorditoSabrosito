//Obtener el formulario
const formNode = document.getElementById('register-form')

formNode.addEventListener('submit', function(e){
  e.preventDefault();

  const nameNode = document.getElementById('name');
  const emailNode = document.getElementById('email');
  const passwordNode = document.getElementById('password');

  data = {
    name: nameNode.value,
    email: emailNode.value,
    password: passwordNode.value,
  };

  console.log(data);
});
