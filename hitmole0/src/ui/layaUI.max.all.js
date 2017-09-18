var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.timeBar=null;
		    this.scoreNum=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}
		GameUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"comp/back.png"}},{"type":"Box","props":{"y":196,"x":159,"name":"item0"},"child":[{"type":"Image","props":{"x":2,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":-3,"skin":"comp/mask-01.png"}},{"type":"Image","props":{"y":23,"x":64,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":191,"x":343,"name":"item1"},"child":[{"type":"Image","props":{"y":3,"x":2,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":0,"skin":"comp/mask-02.png"}},{"type":"Image","props":{"y":31,"x":65,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":197,"x":540,"name":"item2"},"child":[{"type":"Image","props":{"y":3,"x":2,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":0,"skin":"comp/mask-03.png"}},{"type":"Image","props":{"y":31,"x":65,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":282,"x":127,"name":"item3"},"child":[{"type":"Image","props":{"y":3,"x":2,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":0,"skin":"comp/mask-04.png"}},{"type":"Image","props":{"y":31,"x":65,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":283,"x":344,"name":"item4"},"child":[{"type":"Image","props":{"y":3,"x":2,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":0,"skin":"comp/mask-05.png"}},{"type":"Image","props":{"y":31,"x":65,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":283,"x":543,"name":"item5"},"child":[{"type":"Image","props":{"y":2,"x":2,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":0,"skin":"comp/mask-06.png"}},{"type":"Image","props":{"y":31,"x":65,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":381,"x":121,"name":"item6"},"child":[{"type":"Image","props":{"y":3,"x":2,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":0,"skin":"comp/mask-07.png"}},{"type":"Image","props":{"y":31,"x":65,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":386,"x":345,"name":"item7"},"child":[{"type":"Image","props":{"y":3,"x":4,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":0,"skin":"comp/mask-08.png"}},{"type":"Image","props":{"y":31,"x":65,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":387,"x":565,"name":"item8"},"child":[{"type":"Image","props":{"y":2,"x":2,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":16,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"x":0,"skin":"comp/mask-09.png"}},{"type":"Image","props":{"y":31,"x":65,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":8,"x":11,"var":"timeBar","value":1,"skin":"comp/progress_time.png"}},{"type":"Box","props":{"y":37,"x":60,"var":"scoreNum"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","index":0,"clipX":10}},{"type":"Clip","props":{"x":18,"skin":"comp/clip_number.png","name":"item1","index":0,"clipX":10}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","index":0,"clipX":10}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","index":0,"clipX":10}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","index":0,"clipX":10}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","index":0,"clipX":10}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","index":0,"clipX":10}},{"type":"Clip","props":{"x":126,"skin":"comp/clip_number.png","name":"item7","index":0,"clipX":10}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","index":0,"clipX":10}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","index":0,"clipX":10}}]}]};
		return GameUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;
		    this.hammer=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);
		}
		HammerUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":67,"x":64,"width":98,"var":"hammer","skin":"comp/hammer.png","rotation":-20,"pivotY":53,"pivotX":59,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":67,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":64,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":67,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
		return HammerUI;
	})(View);