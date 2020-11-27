const getAllComments = fetch("https://jsonplaceholder.typicode.com/comments");
let visibleComments = [];
let dataReceiving = getAllComments
  .then((response) => {
    return response.json();
  })
  .then((comments) => {
    let cutComments = cloneComments(comments);
    listRendering(cutComments);
    visibleComments.push(...cutComments);
  });

function cloneComments(comments) {
  return comments.slice(0, 10);
}

function listRendering(commentsCopy) {
  commentsCopy.forEach(function (comment) {
    $("#comments").append(commentBody(comment));
  });
}

function commentBody({ email, body }) {
  return `<div class="p-3 bg-white mt-2 rounded comment-text myDivComment">
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

         <div class="comment-text text-justify mt-2 textComment">

   <p class="comments commentsBody">${body}</p> 
       </div>
          <div class="d-flex justify-content-end align-items-center comment-buttons mt-2 text-right">
              <button type="button" class="btn btn-link buttons-delete">Delete</button>
              <button
                class="btn btn-success btn-sm border-0 px-3 buttons-edit" type="button">
                Edit
              </button>
            </span>
          </div>`;
}

console.log(dataReceiving);

$("#button-send").on("click", function (e) {
  e.preventDefault();
  let bodyComment = $("#comment");
  let email = $("#email");
  let comment = {
    email: email.val(),
    body: bodyComment.val(),
  };
  if (bodyComment.val() && email.val()) {
    email.val("");
    bodyComment.val("");
    visibleComments.unshift(comment);
    $("#comments").empty();
    listRendering(visibleComments);
  }
});

$(document).on("click", ".buttons-delete", function () {
  let commentIndex = $(this).closest(".myDivComment").index();
  let commentRemover = $(".myDivComment")[commentIndex];
  $(commentRemover).remove();
  console.log(commentIndex);
});

$(document).on("click", ".buttons-edit", function () {
  let commentIndex = $(this).closest(".myDivComment").index();
  const bodyIndex = visibleComments[commentIndex].body;
  let commentEditor = $(".textComment")[commentIndex];

  $(commentEditor).replaceWith(
    "<textarea name='text' class='form-control textComment'>" +
      bodyIndex +
      "</textarea>"
  );
  console.log(commentIndex);
});

$(document).on("click", ".buttons-edit", function () {
  $(this).replaceWith(
    "<button type='button' class='btn btn-success btn-sm border-0 px-3 buttons-save'>Save</button>"
  );
});

$(document).on("click", ".buttons-save", function () {
  let commentIndex = $(this).closest(".myDivComment").index();
  let commentEditor = $(".textComment")[commentIndex];
  let commentText = $(commentEditor).val();
  $(commentEditor).replaceWith(
    "<p class='comments commentsBody'>" + commentText + "</p>"
  );

  let bodyComment = commentText;
  let email = visibleComments[commentIndex].email;
  visibleComments[commentIndex] = {
    email: email,
    body: bodyComment,
  };

  console.log(visibleComments);
});

$(document).on("click", ".buttons-save", function () {
  $(this).replaceWith(
    "<button type='button' class='btn btn-success btn-sm border-0 px-3 buttons-edit'>Edit</button>"
  );
});
