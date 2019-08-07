var interval = setInterval(loader, 1000);

function loader() {
    $(window).on("load", () => {
        console.log("Checking if background image is loaded!");

        setInterval(() => {
          if (($("<img />").complete) && (!$("<img />").naturalWidth === 0)) {
              console.log("Background image is loaded!");

              $("body").css({
                "animation": "blurin 2s",
                "-webkit-animation": "blurin 2s",
                "-moz-animation": "blurin 2s",
                "-ms-animation": "blurin 2s",
              });
              $("body").show();
              
              clearInterval(interval);
          }
        }, 1000);
    });
}
