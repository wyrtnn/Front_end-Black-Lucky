const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(registerForm);
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  try {
    const response = await fetch('https://backend-black-luck-2.onrender.com/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    });

    const result = await response.json();

    if (response.ok) {
      alert('Registration successful!');
    } else {
      alert('Error: ' + (result.detail || JSON.stringify(result)));
    }
  } catch (error) {
    alert('Fetch error: ' + error.message);
  }
});
