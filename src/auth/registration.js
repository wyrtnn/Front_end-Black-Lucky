const handleLogin = async (email, password) => {
  const response = await fetch("https://backend-black-luck-2.onrender.com/auth/register", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email, password })
  });

  const data = await response.json();
  console.log(data);
};

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  handleLogin(username, email, password);
});
