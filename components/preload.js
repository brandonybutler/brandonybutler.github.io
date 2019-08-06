function preload(imageArray) {
  $(imageArray).each(() => {
    $("<img/>")[0].src = this;
  });
}

preload(["../resources/bubble.jpg"]);

$(() => {
  $("body").css({
    "animation": "blurin 2s",
    "-webkit-animation": "blurin 2s",
    "-moz-animation": "blurin 2s",
    "-ms-animation": "blurin 2s",
  });
});
