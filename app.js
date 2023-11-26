// Hàm đăng nhập
let users = [
  {
    name: "dangduong",
    password: "123123",
  },
  {
    name: "dangduong0127",
    password: "123123",
  },
  {
    name: "duonghp0127",
    password: "1234",
  },
  {
    name: "duonghp351",
    password: "1231234",
  },
];

localStorage.setItem("users", JSON.stringify(users));
let data = JSON.parse(localStorage.getItem("users"));
function login() {
  // Lấy thông tin người dùng từ input
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  // Kiểm tra thông tin người dùng (đơn giản, bạn cần kiểm tra từ cơ sở dữ liệu hoặc server)
  //Cach 1
  let user = null;
  for (let i = 0; i < data.length; i++) {
    const currentUser = data[i];
    if (currentUser.name === username && currentUser.password === password) {
      user = currentUser;
      break; // Nếu tìm thấy người dùng, thoát khỏi vòng lặp
    }
  }
  //Cach 2
  //   const user = data.find((u) => u.name == username && u.password == password);
  if (user) {
    localStorage.setItem("loggedInUser", username);
    showLoggedInPage(username);
  } else {
    alert(
      "Đăng nhập không thành công. Vui lòng kiểm tra tên người dùng và mật khẩu."
    );
  }
}

// Hàm hiển thị giao diện sau khi đăng nhập thành công
function showLoggedInPage(username) {
  // Ẩn trang đăng nhập
  document.getElementById("loginPage").style.display = "none";

  // Hiển thị trang đã đăng nhập
  const loggedInPage = document.getElementById("loggedInPage");
  loggedInPage.style.display = "block";

  // Hiển thị tên người dùng đã đăng nhập
  document.getElementById("loggedInUsername").textContent = username;
}

// Hàm đăng xuất
function logout() {
  // Xóa thông tin người dùng từ Local Storage
  localStorage.removeItem("loggedInUser");

  // Hiển thị lại trang đăng nhập
  document.getElementById("loginPage").style.display = "block";

  // Ẩn trang đã đăng nhập
  document.getElementById("loggedInPage").style.display = "none";
}

// Kiểm tra nếu đã đăng nhập trước đó
function checkIfLoggedIn() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    // Nếu có thông tin người dùng, hiển thị trang đã đăng nhập
    showLoggedInPage(loggedInUser);
  }
}

// Gọi hàm kiểm tra nếu đã đăng nhập trước đó
checkIfLoggedIn();
