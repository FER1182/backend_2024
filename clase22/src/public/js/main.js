const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", () => {
  let usuario = document.getElementById("usuario").value;
  let pass = document.getElementById("pass").value;
  console.log(usuario);
  let obj = { usuario, pass };

  fetch("/login", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  })
    .then((result) => result.json())
    .then((json) => {
      localStorage.setItem("authToken", json.token);
    });
});
