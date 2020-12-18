class Form{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("car racing game");
        title.position(330,100);

        var input = createInput("name");
        input.position(330,260);

        var button = createButton("play");
        button.position(450,300);
        button.mousePressed(function(){
            input.hide()
            button.hide();
            var name = input.value();
            playerCount = playerCount+1;
            player.update(name);
            player.updateCount(playerCount);

            var greeting = createElement("h3");
            greeting.html("Hello "+name)
            greeting.position(330,260)
        })
    }
}