enchant();

window.onload = function(){
    var game = new Core(320, 320);
    // game.fps = 15;
    game.preload("chara1.png");
    game.onload = function(){
        var bear = new Sprite(32, 32);
        bear.image = game.assets["chara1.png"];
        bear.x = 0;
        bear.y = 0;
        bear.frame = 5;
        game.rootScene.addChild(bear);

        game.keybind(37, 'left');   
        game.keybind(39, 'right');
        game.keybind(38, 'up');
        game.keybind(40, 'down');
        console.log('h');
        game.addEventListener("enterframe", function(){
            /*if (game.input.left){
                alert('left clicked!');
            }*/
            // console.log('incoming!');
            /*this.y += 1;
            this.frame = this.age % 2 + 6;*/
        });

        $(document).keydown(function (e) {
            var bttn = e.keyCode;
            var lastkey = '';
            switch (bttn) {
                case 87:
                    lastkey = "up";
                    bear.y -= 1;
                    bear.frame = bear.age % 2 + 6;
                    // alert(lastkey);
                    break;
                case 83:
                    lastkey = "down";
                    bear.y += 1;
                    bear.frame = bear.age % 2 + 6;
                    // alert(lastkey);
                    break;
                case 65:
                    lastkey = "left";
                    // alert(lastkey);
                    break;
                case 68:
                    lastkey = "right";
                    // alert(lastkey);
                    break;
            }
        });

        bear.addEventListener("touchstart", function(){
            // game.rootScene.removeChild(bear);
        });
    };
    game.start();
};