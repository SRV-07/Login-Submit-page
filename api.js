document.addEventListener("DOMContentLoaded", function() {
    const contentElement = document.getElementById("content");
    const pageTitle = document.getElementById("page-title");
    const moviesLink = document.getElementById("movies-link");
    const companyLink = document.getElementById("company-link");

    function fetchMovies() {
        console.log("Fetching movies...");

        // Fetch data from API
        fetch("https://hoblist.com/api/movieList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                category: "Movies",
                language: "Kannada",
                genre: "all",
                sort: ""
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data fetched successfully:", data);
            // Clear content
            contentElement.innerHTML = "";

            // Process the data and display
            if (data && data.result && data.result.length > 0) {
                data.result.forEach(movie => {
                    const movieDiv = document.createElement("div");
                    movieDiv.classList.add("movie");

                    // Create and add movie details to the movie div
                    const image = document.createElement("img");
                    image.src = movie.poster;
                    image.alt = movie.title;

                    const movieDetails = document.createElement("div");
                    movieDetails.classList.add("movie-details");

                    const title = document.createElement("h2");
                    title.textContent = movie.title;

                    const genres = document.createElement("p");
                    genres.textContent = "Genres: " + movie.genre;

                    const rating = document.createElement("p");
                    rating.textContent = "Rating: " + movie.rating;

                    const summary = document.createElement("p");
                    summary.textContent = movie.story;

                    movieDetails.appendChild(title);
                    movieDetails.appendChild(genres);
                    movieDetails.appendChild(rating);
                    movieDetails.appendChild(summary);

                    movieDiv.appendChild(image);
                    movieDiv.appendChild(movieDetails);

                    contentElement.appendChild(movieDiv);
                });
            } else {
                contentElement.textContent = "No movies found.";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            contentElement.textContent = "Error fetching data.";
        });
    }

    function showCompanyInfo() {
        console.log("Showing company info...");
        // Clear content
        contentElement.innerHTML = "";

        // Create and add company info
        const companyInfo = `
            <div id="company-info">
                <p><strong>Company:</strong> Geeksynergy Technology pvt Ltd</p>
                <p><strong>Address:</strong> Sanjayanagar, Bengaluru-56</p>
                <p><strong>Contact:</strong> xxxxxxxxxx09</p>
                <p><strong>Email:</strong> xxxxxxx@Gmail.com</p>
            </div>
        `;

        contentElement.innerHTML = companyInfo;
    }

    moviesLink.addEventListener("click", function(event) {
        event.preventDefault();
        pageTitle.textContent = "Kannada Movies List";
        fetchMovies();
    });

    companyLink.addEventListener("click", function(event) {
        event.preventDefault();
        pageTitle.textContent = "Company Info";
        showCompanyInfo();
    });

    // Fetch movies on initial load
    fetchMovies();
});
