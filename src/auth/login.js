const handleLogin = async (email, password) => {
  const response = await fetch("https://backend-black-luck-2.onrender.com/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    console.error("Ошибка сервера при входе:", response.status);
    alert("Ошибка входа: " + response.status);
    return;
  }

  const data = await response.json();
  console.log(data);
};

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  handleLogin(email, password);
});