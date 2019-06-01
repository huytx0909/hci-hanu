function folderClicked(folderName) {
    localStorage.setItem("folderName", folderName);
    window.location.href = "http://127.0.0.1:81/hci-hanu/src/ui/file/nested-file.html#";
}

function getFolderName() {
    document.getElementById("folder-name").innerHTML = localStorage.getItem("folderName");
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

function folderDownload() {
    alert("Your folder has been downloaded");
}