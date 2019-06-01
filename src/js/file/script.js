const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

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
    var input = document.getElementById("search-btn");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            var dialog = bootbox.dialog({
                title: 'Searching',
                message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>'
            });

            dialog.init(function () {
                setTimeout(function () {
                    dialog.find('.bootbox-body').html('Here are the results');
                }, 3000);
            });
            sleep(1000).then(() => {
                location.reload();
            })
        }
    });
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