var Mole = (function(){
    function Mole(normalState, hitState, downY){
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y;
    }
    var _proto = Mole.prototype;
    //重置
    _proto.reset = function(){
        this.normalState.visible = false;
        this.normalState.hitState = false;
        this.isVctive = false;
        this.isShow = false;
        this.isHit = false;
    }
    //显示
    _proto.show = function(){

    }
    //停留
    _proto.showComplete = function(){

    }
    //消失
    _proto.hide = function(){

    }
    return Mole;
})()