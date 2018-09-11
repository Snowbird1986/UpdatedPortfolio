$(document).ready(function() {
  $("#submit").on("click", makeProject);

  function makeProject(event) {
    event.preventDefault();
    var newProject = {
      projectName: $("#projectName")
        .val()
        .trim(),
      link: $("#link")
        .val()
        .trim(),
      alt: $("#alt")
        .val()
        .trim(),
      title: $("#title")
        .val()
        .trim(),
      img: $("#img")
        .val()
        .trim(),
      UserId: 1
    };
    $.post("/newproj", newProject).then(function(data) {
      console.log(data);
      window.location = "/portfolio";
    });
  }
});
