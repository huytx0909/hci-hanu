function folderClicked(folderName) {
    alert("folder clicked" + folderName);
}

function folderDelete() {
    homeClick();
    var myClass = document.getElementsByClassName("alert");
    for (var i = 0; i < myClass.length; i++) {
        myClass[i].style.visibility = 'visible';
      }
}

function updateFolder(folderName) {
    alert("update folder: " + folderName + "?");
}

function createFolder(folderName) {
    alert("created folder: " + folderName);
}

function search(name) {
    alert(name);
}

function confirmAction() {
    var myClass = document.getElementsByClassName("alert");
    for (var i = 0; i < myClass.length; i++) {
        myClass[i].style.visibility = 'hidden';;
      }
    alert("Action performed successfully");
}

function cancelAction() {
    var myClass = document.getElementsByClassName("alert");
    for (var i = 0; i < myClass.length; i++) {
        myClass[i].style.visibility = 'hidden';
      }
}

function homeClick() {
	var elmnt = document.getElementById("alert-confirm");
	elmnt.scrollIntoView({
	 behavior: 'smooth', block: "start"}
	);
}