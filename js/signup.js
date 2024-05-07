document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value;

    // Reset error messages
    document.querySelectorAll(".error-message").forEach(function (element) {
        element.textContent = "";
    });

    // Validation
    let isValid = true;

    if (username.trim().length < 8) {
        document.getElementById("usernameError").textContent = "Tên đăng nhập phải ít nhất 8 ký tự";
        isValid = false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        document.getElementById("usernameError").textContent = "Tên đăng nhập không được có ký tự đặc biệt";
        isValid = false;
    }

    if (password.trim().length < 8) {
        document.getElementById("passwordError").textContent = "Mật khẩu phải ít nhất 8 ký tự";
        isValid = false;
    }

    if (!/(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
        document.getElementById("passwordError").textContent = "Mật khẩu phải chứa một chữ cái viết hoa và một chữ số";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Mật khẩu không khớp";
        isValid = false;
    }

    if (!email.trim()) {
        document.getElementById("emailError").textContent = "Email là bắt buộc";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("emailError").textContent = "Email không hợp lệ";
        isValid = false;
    }

    if (isValid) {
        const signupData = {
            username: username,
            password: password,
            email: email
        };
        localStorage.setItem("signupData", JSON.stringify(signupData));
        alert("Đăng ký tài khoản thành công!");
        window.location.href = "login.html";
    }
});