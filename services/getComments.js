// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/comments");
let mainContent = '',
    main = document.querySelector('#comments .comments');


fetchPromise.then(response => {
    return response.json();
}).then(comments => {
    comments.some(comment => {
        mainContent+= `
     <div class="comment-text text-justify mt-2" id="comments">
 ${comment.name}
       <p class="comments">${comment.body}</p>
 

   </div>`;
        if (comments.length > 10) {
            comments.length = 10;
        }
    });
    console.log(comments);
    main.innerHTML = mainContent;
});


