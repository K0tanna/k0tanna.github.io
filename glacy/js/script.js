var link = document.querySelector(".feedback-call-button");
var modal = document.querySelector(".modal-feedback");
var close = modal.querySelector(".modal-close");
var overlay = document.querySelector(".overlay");
var form = modal.querySelector(".feedback-form");

var userName = modal.querySelector("[name=name]");
var userEmail = modal.querySelector("[name=feedback-email]");
var userComment = modal.querySelector("[name=feedback-comment]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
  modal.classList.add("modal-show");
  overlay.classList.add("overlay-show");

  if (storageName) {
    userName.value = storageName;
    userEmail.value = storageEmail;
    userComment.focus();
  } else {
  userName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
  modal.classList.remove("modal-error");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
  modal.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userComment.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  }	else {
    if (isStorageSupport) {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
      modal.classList.remove("modal-error");
    }
  }
});
