var Game = (function(_super){
    function Game(){
        Game.super(this);
    }
    //注册类
    Laya.class(Game,'Game', _super)
    return Game;
})(ui.GameUI);