var GameOver = (function(_super){
    function GameOver(){
        GameOver.super(this);
        this.restartBtn.on(Laya.Event.MOUSE_DOWN,this,this.onRestartGame);
    }
    Laya.class(GameOver,'GameOver',_super);
    var _proto = GameOver.prototype;
    _proto.onRestartGame = function(){
        this.removeSelf();
        LayaSample.game.removeSelf();
        Laya.stage.addChild(LayaSample.gameStart);
    }
    _proto.setScore = function(score){
        var data = {};
        var temp = score;
        for (var i=9; i>=0; i--) {
            data['item'+i] = {index:Math.floor(temp%10)};
            temp /= 10;
        }
        this.scoreNum.dataSource = data;
    }
    return GameOver;
})(ui.GameOverUI)