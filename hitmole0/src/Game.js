var Game = (function(_super){
    function Game() {
        Game.super(this);
        this.mole = new Mole(this.normal, this.hit, downY);
    }
    //注册类
    Laya.class(Game, 'Game', _super)
    return Game;
})(ui.GameUI);