
const sermonsContainer = document.getElementById("sermonsContainer");

// FETCHES JSON FROM DATABASE 

$.getJSON('https://api.npoint.io/0f9d878c6c868eda25da', function(sermon_posts) {
    for (let i = 0; i < sermon_posts.length; i++) {
        // creates new sermon post
        let newSermonContainer = document.createElement("div");;
        let newSermonInfoContainer = document.createElement("div");;
        let newSermonTitle = document.createElement("h2");
        let newSermonDate = document.createElement("h3");

        newSermonContainer.classList.add("sermon-container");
        newSermonContainer.setAttribute("id", i);
        newSermonContainer.innerHTML = sermon_posts[i].sermon_src;

        newSermonTitle.setAttribute("id", i);
        newSermonTitle.innerText = sermon_posts[i].sermon_title;

        newSermonDate.setAttribute("id", i);
        newSermonDate.innerText = sermon_posts[i].sermon_date;
    
        // adds post elements to sermons container
        sermonsContainer.appendChild(newSermonContainer);
        newSermonContainer.appendChild(newSermonInfoContainer);
        newSermonInfoContainer.appendChild(newSermonTitle);
        newSermonInfoContainer.appendChild(newSermonDate);
    }
});