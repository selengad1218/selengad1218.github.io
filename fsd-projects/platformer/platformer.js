$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid


    // TODO 2 - Create Platforms
    createPlatform(100, 700, 100, 100);
    createPlatform(300, 650, 100, 100);
    createPlatform(500, 550, 100, 300);
    createPlatform(700, 600, 100, 400);
    createPlatform(900, 700, 100, 100);
    createPlatform(1100, 600, 100, 300);
    createPlatform(1300, 500, 100, 400);


    // TODO 3 - Create Collectables
    createCollectable("steve", 100, 600);
    createCollectable("steve", 200, 600);
    createCollectable("steve", 300, 500);
    createCollectable("steve", 400, 600);
    createCollectable("diamond", 500, 500);
    createCollectable("steve", 600, 510);
    createCollectable("diamond", 700, 520);
    createCollectable("steve", 800, 550);
    createCollectable("diamond", 900, 650);
    createCollectable("steve", 1000, 600);
    createCollectable("steve", 1100, 550);
    createCollectable("steve", 1200, 500);



    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("top", 600, 1000);
    createCannon("top", 1000, 1000);
    createCannon("top", 1300, 1000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
