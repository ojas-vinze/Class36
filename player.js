class Player{
    constructor(){}

    getCount(){
        var playerCountRef = database.ref("PlayerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            PlayerCount:count
        });
    }

    update(vname){
       var playerIndex = "Player"+playerCount;
       database.ref(playerIndex).set({
        name:vname
    });
    }
}