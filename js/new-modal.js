document.querySelector(".data-modal-open").addEventListener("click", function () {
    document.querySelector(".data-modal").classList.remove("is-hidden");
});

document.querySelector(".data-modal-close").addEventListener("click", function () {
    document.querySelector(".data-modal").classList.add("is-hidden");
});

document.querySelector(".data-modal").addEventListener("click", function (event) {
    if (event.target !== this) return; // Проверяем, что клик произошел именно на модальном окне
    this.classList.add("is-hidden");
});
