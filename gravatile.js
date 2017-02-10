var gravatarMosaic = gravatarMosaic || function (document) {

    var config = {
        gravatarUrl: "https://www.gravatar.com/avatar/{{userHash}}?s=328&d=identicon&r=PG"
    };

    var vars = {
        canvas: null,
        ctx: null,
        totalItems: null,
        imgDim: null,
        canvasItems: [],
        lastUsedItemIndex:0
    };

    var init = function (settings) {

        vars.canvas = settings.element;
        vars.ctx = vars.canvas.getContext('2d');

        settings.userData = shuffle(settings.userData);

        initCanvasDimensions(settings);
        initialiseImgElements(settings);
        initialiseRandomiser(settings);

        window.addEventListener("resize", function () {
            var currentWidth = vars.canvas.width;
            initCanvasDimensions(settings);
            if (vars.canvas.width !== currentWidth){
                draw();
            }
        });
    };

    var initCanvasDimensions = function (settings) {
        vars.canvas.width = vars.canvas.parentNode.clientWidth;
        vars.imgDim = (vars.canvas.width / settings.columns);
        vars.canvas.height = (vars.imgDim * settings.rows);
    }

    var initialiseImgElements = function (settings) {
        vars.totalItems = (settings.columns * settings.rows);
        for (i = 0; i < vars.totalItems; i++) {
            var user = getRandomUser(settings.userData);

            var x = i % settings.columns;
            var y = Math.floor(i / settings.columns);

            vars.canvasItems.push({
                user: user,
                x: x,
                y: y
            });

        };
        draw(settings);
    };

    var initialiseRandomiser = function (settings) {
        var i = setInterval(function () {
            var img = getRandomImg(settings);
            var user = getRandomUser(settings.userData);

            var randomCanvasItemIndex = getRandomInt(0, vars.canvasItems.length - 1);
            var x = randomCanvasItemIndex % settings.columns;
            var y = Math.floor(randomCanvasItemIndex / settings.columns);


            var img;
            for (let i = 0; i < vars.canvasItems.length; i++) {
                if (vars.canvasItems[i].x === x && vars.canvasItems[i].y === y) {
                    vars.canvasItems[i].user = user;
                }
            }

            draw();


        }, 2000);
    };

    var getRandomUser = function (userData) {
        if (vars.lastUsedItemIndex>=userData.length-1){
          vars.lastUsedItemIndex = 0;
        }
        else{
          vars.lastUsedItemIndex++;
        }

        return userData[vars.lastUsedItemIndex];
    };

    var getRandomImg = function (settings) {
        return settings.element.childNodes[getRandomInt(0, vars.totalItems - 1)];
    }

    var createImg = function (user, settings, x, y) {

        var img = new Image();

        img.onload = function () {
            vars.ctx.drawImage(img, x*vars.imgDim, y*vars.imgDim, vars.imgDim, vars.imgDim);
        }

        img.src = config.gravatarUrl.replace("{{userHash}}", user.imgHash);
    };


    var draw = function (settings) {
        for (let i = 0; i < vars.canvasItems.length; i++) {
            var ci = vars.canvasItems[i];
            createImg(ci.user, settings, ci.x, ci.y)
        };
    };


    var getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    return {
        init: init
    };
}(document);
