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

function updateFolder() {
    bootbox.prompt("Rename file to: ", function (result) {
        if (result) {
            bootbox.alert({
                message: "Rename!",
                size: 'large'
            });
        } else {
            bootbox.alert({
                message: "Canceled or Invalid name!",
                size: 'large'
            })
        };
    });
}

function createFolder(folderName) {
    bootbox.prompt("Enter the new name:", function (result) {
        if (result) {
            bootbox.alert({
                message: "Created!",
                size: 'large'
            });
        } else {
            bootbox.alert({
                message: "Canceled or Invalid name!",
                size: 'large'
            })
        };
    });
}

function search(name) {
    alert(name);
}

function confirmAction() {
    var myClass = document.getElementsByClassName("alert");
    for (var i = 0; i < myClass.length; i++) {
        myClass[i].style.visibility = 'hidden';;
    }
    bootbox.alert({
        message: "Actions have been saved!",
        size: 'large'
    });
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
        behavior: 'smooth', block: "start"
    }
    );
}

function folderDownload() {
    alert("Your folder has been downloaded");
}