// CampusFind Main JS

document.addEventListener("DOMContentLoaded", () => {

    console.log("CampusFind Loaded");

    // Search Button
    const searchBtn = document.querySelector(".search-box button");

    if (searchBtn) {
        searchBtn.addEventListener("click", () => {

            const input = document.querySelector(".search-box input");

            if (!input.value.trim()) {
                alert("Please enter a search term");
                return;
            }

            alert("Searching: " + input.value);
        });
    }

    // Forms
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            alert("Form Submitted Successfully");
        });

    });

});