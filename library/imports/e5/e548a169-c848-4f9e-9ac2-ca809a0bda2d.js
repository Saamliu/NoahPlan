"use strict";
cc._RF.push(module, 'e548aFpyEhPnprCyoCaC9ot', 'EnemyBullet');
// script/EnemyBullet.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var EnemyBullet = /** @class */ (function (_super) {
    __extends(EnemyBullet, _super);
    function EnemyBullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 200;
        return _this;
    }
    EnemyBullet.prototype.onLoad = function () {
        this.scrHeight = cc.view.getCanvasSize().height;
        cc.director.getCollisionManager().enabled = true;
    };
    // 设置子弹的方向
    EnemyBullet.prototype.setDirection = function (direction) {
        this.direction = direction;
    };
    EnemyBullet.prototype.update = function (dt) {
        if (!this.direction) {
            return;
        }
        // 根据方向向量移动子弹
        this.node.x += this.direction.x * this.speed * dt;
        this.node.y += this.direction.y * this.speed * dt;
        // 如果子弹超出屏幕范围，销毁它
        if (this.node.x > this.scrHeight || this.node.x < -this.scrHeight || this.node.y > this.scrHeight || this.node.y < -this.scrHeight) {
            this.node.removeFromParent(true);
            this.destroy();
        }
    };
    EnemyBullet.prototype.onCollisionEnter = function (other, self) {
        if (other.node.group === 'Player') {
            this.node.destroy();
        }
    };
    __decorate([
        property
    ], EnemyBullet.prototype, "speed", void 0);
    EnemyBullet = __decorate([
        ccclass
    ], EnemyBullet);
    return EnemyBullet;
}(cc.Component));
exports.default = EnemyBullet;

cc._RF.pop();