var Game = (function(){
    //初始化引擎
    Laya.init(480,852);
    //创建循环滚动的背景
    this.bg = new BackGround();
    Laya.stage.addChild(this.bg);
    //加载图集资源
    Laya.loader.load('res/atlas/ui/war.json',Laya.Handler.create(this,onLoaded),null,Laya.Loader.ATLAS);
    
    function onLoaded(){
        //创建主角
        this.hero = new Role();
        this.hero.init("hero",0,1,0,30);
        this.hero.pos(240,500);
        Laya.stage.addChild(this.hero);

        //监听舞台鼠标移动事件
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,onMouseMove);

        //手动创建敌人
        //createEnemy(10);
        //在循环中创建敌人
        Laya.timer.frameLoop(1,this,onLoop);
    }
    function onLoop(){
       //遍历所有飞机，更改飞机的状态
       for(var i=Laya.stage.numChildren-1; i>0; i-- ){
           var role = Laya.stage.getChildAt(i);
           if(role && role.speed){
               //根据飞机速度改变Y值的位置
               role.y += role.speed;
               //如果敌机移动显示区域以外则移除
               if(role.y > 1000){
                   //从舞台移除
                   role.romoveSelf();
                   //回收到对象池中
                   Laya.Pool.recover('role',role);
               }
           }
       }
       //每隔30帧创建新的敌机 
       if(Laya.timer.currFrame % 60 ===0 ){
           createEnemy(2);
       }
    };
    function onMouseMove(){
        //始终跟随鼠标位置
        this.hero.pos(Laya.stage.mouseX,Laya.stage.mouseY);
    };
    //敌机的血量
    this.hps = [1,2,10]
    //敌机的速度
    this.speeds = [3,2,1]
    //敌机的被击半径
    this.radius = [15,30,70]
    //手动创建敌人
    function createEnemy(num){
        for(var i=0; i<num; i++){
            //随机出现敌人
            var r = Math.random()
            //根据随机数，随机敌人
            var type = r<0.7 ? 0 : r<0.95 ? 1 :2; 
            //创建敌人
            var enemy = Laya.Pool.getItemByClass("role",Role);
            //初始化角色
            enemy.init("enemy"+(type+1),1,this.hps[type],this.speeds[type],this.radius[type]);
            //随机位置
            enemy.pos(Math.random()*400 + 40,Math.random()*200);
            //添加到舞台
            Laya.stage.addChild(enemy);
        }
    }
})()
