//循环滚动背景
var Role = (function(_super){
    function Role(){
        Role.super(this);
        this.cached = false;
    }
    //注册类
    Laya.class(Role,'Role',_super);
    var _proto = Role.prototype;
    _proto.init = function(_type,_camp,_hp,_speed,_hitRadius){
        //角色类型
        this.type = _type;
        //阵容
        this.camp = _camp;
        //生命
        this.hp = _hp;
        //发射速度
        this.speed = _speed;
        //被击的半径
        this.hitRadius = _hitRadius;
        if(!this.cached){

            //缓存飞机的动作
            Laya.Animation.createFrames(['ui/war/hero_fly1.png','ui/war/hero_fly2.png'],'hero_fly');
            //缓存爆炸的动作
            Laya.Animation.createFrames(['ui/war/hero_down1.png','ui/war/hero_down2.png','ui/war/hero_down3.png','ui/war/hero_down4.png'],'hero_down');

            //敌机1的飞行的动作
            Laya.Animation.createFrames(['ui/war/enemy1_fly1.png'],'enemy1_fly');
            //敌机1爆炸的动作
            Laya.Animation.createFrames(['ui/war/enemy1_down1.png','ui/war/enemy1_down2.png','ui/war/enemy1_down3.png','ui/war/enemy1_down4.png'],'enemy1_down');

            //敌机2的飞行的动作
            Laya.Animation.createFrames(['ui/war/enemy2_fly1.png'],'enemy2_fly');
            //敌机2爆炸的动作
            Laya.Animation.createFrames(['ui/war/enemy2_down1.png','ui/war/enemy2_down2.png','ui/war/enemy2_down3.png','ui/war/enemy2_down4.png'],'enemy2_down');
            //敌机2碰撞的动作
            Laya.Animation.createFrames(['ui/war/enemy2_hit.png'],'enemy2_hit');

            //敌机3的飞行的动作
            Laya.Animation.createFrames(['ui/war/enemy3_fly1.png','ui/war/enemy3_fly2.png'],'enemy3_fly');
            //敌机3爆炸的动作
            Laya.Animation.createFrames(['ui/war/enemy3_down1.png','ui/war/enemy3_down2.png','ui/war/enemy3_down3.png','ui/war/enemy3_down4.png','ui/war/enemy3_down5.png','ui/war/enemy3_down6.png'],'enemy3_down');
            //敌机3碰撞的动作
            Laya.Animation.createFrames(['ui/war/enemy3_hit.png'],'enemy3_hit');

        }
        
        if(!this.body){
            //创建一个动画作为飞机的身体
            this.body = new Laya.Animation();
            this.addChild(this.body);
        }
        this.playAction('fly');   
    }
    _proto.playAction = function(action){
        //根据action播放动画
        this.body.play(0,true,this.type+'_'+action);
        //获取当前动画大小的区域
        //this.bound = this.body.getBounds();
        //this.body.pos(-this.bound.width/2,-this.bound.height/2);
        this.body.pivotX = 49.5;
        this.body.pivotY = 62;
    }
    return Role;
})(Laya.Sprite);