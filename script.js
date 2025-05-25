const handleLogin = async () => {
    const response = await fetch("http://localhost:8000/login-cookie", {
      method: "POST",
      credentials: "include", 
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        username: "user",
        password: "password"
      })
    });
  
    const data = await response.json();
    console.log(data);
  };