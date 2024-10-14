"use strict";
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