var Game = (function(_super){
    function Game() {
        Game.super(this);
        this.moles = [];
        this.moleNum = 9;
        this.timeBar.value = 1;//进度条初始值
        this.score = 0;//存储得分
        this.hitCallBackHd = Laya.Handler.create(this,this.setScore,null,false);
        for(var i = 0; i< this.moleNum; i++){
            this.box = this.getChildByName('item'+i);
            this.mole = new Mole(this.box.getChildByName('normal'),this.box.getChildByName('hit'),21,this.hitCallBackHd,this.box.getChildByName('scoreImg'));
            this.moles.push(this.mole);
        }
        //this.scoreNum.dataSource = {item0:{index:5},item1:{index:6}};
        //this.mole = new Mole(this.normal, this.hit, 21);
        this.hammer = new Hammer();
        this.addChild(this.hammer);
        this.hammer.start();
        Laya.timer.loop(1000,this,this.isShow);
    }
    //注册类
    Laya.class(Game, 'Game', _super)
    var _proto = Game.prototype;
    _proto.isShow = function(){
        this.timeBar.value -= 1/90;
        if(this.timeBar.value <=0){
            this.gameOver();
            return;
        }
        this.index = Math.floor(Math.random()*this.moleNum);
        this.moles[this.index].show();
    }
    _proto.gameOver = function(){
        Laya.timer.clear(this,this.isShow);
        console.log('游戏结束!');
    }
    _proto.setScore = function(type){
        this.score += (type == 1 ? -100 : 100);
        if(this.score <= 0){
            this.score = 0;
        }
        this.updateScoreUI();
    }
    _proto.updateScoreUI = function(){
        var data = {};
        var temp = this.score;
        for (var i=9; i>=0; i--) {
            data['item'+i] = {index:Math.floor(temp%10)};
            temp /= 10;
        }
        this.scoreNum.dataSource = data;
    }
    return Game;
})(ui.GameUI);