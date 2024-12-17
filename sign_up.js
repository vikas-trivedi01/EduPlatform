document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // get password of user whether teacher or a student
  let password = document.getElementById('floatingPassword').value.trim().toLowerCase();

  if (password === "teacher") {
    window.location.href = "upload.html"; // if a teacher navigate to upload.html
  } else if (password === "student") {
    window.location.href = "index.html";// if a student navigate to home page
  } else {
    alert("Enter valid email or password");
  }
});