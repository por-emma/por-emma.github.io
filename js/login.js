document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    usernameError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (username.trim() === "") {
        usernameError.textContent = "Vui lòng nhập tên đăng nhập";
        isValid = false;
    }

    if (password.trim() === "") {
        passwordError.textContent = "Vui lòng nhập mật khẩu";
        isValid = false;
    }

    const storedSignupData = localStorage.getItem("signupData");
    if (!storedSignupData) {
        usernameError.textContent = "Tài khoản không tồn tại";
        isValid = false;
    } else {
        const signupData = JSON.parse(storedSignupData);
        if (username !== signupData.username || password !== signupData.password) {
            usernameError.textContent = "Tên đăng nhập hoặc mật khẩu không đúng";
            isValid = false;
        }
    }

    if (isValid) {
        alert("Đăng nhập thành công!");
        window.location.href = "index.html";
    }
});