let textareas = document.querySelectorAll('textarea');
let cards = document.querySelectorAll(".card");
let posts = document.querySelectorAll(".post")



textareas.forEach((textarea) => {
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
        let postButton = this.closest('.add_comment').querySelector('.post_button')
        if (postButton) {
            postButton.style.display = this.value.trim() ? "block" : "none";
        }
    });
});

let postButtons = document.querySelectorAll('.post_button')
postButtons.forEach((postButton) => {
    postButton.addEventListener("click", () => {
        let elem = document.createElement("div")
        elem.classList.add("comment")
        let textarea = postButton.closest(".add_comment").querySelector("textarea")
        let postContainer = postButton.closest(".post");
        let main_comments = postContainer.querySelector(".comment_page .main_comments")
        if (textarea.value.trim() != "") 
        {
            elem.innerHTML = `<div class="img"><img src="levi.jpg" alt="" style="height: 30px; width: 30px; border-radius: 50%;"></div>
                        <div class="name"><b>Levi</b></div>
                        <div class="content">${textarea.value.trim()}</div>`
            main_comments.appendChild(elem)

        }
        textarea.value = '' 
        postButton.style.display = "none"
        let comments = main_comments.children.length
        let view_comments = postContainer.querySelector(".view_comments")
        view_comments.innerHTML = `View ${comments} comment(s)`
        return;
    })
})


cards.forEach((card) => {
    let card_emptyLike = card.querySelector(".emptyLike");
    let card_fullLike = card.querySelector(".fullLike");
    let card_likes = card.querySelector(".likes");

    let post = card.closest(".post")

    let post_emptyLike = post.querySelectorAll(".emptyLike")[0];
    let post_fullLike = post.querySelectorAll(".fullLike")[0];
    let post_likes = post.querySelectorAll(".likes")[0];

    
    card_emptyLike.addEventListener("click", () => {
        let card_currentLikes = parseInt(card_likes.innerText.split(' ')[0]);
        let post_currentLikes = parseInt(post_likes.innerText.split(' ')[0]);

        card_emptyLike.classList.add("hide");
        card_fullLike.classList.remove("hide");
        post_emptyLike.classList.add("hide");
        post_fullLike.classList.remove("hide");
        
        card_likes.innerText = `${card_currentLikes + 1} likes`;
        post_likes.innerText = `${post_currentLikes + 1} likes`;
    });
    post_emptyLike.addEventListener("click", () => {
        let card_currentLikes = parseInt(card_likes.innerText.split(' ')[0]);
        let post_currentLikes = parseInt(post_likes.innerText.split(' ')[0]);

        card_emptyLike.classList.add("hide");
        card_fullLike.classList.remove("hide");
        post_emptyLike.classList.add("hide");
        post_fullLike.classList.remove("hide");
        
        card_likes.innerText = `${card_currentLikes + 1} likes`;
        post_likes.innerText = `${post_currentLikes + 1} likes`;
    });


    card_fullLike.addEventListener("click", () => {
        let card_currentLikes = parseInt(card_likes.innerText.split(' ')[0]);
        let post_currentLikes = parseInt(post_likes.innerText.split(' ')[0]);

        card_emptyLike.classList.remove("hide");
        card_fullLike.classList.add("hide");
        post_emptyLike.classList.remove("hide");
        post_fullLike.classList.add("hide");
        
        card_likes.innerText = `${card_currentLikes - 1} likes`;
        post_likes.innerText = `${post_currentLikes - 1} likes`;
    });
    post_fullLike.addEventListener("click", () => {
        let card_currentLikes = parseInt(card_likes.innerText.split(' ')[0]);
        let post_currentLikes = parseInt(post_likes.innerText.split(' ')[0]);

        card_emptyLike.classList.remove("hide");
        card_fullLike.classList.add("hide");
        post_emptyLike.classList.remove("hide");
        post_fullLike.classList.add("hide");
        
        card_likes.innerText = `${card_currentLikes - 1} likes`;
        post_likes.innerText = `${post_currentLikes - 1} likes`;
    });
});




// Cross Functionality
let crosses = document.querySelectorAll(".cross");
crosses.forEach((cross) => {
    cross.addEventListener("click", () => {
        let postContainer = cross.closest(".post");
        let comment_page = postContainer.querySelector('.comment_page')
        comment_page.style.display = "none";
    });
})

// View comment page
let viewComments = document.querySelectorAll(".view_comments");
viewComments.forEach((viewComment) => {
    viewComment.addEventListener("click", () => {
        let postContainer = viewComment.closest(".post");
        let comment_page = postContainer.querySelector('.comment_page')
        comment_page.style.display = "block";
    });
})
