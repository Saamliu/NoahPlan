"use strict";
cc._RF.push(module, '18a9cLbEnFMG4kQCbbAboRb', 'Enemy');
// script/Enemy.ts

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
var Player_1 = require("./Player");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDead = false;
        _this.hp = 3;
        _this.NdBullet = null;
        _this.speed = 180;
        _this.time = 2;
        return _this;
        // onCollisionEnter(other, self) {
        //     if (other.tag == 9 && !this.isDead) {
        //         this.die();
        //         other.getComponent(Bullet).die();
        //     } else if (other.tag == 0 && !this.isDead) {
        //         cc.game.pause;
        //         alert("gameover");
        //         cc.audioEngine.stopMusic;
        //     }
        // }
    }
    Enemy.prototype.onLoad = function () {
        this.scrWidth = cc.view.getCanvasSize().width;
        this.scrHeight = cc.view.getCanvasSize().height;
        cc.director.getCollisionManager().enabled = true;
    };
    Enemy.prototype.start = function () {
        // this.node.y = this.scrHeight + this.node.height;
        // this.node.x = this.node.width / 2 + Math.random() * (this.scrWidth - this.node.width);
    };
    Enemy.prototype.update = function (dt) {
        if (this.isDead) {
            return;
        }
        if (this.time < 0) {
            this.shoot();
            this.time = 2;
            console.log("1");
        }
        this.time -= dt;
        this.node.x -= this.speed * dt;
        if (this.node.x < -1000) {
            this.node.removeFromParent(true);
            this.destroy();
        }
    };
    // 处理碰撞事件layer
    Enemy.prototype.onCollisionEnter = function (other, self) {
        if (other.node.group === 'Player') {
            this.node.destroy();
        }
        if (other.node.group === 'Bullet') {
            this.hp -= Player_1.default.attcked; // 根据需要调整伤害值
            if (this.hp <= 0) {
                // 敌人已经死亡，可以在这里添加敌人死亡的逻辑
                this.node.destroy();
            }
        }
    };
    Enemy.prototype.shoot = function () {
        if (this.isDead) {
            return;
        }
        // 获取玩家节点
        var playerNode = cc.find('Canvas/UIManager/Game/Player');
        if (!playerNode) {
            return; // 玩家节点不存在，不发射子弹
        }
        // 计算玩家相对于敌人的位置向量
        var playerPosition = playerNode.position;
        var enemyPosition = this.node.position;
        var direction = playerPosition.sub(enemyPosition);
        // 计算敌人和玩家之间的角度
        var angle = direction.signAngle(cc.Vec2.RIGHT);
        // 只有当角度合理时才发射子弹
        var maxAngle = Math.PI / 2 + Math.PI / 12; //165度内发射
        if (Math.abs(angle) > maxAngle) {
            // 实例化子弹预制体
            var bulletNode = cc.instantiate(this.NdBullet);
            // 设置子弹的位置
            bulletNode.position = this.node.position;
            // 设置子弹的方向，可以通过旋转子弹节点或设置速度来实现
            var bulletScript = bulletNode.getComponent('EnemyBullet');
            if (bulletScript) {
                bulletScript.setDirection(direction.normalize()); // 在子弹组件中设置归一化的方向
            }
            // 将子弹添加到场景中
            this.node.parent.addChild(bulletNode);
        }
    };
    __decorate([
        property
    ], Enemy.prototype, "hp", void 0);
    __decorate([
        property(cc.Prefab)
    ], Enemy.prototype, "NdBullet", void 0);
    __decorate([
        property
    ], Enemy.prototype, "speed", void 0);
    __decorate([
        property
    ], Enemy.prototype, "time", void 0);
    Enemy = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(cc.Component));
exports.default = Enemy;

cc._RF.pop();