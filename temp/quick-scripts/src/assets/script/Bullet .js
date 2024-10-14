"use strict";
cc._RF.push(module, '71269YL6wVEYZLMFl9ck9j5', 'Bullet ');
// script/Bullet .ts

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
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 200;
        return _this;
    }
    Bullet.prototype.onLoad = function () {
        this.scrHeight = cc.view.getCanvasSize().height;
        cc.director.getCollisionManager().enabled = true;
    };
    Bullet.prototype.update = function (dt) {
        this.node.x += this.speed * dt;
        if (this.node.x > this.scrHeight) {
            this.node.removeFromParent(true);
            this.destroy();
        }
    };
    Bullet.prototype.onCollisionEnter = function (other, self) {
        if (other.node.group === 'Enemy') { // 子弹的碰撞分组
            this.node.destroy();
        }
        if (other.node.group === 'Meteor') { // 子弹的碰撞分组
            this.node.destroy();
        }
        if (other.node.group === 'Comet') { // 子弹的碰撞分组
            this.node.destroy();
        }
    };
    __decorate([
        property
    ], Bullet.prototype, "speed", void 0);
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

cc._RF.pop();