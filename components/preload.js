$("<img />")
  .on("load", () => {
    $("body").css({
      "animation": "blurin 2s",
      "-webkit-animation": "blurin 2s",
      "-moz-animation": "blurin 2s",
      "-ms-animation": "blurin 2s",
    });
    $("body").show();
  })
  .on("error", () => {
    while (true) {
      if (($("<img />").complete) || (!$("<img />").naturalWidth === 0)) {
          $("body").css({
            "animation": "blurin 2s",
            "-webkit-animation": "blurin 2s",
            "-moz-animation": "blurin 2s",
            "-ms-animation": "blurin 2s",
          });
          $("body").show();
      }
    }
  });
