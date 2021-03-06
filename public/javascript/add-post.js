// // const newFormHandler = async function(event) {
// //   event.preventDefault();

// // NEWLY ADDED
// async function newFormHandler(event) {
//   event.preventDefault();
// //END OF NEWLY ADDED


//   const title = document.querySelector('input[name="post-title"]').value;
//   const body = document.querySelector('textarea[name="post-body"]').value;

//   const token = localStorage.getItem("token");
//   await fetch(`/api/post`, {
//     method: "POST",
//     body: JSON.stringify({
//       title,
//       body
//     }),
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${token}`
//     }
//   });

//   document.location.replace("/dashboard");
// };

// document
//   .querySelector("#new-post-form")
//   .addEventListener("submit", newFormHandler); 

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);