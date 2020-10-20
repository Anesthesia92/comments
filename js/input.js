let listOfComments = [];
let input = $("#comment");
let listOfNames = [];
let name = $("#nameForm");

$("#btn")
  .on("click", function (e) {
    e.preventDefault();
    let value = input.val();
    if (value) {
      listOfComments.push(value);
      input.val("");
    }

    console.log(listOfComments);
  })
  .on("click", function (e) {
    e.preventDefault();
    let value = name.val();
    if (value) {
      listOfNames.push(value);
      name.val("");
    }
    console.log(listOfNames);
  });
