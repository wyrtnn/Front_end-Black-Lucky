const handleRegister = async (email, password) => {
    const response = await fetch("https://backend-black-luck-2.onrender.com/auth/register", {
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
  
  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    handleRegister(email, password);
  });