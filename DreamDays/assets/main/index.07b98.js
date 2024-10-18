window.__require=function e(t,o,n){function i(c,a){if(!o[c]){if(!t[c]){var l=c.split("/");if(l=l[l.length-1],!t[l]){var s="function"==typeof __require&&__require;if(!a&&s)return s(l,!0);if(r)return r(l,!0);throw new Error("Cannot find module '"+c+"'")}c=l}var p=o[c]={exports:{}};t[c][0].call(p.exports,function(e){return i(t[c][1][e]||e)},p,p.exports,e,t,o,n)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<n.length;c++)i(n[c]);return i}({Config:[function(e,t,o){"use strict";cc._RF.push(t,"ed610+9zP9Ik4izLjev+GTe","Config"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function e(){}return e.roleMoveSpeed=200,e.tiledSize=16,e}();o.default=n,cc._RF.pop()},{}],Constants:[function(e,t,o){"use strict";cc._RF.push(t,"711fegg2rRLSbJaNGo+qznS","Constants"),Object.defineProperty(o,"__esModule",{value:!0}),o.Constants=void 0;o.Constants=function(){},cc._RF.pop()},{}],Enum:[function(e,t,o){"use strict";cc._RF.push(t,"39e3am73PtGMJEHt/ZK+QRS","Enum"),Object.defineProperty(o,"__esModule",{value:!0}),o.RoleAnimState=o.TiledLayerName=o.GroupName=o.SceneName=o.FaceDirection=void 0,function(e){e[e.None=0]="None",e[e.Up=1]="Up",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.Right=4]="Right"}(o.FaceDirection||(o.FaceDirection={})),function(e){e.Main="Main",e.Home="Home"}(o.SceneName||(o.SceneName={})),function(e){e.Wall="wall",e.Role="role"}(o.GroupName||(o.GroupName={})),function(e){e.restraintGrid="restraintGrid",e.hideSpace="hideSpace",e.fur_moveRow="fur_moveRow"}(o.TiledLayerName||(o.TiledLayerName={})),function(e){e[e.Move_Up=0]="Move_Up",e[e.Move_Down=1]="Move_Down",e[e.Move_LeftDown=2]="Move_LeftDown",e[e.Move_LeftUp=3]="Move_LeftUp",e[e.Move_RightDown=4]="Move_RightDown",e[e.Move_RightUp=5]="Move_RightUp",e[e.Idle_Up=6]="Idle_Up",e[e.Idle_Down=7]="Idle_Down",e[e.Idle_LeftDown=8]="Idle_LeftDown",e[e.Idle_LeftUp=9]="Idle_LeftUp",e[e.Idle_RightDown=10]="Idle_RightDown",e[e.Idle_RightUp=11]="Idle_RightUp"}(o.RoleAnimState||(o.RoleAnimState={})),cc._RF.pop()},{}],EventManager:[function(e,t,o){"use strict";cc._RF.push(t,"f0bbf9JcL1AgIr92y54IYXG","EventManager");var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c},c=this&&this.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<o;t++)for(var r=arguments[t],c=0,a=r.length;c<a;c++,i++)n[i]=r[c];return n};Object.defineProperty(o,"__esModule",{value:!0}),o.EventName=void 0;var a=e("../Singleton"),l=cc._decorator,s=l.ccclass,p=(l.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),Object.defineProperty(t,"Instance",{get:function(){return e.GetInstance.call(this)},enumerable:!1,configurable:!0}),t.on=function(e,t,o){this.eventTarget.on(e,t,o)},t.off=function(e,t,o){this.eventTarget.off(e,t,o)},t.emit=function(e){for(var t,o=[],n=1;n<arguments.length;n++)o[n-1]=arguments[n];(t=this.eventTarget).emit.apply(t,c([e],o))},t.eventTarget=new cc.EventTarget,r([s],t)}(a.default));o.default=p,(o.EventName||(o.EventName={})).DISPLAY_TiledHideSpace="DISPLAY_TiledHideSpace",cc._RF.pop()},{"../Singleton":"Singleton"}],GlobalManager:[function(e,t,o){"use strict";cc._RF.push(t,"2d4562xZOpIirVrGG5kmVdy","GlobalManager");var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,l=(c.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var o;return i(t,e),o=t,t.prototype.onLoad=function(){o.Instance=this,cc.game.addPersistRootNode(this.node),this.physics=cc.director.getPhysicsManager(),this.physics.enabled=!0,this.physics.debugDrawFlags=1,this.physics.gravity=cc.v2(0,0)},t.prototype.start=function(){},t.Instance=null,o=r([a],t)}(cc.Component));o.default=l,cc._RF.pop()},{}],HomeManager:[function(e,t,o){"use strict";cc._RF.push(t,"514bb+tk2xLroQDFpKN428C","HomeManager");var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=e("../Common/Enum"),a=e("../Common/Manager/EventManager"),l=e("../Common/Utils"),s=e("./RoleControl"),p=cc._decorator,d=p.ccclass,f=p.property,u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.nodeRoleSelf=null,t.tiledMap=null,t.nodeHideGridRect=null,t.oldHideSpaceActive=!1,t}var o;return i(t,e),o=t,t.prototype.onLoad=function(){o.Instance=this,l.default.addTiledMapRigidBody(this.tiledMap,c.TiledLayerName.restraintGrid,c.GroupName.Wall),this.nodeRoleSelf.getComponent(s.default).tiledFurInfo=l.default.getTiledFurInfo(this.tiledMap),a.default.on(a.EventName.DISPLAY_TiledHideSpace,this.displayHideSpace,this)},t.prototype.start=function(){},t.prototype.onDestroy=function(){a.default.off(a.EventName.DISPLAY_TiledHideSpace,this.displayHideSpace,this)},t.prototype.displayHideSpace=function(e){var t=this.nodeHideGridRect.getBoundingBoxToWorld(),o=e.getBoundingBoxToWorld().intersects(t);this.oldHideSpaceActive!=o&&(this.oldHideSpaceActive=o,this.tiledMap.getLayer(c.TiledLayerName.hideSpace).node.active=!o)},t.Instance=null,r([f({type:cc.Node,displayName:"\u4e3b\u89d2\u8282\u70b9"})],t.prototype,"nodeRoleSelf",void 0),r([f({type:cc.TiledMap,displayName:"\u573a\u666f\u5730\u56fe"})],t.prototype,"tiledMap",void 0),r([f({type:cc.Node,displayName:"\u9690\u85cf\u7a7a\u95f4\u5305\u56f4\u76d2\u8282\u70b9"})],t.prototype,"nodeHideGridRect",void 0),o=r([d],t)}(cc.Component);o.default=u,cc._RF.pop()},{"../Common/Enum":"Enum","../Common/Manager/EventManager":"EventManager","../Common/Utils":"Utils","./RoleControl":"RoleControl"}],MainManager:[function(e,t,o){"use strict";cc._RF.push(t,"eb1d4wEkQVDu4F8y5U25BJK","MainManager");var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=e("../Common/Enum"),a=e("../Common/Utils"),l=cc._decorator,s=l.ccclass,p=l.property,d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.nodeBtnLayout=null,t.nodeSelectArrow=null,t.curSelectId=0,t}return i(t,e),t.prototype.start=function(){this.displayBtnTransition()},t.prototype.onStartBtnClick=function(){cc.director.loadScene(c.SceneName.Home)},t.prototype.displayBtnTransition=function(){for(var e=0;e<this.nodeBtnLayout.childrenCount;e++){var t=this.nodeBtnLayout.children[e],o=t.getChildByName("img");if(e!==this.curSelectId)o.opacity=140;else{o.opacity=255;var n=a.default.convertToNodePos(t,this.node);this.nodeSelectArrow.y=n.y,console.log("\u5f53\u524d\u9009\u9879y\u5750\u6807",n.y)}}},r([p({type:cc.Node,displayName:"\u6309\u94ae\u9009\u9879\u5217\u8868"})],t.prototype,"nodeBtnLayout",void 0),r([p({type:cc.Node,displayName:"\u6309\u94ae\u9009\u4e2d\u7bad\u5934\u8282\u70b9"})],t.prototype,"nodeSelectArrow",void 0),r([s],t)}(cc.Component);o.default=d,cc._RF.pop()},{"../Common/Enum":"Enum","../Common/Utils":"Utils"}],RoleControl:[function(e,t,o){"use strict";cc._RF.push(t,"98576XtbvNOJZ1uIh0rbDia","RoleControl");var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),r=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=e("../Common/Config"),a=e("../Common/Enum"),l=e("../Common/Manager/EventManager"),s=e("../SceneMain/GlobalManager"),p=cc._decorator,d=p.ccclass,f=p.property,u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.animRole=null,t.roleAnimClips=null,t.oldRoleAnimState=a.RoleAnimState.Idle_Down,t.roleAnimState=a.RoleAnimState.Idle_Down,t.faceDirArr=cc.v2(a.FaceDirection.None,a.FaceDirection.None),t.speedDirArr=cc.v2(0,0),t.tiledFurInfo=null,t.oldRoleRow=-1,t.nodeDebugUI=null,t.moveUpSpeed=.3,t}return i(t,e),t.prototype.onLoad=function(){cc.systemEvent.on("keydown",this.onKeyDown,this),cc.systemEvent.on("keyup",this.onKeyUp,this),this.roleAnimClips=this.animRole.getClips(),this.nodeDebugUI=this.node.parent.getChildByName("DebugUI").getChildByName("UI")},t.prototype.start=function(){this.setParent()},t.prototype.update=function(){var e=this.node.getComponent(cc.RigidBody).linearVelocity;this.speedDirArr.x?e.x=this.speedDirArr.x*c.default.roleMoveSpeed:e.x=0,this.speedDirArr.y?e.y=this.speedDirArr.y*c.default.roleMoveSpeed:e.y=0,this.node.getComponent(cc.RigidBody).linearVelocity=e,this.setLayerIndex(),0===e.x&&0===e.y||l.default.emit(l.EventName.DISPLAY_TiledHideSpace,this.node.getChildByName("rect"))},t.prototype.setParent=function(){var e=this.node.parent.getChildByName("sceneMap");this.node.setParent(e)},t.prototype.setLayerIndex=function(){var e=Math.ceil(this.node.getPosition().y/c.default.tiledSize);if(e!==this.oldRoleRow){this.oldRoleRow=e;for(var t=0,o=0,n=this.tiledFurInfo;o<n.length;o++){var i=n[o];e===i.rowId?t=i.zIndex-1:e===i.rowId-1&&(t=i.zIndex+1)}t<=0||(this.node.zIndex=t)}},t.prototype.playRoleAnim=function(){if(this.oldRoleAnimState!==this.roleAnimState){this.oldRoleAnimState=this.roleAnimState;var e=this.roleAnimClips[this.roleAnimState].name;this.animRole.play(e).speed=this.moveUpSpeed}},t.prototype.onKeyDown=function(e){switch(e.keyCode){case cc.macro.KEY.w:case cc.macro.KEY.up:if(this.faceDirArr.y===a.FaceDirection.Up&&1===this.speedDirArr.y)break;this.faceDirArr.x===a.FaceDirection.None?this.roleAnimState=a.RoleAnimState.Move_Up:this.faceDirArr.x===a.FaceDirection.Left?this.roleAnimState=a.RoleAnimState.Move_LeftUp:this.roleAnimState=a.RoleAnimState.Move_RightUp,this.faceDirArr.y=a.FaceDirection.Up,this.speedDirArr.y=1;break;case cc.macro.KEY.s:case cc.macro.KEY.down:if(this.faceDirArr.y===a.FaceDirection.Down&&-1===this.speedDirArr.y)break;this.faceDirArr.x===a.FaceDirection.None?this.roleAnimState=a.RoleAnimState.Move_Down:this.faceDirArr.x===a.FaceDirection.Left?this.roleAnimState=a.RoleAnimState.Move_LeftDown:this.roleAnimState=a.RoleAnimState.Move_RightDown,this.faceDirArr.y=a.FaceDirection.Down,this.speedDirArr.y=-1;break;case cc.macro.KEY.a:case cc.macro.KEY.left:if(this.faceDirArr.x===a.FaceDirection.Left&&-1===this.speedDirArr.x)break;this.roleAnimState=this.faceDirArr.y===a.FaceDirection.Up?a.RoleAnimState.Move_LeftUp:a.RoleAnimState.Move_LeftDown,this.faceDirArr.x=a.FaceDirection.Left,this.speedDirArr.x=-1;break;case cc.macro.KEY.d:case cc.macro.KEY.right:if(this.faceDirArr.x===a.FaceDirection.Right&&1===this.speedDirArr.x)break;this.roleAnimState=this.faceDirArr.y===a.FaceDirection.Up?a.RoleAnimState.Move_RightUp:a.RoleAnimState.Move_RightDown,this.faceDirArr.x=a.FaceDirection.Right,this.speedDirArr.x=1}this.playRoleAnim()},t.prototype.onKeyUp=function(e){switch(e.keyCode){case cc.macro.KEY.w:case cc.macro.KEY.up:this.speedDirArr.x<0?this.roleAnimState=a.RoleAnimState.Move_LeftUp:this.speedDirArr.x>0?this.roleAnimState=a.RoleAnimState.Move_RightUp:this.faceDirArr.x===a.FaceDirection.Right?this.roleAnimState=a.RoleAnimState.Idle_RightUp:this.faceDirArr.x===a.FaceDirection.Left?this.roleAnimState=a.RoleAnimState.Idle_LeftUp:this.roleAnimState=a.RoleAnimState.Idle_Up,this.faceDirArr.y=a.FaceDirection.Up,this.speedDirArr.y=0;break;case cc.macro.KEY.s:case cc.macro.KEY.down:this.speedDirArr.x<0?this.roleAnimState=a.RoleAnimState.Move_LeftDown:this.speedDirArr.x>0?this.roleAnimState=a.RoleAnimState.Move_RightDown:this.faceDirArr.x===a.FaceDirection.Right?this.roleAnimState=a.RoleAnimState.Idle_RightDown:this.faceDirArr.x===a.FaceDirection.Left?this.roleAnimState=a.RoleAnimState.Idle_LeftDown:this.roleAnimState=a.RoleAnimState.Idle_Down,this.faceDirArr.y=a.FaceDirection.Down,this.speedDirArr.y=0;break;case cc.macro.KEY.a:case cc.macro.KEY.left:this.speedDirArr.y>0?this.roleAnimState=a.RoleAnimState.Move_Up:this.speedDirArr.y<0?this.roleAnimState=a.RoleAnimState.Move_Down:this.roleAnimState=this.faceDirArr.y===a.FaceDirection.Up?a.RoleAnimState.Idle_LeftUp:a.RoleAnimState.Idle_LeftDown,this.faceDirArr.x=a.FaceDirection.None,this.speedDirArr.x=0;break;case cc.macro.KEY.d:case cc.macro.KEY.right:this.speedDirArr.y>0?this.roleAnimState=a.RoleAnimState.Move_Up:this.speedDirArr.y<0?this.roleAnimState=a.RoleAnimState.Move_Down:this.roleAnimState=this.faceDirArr.y===a.FaceDirection.Up?a.RoleAnimState.Idle_RightUp:a.RoleAnimState.Idle_RightDown,this.faceDirArr.x=a.FaceDirection.None,this.speedDirArr.x=0}this.playRoleAnim()},t.prototype.onShowDebug=function(){this.nodeDebugUI.active=!0},t.prototype.onHideDebug=function(){var e=this,t=function(t){var o=e.nodeDebugUI.getChildByName(t).getComponent(cc.EditBox).string;return Number(o)};c.default.roleMoveSpeed=t("moveSpeedEditBox"),this.moveUpSpeed=t("sampleEditBox");var o=this.nodeDebugUI.getChildByName("showBodyToggle").getComponent(cc.Toggle).isChecked;s.default.Instance.physics.debugDrawFlags=o?1:0,this.nodeDebugUI.active=!1},r([f({type:cc.Animation,displayName:"\u89d2\u8272\u52a8\u753b\u7ec4\u4ef6"})],t.prototype,"animRole",void 0),r([d],t)}(cc.Component);o.default=u,cc._RF.pop()},{"../Common/Config":"Config","../Common/Enum":"Enum","../Common/Manager/EventManager":"EventManager","../SceneMain/GlobalManager":"GlobalManager"}],Singleton:[function(e,t,o){"use strict";cc._RF.push(t,"3dfc7VF+ItD/bTFD5jheXik","Singleton"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function e(){}return e.GetInstance=function(){return null==this._instance&&(this._instance=new this),this._instance},e.destroyInstance=function(){this._instance=null},e._instance=null,e}();o.default=n,cc._RF.pop()},{}],Utils:[function(e,t,o){"use strict";cc._RF.push(t,"dac125MX45AkpH3TIf2xKbB","Utils"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./Enum"),i=function(){function e(){}return e.convertToNodePos=function(e,t,o){void 0===o&&(o=null);var n=o||e.getPosition(),i=e.parent.convertToWorldSpaceAR(n);return t.convertToNodeSpaceAR(i)},e.addTiledMapRigidBody=function(e,t,o){for(var n=e.getTileSize(),i=e.getLayer(t),r=i.getLayerSize(),c=0;c<r.width;c++)for(var a=0;a<r.height;a++){var l=i.getTiledTileAt(c,a,!0);if(0!=l.gid){l.node.group=o,l.node.addComponent(cc.RigidBody).type=cc.RigidBodyType.Static;var s=l.node.addComponent(cc.PhysicsBoxCollider);s.offset=cc.v2(n.width/2,n.height/2),s.size=n,s.apply()}}},e.getTiledFurInfo=function(e){for(var t=[],o=n.TiledLayerName.fur_moveRow,i=e.getLayers(),r=0;r<i.length;r++){var c=2*r;i[r].node.zIndex=c;var a=i[r].node.name;if(a.substring(0,4)===o.substring(0,4)){var l={zIndex:c,rowId:Number(a.replace(o,""))};t.push(l)}}return t},e}();o.default=i,cc._RF.pop()},{"./Enum":"Enum"}]},{},["Config","Constants","Enum","EventManager","Singleton","Utils","HomeManager","RoleControl","GlobalManager","MainManager"]);