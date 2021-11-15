// function logout() {
//   fetch("/api/user/logout", {
//     method: "post",
//     headers: { "Content-Type": "application/json" }
//   })
//     .then(function() {
//       document.location.replace("/");
//     })
//     .catch(err => console.log(err));
// }

// document.querySelector("#logout-link").addEventListener("click", logout); 

async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout);