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
    for (let i = 0; i < 10; i++) {
        mainContent+= `
     <div class="comment-text text-justify mt-2" id="comments">
 ${comment.name}
       <p class="comments">${comment.body}</p>
 

   </div>`;

    }
    console.log(comments);
    main.innerHTML = mainContent;
});


