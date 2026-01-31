// Login page scripts with romantic pink theme
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validasi username dan password
  if (username === "wopyu" && password === "wopyu") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil! 💕",
      html: '<p style="font-size: 1.2rem; color: #666;">Selamat datang Sayang! Ada surprise untukmu... 🎉</p>',
      showConfirmButton: false,
      timer: 2000,
      background: 'linear-gradient(135deg, #ffc1e3 0%, #ffafcc 100%)',
      backdrop: `
        rgba(255, 193, 227, 0.4)
        left top
        no-repeat
      `,
      customClass: {
        popup: 'romantic-popup'
      }
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal! 😢",
      html: '<p style="font-size: 1.1rem; color: #666;">Coba cek lagi username sama passwordnya ya Sayang 💖</p>',
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff6b9d",
      background: 'linear-gradient(135deg, #ffc1e3 0%, #ffafcc 100%)',
      customClass: {
        confirmButton: 'romantic-button'
      }
    });
  }
}

// Add custom styles for SweetAlert
const style = document.createElement('style');
style.innerHTML = `
  .romantic-popup {
    border-radius: 25px !important;
    border: 3px solid rgba(255, 193, 227, 0.8) !important;
  }
  
  .romantic-button {
    border-radius: 15px !important;
    padding: 12px 30px !important;
    font-weight: 700 !important;
    font-family: 'Quicksand', sans-serif !important;
  }
`;
document.head.appendChild(style);
