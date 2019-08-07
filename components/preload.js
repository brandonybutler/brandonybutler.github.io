$("<img />")
  .on("load", () => {
    console.log("Background image is loaded!");
  
    $("body").css({
      "animation": "blurin 2s",
      "-webkit-animation": "blurin 2s",
      "-moz-animation": "blurin 2s",
      "-ms-animation": "blurin 2s",
    });
    $("body").show();
  })
  .on("error", () => {
    console.log("An error occurred in the initial load loop.");
  
    while (true) {
      if (($("<img />").complete) || (!$("<img />").naturalWidth === 0)) {
          console.log("Background image is loaded!");
          $("body").css({
            "animation": "blurin 2s",
            "-webkit-animation": "blurin 2s",
            "-moz-animation": "blurin 2s",
            "-ms-animation": "blurin 2s",
          });
          $("body").show();
      } else {
        console.log("Background image is not completed loading!");
      }
    }
  });
