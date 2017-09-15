

var LayaSample = (function(){
    //初始化游戏引擎
    Laya.init(800, 600);
    //修改舞台颜色
    Laya.stage.bgColor = '#fcc';
    //加载资源
    Laya.loader.load('res/atlas/comp.json',Laya.Handler.create(this, onLoaded),null,Laya.Loader.ATLAS);
    
    function onLoaded(){
        var game = new Game();
        Laya.stage.addChild(game);
    }
})();
