
(function(){
    //初始化游戏引擎
    Laya.init(800, 600);
    //屏幕适配
    Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
    Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
    Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
    Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
    //修改舞台颜色
    Laya.stage.bgColor = '#fcc';
    //加载资源
    Laya.loader.load('res/atlas/comp.json',Laya.Handler.create(this, onLoaded),null,Laya.Loader.ATLAS);
    
    function onLoaded(){
        //var game = new Game();
        LayaSample.gameStart = new GameStart();
        Laya.stage.addChild(LayaSample.gameStart);
    }
})(window.LayaSample || (window.LayaSample = {}));
