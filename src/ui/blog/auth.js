
var userName = localStorage.getItem("username");
console.log(userName)
if (userName != "admin" && userName != "editor") {
  console.log("non")
  window.location.href = "https://huytx0909.github.io/hci-hanu/src/ui/editor/error.html"
} else {
  console.log("admin or editor")
}
