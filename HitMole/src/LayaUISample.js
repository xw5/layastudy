
var LayaSample =(function(){
	//初始化引擎
	Laya.init(800,600);
	//改变舞台的颜色
	Laya.stage.bgColor = '#fcc';
	//加载资源
	Laya.loader.load('res/atlas/comp.json',Laya.Handler.create(this, onLoad, null,Laya.Loader.ATLAS))
})();
function onLoad(){
	var game = new Game();
	Laya.stage.addChild(game);
}