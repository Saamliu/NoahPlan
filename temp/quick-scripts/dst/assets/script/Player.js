
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65827biz51B/a0Q2JRDQb3C', 'Player');
// script/Player.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MAXHP = 20;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progress = null;
        _this.player = null;
        _this.bulletPrefab = null;
        _this.moveSpeed = 300;
        _this.hp = 20;
        _this.up = false;
        _this.down = false;
        _this.left = false;
        _this.right = false;
        _this.speedSave = _this.moveSpeed;
        return _this;
    }
    Player_1 = Player;
    Player.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        cc.director.getCollisionManager().enabled = true;
        this.progress.progress = this.hp / MAXHP;
    };
    Player.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Player.prototype.update = function (dt) {
        this.move();
    };
    Player.prototype.move = function () {
        if (this.left) {
            this.player.x -= this.moveSpeed * cc.director.getDeltaTime();
        }
        if (this.right) {
            this.player.x += this.moveSpeed * cc.director.getDeltaTime();
        }
        if (this.up) {
            if (this.player.y >= 320) {
                this.player.y = 320;
            }
            this.player.y += this.moveSpeed * cc.director.getDeltaTime();
        }
        if (this.down) {
            if (this.player.y <= -320) {
                this.player.y = -320;
            }
            this.player.y -= this.moveSpeed * cc.director.getDeltaTime();
        }
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                // 左移
                this.left = true;
                break;
            case cc.macro.KEY.d:
                // 右移
                this.right = true;
                break;
            case cc.macro.KEY.w:
                // 上移
                this.up = true;
                break;
            case cc.macro.KEY.s:
                // 下移
                this.down = true;
                break;
            case cc.macro.KEY.k:
                this.spawnBullet();
                break;
        }
    };
    Player.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.left = false;
                break;
            case cc.macro.KEY.d:
                this.right = false;
                break;
            case cc.macro.KEY.w:
                this.up = false;
                break;
            case cc.macro.KEY.s:
                this.down = false;
                break;
        }
    };
    Player.prototype.spawnBullet = function () {
        // 实例化子弹预制体
        var bulletNode = cc.instantiate(this.bulletPrefab);
        // 设置子弹的位置，这里可以根据需要设置为角色的位置
        bulletNode.position = this.player.position;
        // 将子弹添加到场景中
        this.node.parent.addChild(bulletNode);
    };
    // 处理碰撞事件
    Player.prototype.onCollisionEnter = function (other, self) {
        if (other.node.group === 'Enemy') { // 子弹的碰撞分组
            this.hp -= 3;
            this.progress.progress = this.hp / MAXHP;
            if (this.hp <= 0) {
                this.node.destroy();
                cc.find('Canvas/UIManager/Game').active = false;
                cc.find('Canvas/UIManager/Over').active = true;
            }
        }
        else if (other.node.group === 'End') {
            cc.find('Canvas/UIManager/Game').active = false;
            cc.find('Canvas/UIManager/End').active = true;
        }
        else if (other.node.group === 'Block') {
            cc.find('Canvas/UIManager/Game').active = false;
            cc.find('Canvas/UIManager/Over').active = true;
        }
        else if (other.node.group === 'EnemyBullet') {
            this.hp -= 1;
            console.log(this.hp);
            this.progress.progress = this.hp / MAXHP;
            if (this.hp <= 0) {
                this.node.destroy();
                cc.find('Canvas/UIManager/Game').active = false;
                cc.find('Canvas/UIManager/Over').active = true;
            }
        }
        else if (other.node.group === 'Meteor') {
            cc.find('Canvas/UIManager/Game').active = false;
            cc.find('Canvas/UIManager/Over').active = true;
        }
        else if (other.node.group === 'Comet') {
            cc.find('Canvas/UIManager/Game').active = false;
            cc.find('Canvas/UIManager/Over').active = true;
        }
        else if (other.node.group === 'Item') {
            var arr = [0, 1, 2, 3]; //分别代表生命，子弹威力增加，加速,黑洞
            var randomNum = this.getRandomNumber(0, 2);
            switch (randomNum) {
                case 0:
                    if (this.hp >= 20) {
                        this.hp = 20;
                    }
                    else {
                        this.hp += 5;
                    }
                    this.progress.progress = this.hp / MAXHP;
                    console.log('加血');
                    break;
                case 1:
                    Player_1.attcked += 1;
                    console.log('加攻击');
                    break;
                case 2:
                    this.moveSpeed *= 1.25;
                    this.speedSave = this.moveSpeed;
                    console.log('加速度');
                    break;
            }
        }
        else if (other.node.group === 'Black') {
            this.moveSpeed *= 0.4;
            console.log('黑洞');
        }
    };
    Player.prototype.onCollisionExit = function (other, self) {
        this.moveSpeed = this.speedSave;
    };
    Player.prototype.getRandomNumber = function (min, max) {
        // 生成一个从0到1之间的随机小数
        var randomFraction = Math.random();
        // 将随机小数映射到指定范围内
        var randomNumber = min + (randomFraction * (max - min + 1));
        return Math.floor(randomNumber);
    };
    var Player_1;
    Player.attcked = 1;
    __decorate([
        property(cc.ProgressBar)
    ], Player.prototype, "progress", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "player", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "bulletPrefab", void 0);
    __decorate([
        property
    ], Player.prototype, "moveSpeed", void 0);
    __decorate([
        property
    ], Player.prototype, "hp", void 0);
    Player = Player_1 = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFJNUMsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFBO0FBRWhCO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBaUxDO1FBOUtXLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFHLEdBQUcsQ0FBQztRQUVoQixRQUFFLEdBQUcsRUFBRSxDQUFDO1FBSWhCLFFBQUUsR0FBWSxLQUFLLENBQUM7UUFDcEIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixVQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFdBQUssR0FBWSxLQUFLLENBQUM7UUFFdkIsZUFBUyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUM7O0lBNkovQixDQUFDO2VBakxvQixNQUFNO0lBdUJiLHVCQUFNLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0UsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FB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TztJQVhDLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FpTDFCO0lBQUQsYUFBQztDQWpMRCxBQWlMQyxDQWpMbUMsRUFBRSxDQUFDLFNBQVMsR0FpTC9DO2tCQWpMb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbmVteSBmcm9tIFwiLi9FbmVteVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cblxuY29uc3QgTUFYSFAgPSAyMFxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJpdmF0ZSBwcm9ncmVzczogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgYnVsbGV0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgbW92ZVNwZWVkID0gMzAwO1xuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgaHAgPSAyMDtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXR0Y2tlZCA9IDE7XG5cbiAgICB1cDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGRvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZWZ0OiBib29sZWFuID0gZmFsc2U7XG4gICAgcmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHNwZWVkU2F2ZSA9IHRoaXMubW92ZVNwZWVkO1xuXG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnByb2dyZXNzID0gdGhpcy5ocCAvIE1BWEhQO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgfVxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnggLT0gdGhpcy5tb3ZlU3BlZWQgKiBjYy5kaXJlY3Rvci5nZXREZWx0YVRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yaWdodCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueCArPSB0aGlzLm1vdmVTcGVlZCAqIGNjLmRpcmVjdG9yLmdldERlbHRhVGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnVwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIueSA+PSAzMjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci55ID0gMzIwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIueSArPSB0aGlzLm1vdmVTcGVlZCAqIGNjLmRpcmVjdG9yLmdldERlbHRhVGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRvd24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci55IDw9IC0zMjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci55ID0gLTMyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxheWVyLnkgLT0gdGhpcy5tb3ZlU3BlZWQgKiBjYy5kaXJlY3Rvci5nZXREZWx0YVRpbWUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudCk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgLy8g5bem56e7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgICAgICAgICAvLyDlj7Pnp7tcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcbiAgICAgICAgICAgICAgICAvLyDkuIrnp7tcbiAgICAgICAgICAgICAgICB0aGlzLnVwID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcbiAgICAgICAgICAgICAgICAvLyDkuIvnp7tcbiAgICAgICAgICAgICAgICB0aGlzLmRvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuazpcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduQnVsbGV0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBvbktleVVwKGV2ZW50KTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudzpcbiAgICAgICAgICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxuICAgICAgICAgICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgc3Bhd25CdWxsZXQoKSB7XG4gICAgICAgIC8vIOWunuS+i+WMluWtkOW8uemihOWItuS9k1xuICAgICAgICBjb25zdCBidWxsZXROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpO1xuXG4gICAgICAgIC8vIOiuvue9ruWtkOW8ueeahOS9jee9ru+8jOi/memHjOWPr+S7peagueaNrumcgOimgeiuvue9ruS4uuinkuiJsueahOS9jee9rlxuICAgICAgICBidWxsZXROb2RlLnBvc2l0aW9uID0gdGhpcy5wbGF5ZXIucG9zaXRpb247XG5cbiAgICAgICAgLy8g5bCG5a2Q5by55re75Yqg5Yiw5Zy65pmv5LitXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoYnVsbGV0Tm9kZSk7XG4gICAgfVxuXG4gICAgLy8g5aSE55CG56Kw5pKe5LqL5Lu2XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gJ0VuZW15JykgeyAvLyDlrZDlvLnnmoTnorDmkp7liIbnu4RcbiAgICAgICAgICAgIHRoaXMuaHAgLT0gMztcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MucHJvZ3Jlc3MgPSB0aGlzLmhwIC8gTUFYSFA7XG4gICAgICAgICAgICBpZiAodGhpcy5ocCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvVUlNYW5hZ2VyL0dhbWUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvVUlNYW5hZ2VyL092ZXInKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT09ICdFbmQnKSB7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvVUlNYW5hZ2VyL0dhbWUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9VSU1hbmFnZXIvRW5kJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChvdGhlci5ub2RlLmdyb3VwID09PSAnQmxvY2snKSB7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvVUlNYW5hZ2VyL0dhbWUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9VSU1hbmFnZXIvT3ZlcicpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gJ0VuZW15QnVsbGV0Jykge1xuICAgICAgICAgICAgdGhpcy5ocCAtPSAxO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ocCk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzLnByb2dyZXNzID0gdGhpcy5ocCAvIE1BWEhQO1xuICAgICAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL1VJTWFuYWdlci9HYW1lJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL1VJTWFuYWdlci9PdmVyJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvdGhlci5ub2RlLmdyb3VwID09PSAnTWV0ZW9yJykge1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL1VJTWFuYWdlci9HYW1lJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvVUlNYW5hZ2VyL092ZXInKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZSBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gJ0NvbWV0Jykge1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL1VJTWFuYWdlci9HYW1lJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvVUlNYW5hZ2VyL092ZXInKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9ZWxzZSBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gJ0l0ZW0nKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBbMCwgMSwgMiwgM10vL+WIhuWIq+S7o+ihqOeUn+WRve+8jOWtkOW8ueWogeWKm+WinuWKoO+8jOWKoOmAnyzpu5HmtJ5cbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbU51bSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKDAsIDIpO1xuICAgICAgICAgICAgc3dpdGNoIChyYW5kb21OdW0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhwID49IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhwID0gMjBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHAgKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzLnByb2dyZXNzID0gdGhpcy5ocCAvIE1BWEhQO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Yqg6KGAJylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBQbGF5ZXIuYXR0Y2tlZCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Yqg5pS75Ye7JylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVTcGVlZCAqPSAxLjI1O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkU2F2ZSA9IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Yqg6YCf5bqmJylcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gJ0JsYWNrJykge1xuICAgICAgICAgICAgdGhpcy5tb3ZlU3BlZWQgKj0gMC40O1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+m7kea0nicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRXhpdChvdGhlciwgc2VsZikge1xuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IHRoaXMuc3BlZWRTYXZlO1xuICAgIH1cbiAgICBnZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgLy8g55Sf5oiQ5LiA5Liq5LuOMOWIsDHkuYvpl7TnmoTpmo/mnLrlsI/mlbBcbiAgICAgICAgY29uc3QgcmFuZG9tRnJhY3Rpb24gPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICAgIC8vIOWwhumaj+acuuWwj+aVsOaYoOWwhOWIsOaMh+WumuiMg+WbtOWGhVxuICAgICAgICBjb25zdCByYW5kb21OdW1iZXIgPSBtaW4gKyAocmFuZG9tRnJhY3Rpb24gKiAobWF4IC0gbWluICsgMSkpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmRvbU51bWJlcik7IFxuICAgIH1cbn1cbiJdfQ==