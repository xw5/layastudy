var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.normal=null;
		    this.hit=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}
		GameUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"comp/back.png"}},{"type":"Box","props":{"y":195,"x":158},"child":[{"type":"Image","props":{"x":9,"var":"normal","skin":"comp/mouse_normal_1.png"}},{"type":"Image","props":{"y":14,"x":9,"var":"hit","skin":"comp/mouse_hit_1.png"}},{"type":"Image","props":{"y":85,"skin":"comp/mask-01.png"}}]}]};
		return GameUI;
	})(View);