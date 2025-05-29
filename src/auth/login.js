const handleLogin = async (email, password) => {
  const response = await fetch("https://backend-black-luck-2.onrender.com/auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      email,
      password
    })
  });

  const data = await response.json();
  console.log(data);
};

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault(); 

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  handleLogin(email, password);
});
