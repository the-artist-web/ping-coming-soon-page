const error = document.querySelector("[data-error]"),
btn = document.querySelector("[data-btn]"),
item = document.querySelector("[data-item]");

function searchEmamil(value) {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    btn.addEventListener("click", () => {
        if (value === "") { item.classList.add("active"); } else { item.classList.remove("active"); };

        if (value !== emailRegex) {
            item.classList.add("active");
            error.classList.add("active");
        } else {
            item.classList.remove("active");
            error.classList.remove("active");
        };
    });
};