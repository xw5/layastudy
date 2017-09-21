//循环滚动背景
var BackGround = (function(_super){
    function BackGround(){
        BackGround.super(this);
        //创建游戏背景
        this.bg1 = new Laya.Sprite();
        //加载资源
        this.bg1.loadImage('ui/background.png');
        //添加到容器
        this.addChild(this.bg1);
        //创建游戏背景
        this.bg2 = new Laya.Sprite();
        //加载资源
        this.bg2.loadImage('ui/background.png');
        //更改背景2放到背景1的上部
        this.bg2.pos(0,-852);
        this.addChild(this.bg2);
        //创建一个循环背景
        Laya.timer.frameLoop(1,this,this.onLoop);
    }
    //注册类
    Laya.class(BackGround,'BackGround',_super);
    var _proto = BackGround.prototype;
    _proto.onLoop = function(){
        //背景容器每帧向下移动一像素
        this.y += 1;
        if(this.y >= 852){
            this.y = 0;
        }
    }
    return BackGround;
})(Laya.Sprite);