const fetchPromise = fetch("https://jsonplaceholder.typicode.com/comments");

const globalPromise = catchComment = fetchPromise
  .then((response) => {
    return response.json();
  })
  .then((comment) => {
    listRendering(comment);
  });
function listRendering(comment) {
  for (let i = 0; i < 10; ++i) {
    $("#comments").append(commentBody(comment[i]));
  }
}
function commentBody({ email, name, body }) {
  return `<div class="p-3 bg-white mt-2 rounded">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row user">
                <img
                  class="rounded-circle img-fluid img-responsive"
                  src="https://i.imgur.com/JXZLwEY.jpg"
                  width="40"
                  alt="img"
                />
                <div class="d-flex flex-column ml-2">
                  <span class="font-weight-bold">${email}</span
                  ><span class="day">2 days ago</span>
                </div>
              </div>
              <div class="d-flex align-items-center px-3 heart border">
                <i class="fa fa-heart-o heart-icon"> </i
                ><span class="ml-2">35</span>
              </div>
            </div>
            <div class="comment-text text-justify mt-2">
             ${name}
              <p class="comments">${body}</p>
            </div>
            <div class="d-flex justify-content-end align-items-center comment-buttons mt-2 text-right">
              <span class="mr-3 delete">Delete</span
              ><button
                class="btn btn-success btn-sm border-0 px-3"
                type="button">
                Edit
              </button>
            </div>
          </div>`;
}
function catchComment() {
  let arr = [];
  arr.slice(10);
  arr.push(comment[i]);
}

 console.log(globalPromise);

console.log(catchComment);