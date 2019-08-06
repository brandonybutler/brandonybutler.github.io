function preload(imageArray) {
  $(imageArray).each(() => {
    $("<img/>")[0].src = this;
  });
}

preload(["../resources/bubble.jpg"]);
