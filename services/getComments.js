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

function commentBody({ email, name, body }) {
  return `<div class="p-3 bg-white mt-2 rounded comment-text myDivComment" id="myDivComment">
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
   
  <p class="comments commentsBody">  ${name}  <br> ${body}</p> 
       </div>
          <div class="d-flex justify-content-end align-items-center comment-buttons mt-2 text-right">
              <button type="button" class="btn btn-link buttons-delete" id="clearDiv">Delete</button>
              <button
                class="btn btn-success btn-sm border-0 px-3 buttons-edit" id="buttons-edit"
                type="button">
                Edit
              </button>
            </span>
          </div>`;
}

console.log(dataReceiving);

$("#btn")
  .on("click", function (e) {
    let body = $("#comment");
    let email = $("#email");
    let name = $("#name");
    e.preventDefault();
    let comment = {
      email: email.val(),
      body: body.val(),
      name: name.val(),
    };
    email.val("");
    body.val("");
    visibleComments.unshift(comment);
  })
  .on("click", function (comments, list = [], isListClean = true) {
    if (isListClean) {
      $("#comments").empty();
    }
    listRendering(visibleComments);
  });

$(document).on("click", ".buttons-delete", function () {
  let commentRemover = $("#myDivComment");
  commentRemover.remove();
});

$(document).on("click", ".buttons-edit", function () {
  let commentIndex = $(this).closest(".myDivComment").index();

  $(".textComment").each(function (i, item) {
    if (commentIndex >= i) {
      $(item).replaceWith(
        "<textarea id='textComment' name='textComment' class='form-control'>" +
          $(".commentsBody").html() +
          "</textarea>"
      );
    }
  });

  console.log(commentIndex);
});

// $("#textComment").replaceWith(
//   "<textarea id='textComment' name='textComment' class='form-control'>" +
//     $("#commentsBody").html() +
//     "</textarea>"
// );

// $(".places__photos-countries__all-stars__item").each(function (i, item) {
//     if (starIndex >= i) {
//         $(item).addClass("fas");
//     }
// });
