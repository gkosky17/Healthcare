document.addEventListener("DOMContentLoaded", function () {
    // Handle login button click
    document.querySelector(".auth-buttons button:nth-child(1)").addEventListener("click", function () {
        alert("Login functionality coming soon!");
    });

    // Handle sign-up button click
    document.querySelector(".auth-buttons button:nth-child(2)").addEventListener("click", function () {
        alert("Sign-up functionality coming soon!");
    });

    // Handle search functionality
    document.querySelector(".search-bar button").addEventListener("click", function () {
        let searchQuery = document.querySelector(".search-bar input").value.trim();
        if (searchQuery === "") {
            alert("Please enter a service to search.");
        } else {
            alert("Searching for: " + searchQuery);
        }
    });

    // Newsletter subscription
    document.querySelector(".newsletter button").addEventListener("click", function () {
        let email = document.querySelector(".newsletter input").value.trim();
        if (email === "") {
            alert("Please enter a valid email.");
        } else {
            alert("Subscribed successfully!");
        }
    });
});
