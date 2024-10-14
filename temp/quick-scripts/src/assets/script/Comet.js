"use strict";
cc._RF.push(module, '987f0kth29PWbcQL1oQz09R', 'Comet');
// script/Comet.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 200;
        _this.hp = 3;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.scrHeight = cc.view.getCanvasSize().width;
    };
    NewClass.prototype.update = function (dt) {
        this.targetPosition = cc.find('Canvas/UIManager/Game/Player').position;
        var distance = this.targetPosition.x - this.node.x;
        if (distance < 1300) {
            this.node.x -= this.speed * dt;
        }
        if (this.node.x < -1000) {
            this.node.removeFromParent(true);
            this.destroy();
        }
    };
    // 处理碰撞事件
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.node.group === 'Bullet') {
            this.hp -= Player_1.default.attcked;
            if (this.hp <= 0) {
                this.node.destroy();
            }
        }
    };
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();