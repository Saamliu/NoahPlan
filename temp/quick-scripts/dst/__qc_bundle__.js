
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/BackGround');
require('./assets/script/Bullet ');
require('./assets/script/Comet');
require('./assets/script/Enemy');
require('./assets/script/EnemyBullet');
require('./assets/script/Meteor');
require('./assets/script/Over');
require('./assets/script/Player');
require('./assets/script/Props');
require('./assets/script/Start');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Meteor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35d08AZZHZEt6h8s3INMdFG', 'Meteor');
// script/Meteor.ts

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
        _this.hp = 3;
        return _this;
    }
    // 处理碰撞事件
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.node.group === 'Bullet') {
            this.hp -= Player_1.default.attcked;
            if (this.hp <= 0) {
                this.node.destroy();
            }
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNZXRlb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBWUM7UUFWVyxRQUFFLEdBQUcsQ0FBQyxDQUFDOztJQVVuQixDQUFDO0lBVEcsU0FBUztJQUNULG1DQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUMsRUFBRSxJQUFJLGdCQUFNLENBQUMsT0FBTyxDQUFDO1lBQzFCLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN2QjtTQUNKO0lBQ0wsQ0FBQztJQVhnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBWTVCO0lBQUQsZUFBQztDQVpELEFBWUMsQ0FacUMsRUFBRSxDQUFDLFNBQVMsR0FZakQ7a0JBWm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBocCA9IDM7XG4gICAgLy8g5aSE55CG56Kw5pKe5LqL5Lu2XG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xuICAgICAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gJ0J1bGxldCcpIHtcbiAgICAgICAgICAgIHRoaXMuaHAgLT0gUGxheWVyLmF0dGNrZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5ocCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxFbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFeEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFnSEM7UUE1R0csWUFBTSxHQUFZLEtBQUssQ0FBQztRQUdoQixRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBSXZCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUVwQixVQUFJLEdBQVcsQ0FBQyxDQUFDOztRQXVGakIsa0NBQWtDO1FBQ2xDLDRDQUE0QztRQUM1QyxzQkFBc0I7UUFDdEIsNENBQTRDO1FBQzVDLG1EQUFtRDtRQUNuRCx5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLG9DQUFvQztRQUNwQyxRQUFRO1FBQ1IsSUFBSTtJQUNSLENBQUM7SUE5Rkcsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoRCxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQscUJBQUssR0FBTDtRQUNJLG1EQUFtRDtRQUNuRCx5RkFBeUY7SUFDN0YsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUks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SUFFcEI7UUFEQyxRQUFRO3VDQUNRO0lBZkEsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWdIekI7SUFBRCxZQUFDO0NBaEhELEFBZ0hDLENBaEhrQyxFQUFFLENBQUMsU0FBUyxHQWdIOUM7a0JBaEhvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHNjcldpZHRoOiBudW1iZXI7XG4gICAgc2NySGVpZ2h0OiBudW1iZXI7XG4gICAgaXNEZWFkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIGhwOiBudW1iZXIgPSAzO1xuICAgIHByaXZhdGUgdGFyZ2V0UG9zaXRpb246IGNjLlZlYzM7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIE5kQnVsbGV0OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIHNwZWVkOiBudW1iZXIgPSAxODA7XG4gICAgQHByb3BlcnR5XG4gICAgdGltZTogbnVtYmVyID0gMjtcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNjcldpZHRoID0gY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGg7XG4gICAgICAgIHRoaXMuc2NySGVpZ2h0ID0gY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0O1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS55ID0gdGhpcy5zY3JIZWlnaHQgKyB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICAvLyB0aGlzLm5vZGUueCA9IHRoaXMubm9kZS53aWR0aCAvIDIgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMuc2NyV2lkdGggLSB0aGlzLm5vZGUud2lkdGgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aW1lIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gMjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy50aW1lIC09IGR0O1xuICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA8IC0xMDAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5aSE55CG56Kw5pKe5LqL5Lu2bGF5ZXJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09PSAnUGxheWVyJykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gJ0J1bGxldCcpIHtcbiAgICAgICAgICAgIHRoaXMuaHAgLT0gUGxheWVyLmF0dGNrZWQ7IC8vIOagueaNrumcgOimgeiwg+aVtOS8pOWus+WAvFxuICAgICAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIOaVjOS6uuW3sue7j+atu+S6oe+8jOWPr+S7peWcqOi/memHjOa3u+WKoOaVjOS6uuatu+S6oeeahOmAu+i+kVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob290KCkge1xuICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyDojrflj5bnjqnlrrboioLngrlcbiAgICAgICAgY29uc3QgcGxheWVyTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9VSU1hbmFnZXIvR2FtZS9QbGF5ZXInKTtcbiAgICAgICAgaWYgKCFwbGF5ZXJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIOeOqeWutuiKgueCueS4jeWtmOWcqO+8jOS4jeWPkeWwhOWtkOW8uVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIOiuoeeul+eOqeWutuebuOWvueS6juaVjOS6uueahOS9jee9ruWQkemHj1xuICAgICAgICBjb25zdCBwbGF5ZXJQb3NpdGlvbiA9IHBsYXllck5vZGUucG9zaXRpb247XG4gICAgICAgIGNvbnN0IGVuZW15UG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBsYXllclBvc2l0aW9uLnN1YihlbmVteVBvc2l0aW9uKTtcbiAgICBcbiAgICAgICAgLy8g6K6h566X5pWM5Lq65ZKM546p5a625LmL6Ze055qE6KeS5bqmXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gZGlyZWN0aW9uLnNpZ25BbmdsZShjYy5WZWMyLlJJR0hUKTtcbiAgICBcbiAgICAgICAgLy8g5Y+q5pyJ5b2T6KeS5bqm5ZCI55CG5pe25omN5Y+R5bCE5a2Q5by5XG4gICAgICAgIGNvbnN0IG1heEFuZ2xlID0gTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gMTI7IC8vMTY15bqm5YaF5Y+R5bCEXG4gICAgICAgIGlmIChNYXRoLmFicyhhbmdsZSkgPiBtYXhBbmdsZSkge1xuICAgICAgICAgICAgLy8g5a6e5L6L5YyW5a2Q5by56aKE5Yi25L2TXG4gICAgICAgICAgICBjb25zdCBidWxsZXROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5OZEJ1bGxldCk7XG4gICAgXG4gICAgICAgICAgICAvLyDorr7nva7lrZDlvLnnmoTkvY3nva5cbiAgICAgICAgICAgIGJ1bGxldE5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgXG4gICAgICAgICAgICAvLyDorr7nva7lrZDlvLnnmoTmlrnlkJHvvIzlj6/ku6XpgJrov4fml4vovazlrZDlvLnoioLngrnmiJborr7nva7pgJ/luqbmnaXlrp7njrBcbiAgICAgICAgICAgIGNvbnN0IGJ1bGxldFNjcmlwdCA9IGJ1bGxldE5vZGUuZ2V0Q29tcG9uZW50KCdFbmVteUJ1bGxldCcpOyBcbiAgICAgICAgICAgIGlmIChidWxsZXRTY3JpcHQpIHtcbiAgICAgICAgICAgICAgICBidWxsZXRTY3JpcHQuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbi5ub3JtYWxpemUoKSk7IC8vIOWcqOWtkOW8uee7hOS7tuS4reiuvue9ruW9kuS4gOWMlueahOaWueWQkVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8g5bCG5a2Q5by55re75Yqg5Yiw5Zy65pmv5LitXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGJ1bGxldE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIC8vIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAvLyAgICAgaWYgKG90aGVyLnRhZyA9PSA5ICYmICF0aGlzLmlzRGVhZCkge1xuICAgIC8vICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAvLyAgICAgICAgIG90aGVyLmdldENvbXBvbmVudChCdWxsZXQpLmRpZSgpO1xuICAgIC8vICAgICB9IGVsc2UgaWYgKG90aGVyLnRhZyA9PSAwICYmICF0aGlzLmlzRGVhZCkge1xuICAgIC8vICAgICAgICAgY2MuZ2FtZS5wYXVzZTtcbiAgICAvLyAgICAgICAgIGFsZXJ0KFwiZ2FtZW92ZXJcIik7XG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWM7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Over.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74228tFoRpHfIAMZlwpE/kZ', 'Over');
// script/Over.ts

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
var Over = /** @class */ (function (_super) {
    __extends(Over, _super);
    function Over() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BtnReStart = null;
        return _this;
    }
    Over.prototype.start = function () {
        this.BtnReStart.node.on('click', this.onRestartGame, this);
    };
    // 此函数用于按钮点击事件
    Over.prototype.onRestartGame = function () {
        // 重新加载当前场景，即重新开始游戏
        cc.director.loadScene(cc.director.getScene().name);
    };
    __decorate([
        property(cc.Button)
    ], Over.prototype, "BtnReStart", void 0);
    Over = __decorate([
        ccclass
    ], Over);
    return Over;
}(cc.Component));
exports.default = Over;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxPdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBYUM7UUFWVyxnQkFBVSxHQUFjLElBQUksQ0FBQzs7SUFVekMsQ0FBQztJQVJHLG9CQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELGNBQWM7SUFDZCw0QkFBYSxHQUFiO1FBQ0ksbUJBQW1CO1FBQ25CLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQVREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ2lCO0lBSHBCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FheEI7SUFBRCxXQUFDO0NBYkQsQUFhQyxDQWJpQyxFQUFFLENBQUMsU0FBUyxHQWE3QztrQkFib0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcHJpdmF0ZSBCdG5SZVN0YXJ0OiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuQnRuUmVTdGFydC5ub2RlLm9uKCdjbGljaycsIHRoaXMub25SZXN0YXJ0R2FtZSwgdGhpcyk7XG4gICAgfVxuICAgIC8vIOatpOWHveaVsOeUqOS6juaMiemSrueCueWHu+S6i+S7tlxuICAgIG9uUmVzdGFydEdhbWUoKSB7XG4gICAgICAgIC8vIOmHjeaWsOWKoOi9veW9k+WJjeWcuuaZr++8jOWNs+mHjeaWsOW8gOWni+a4uOaIj1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Props.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '702fbcUHNhO3ajZZs0tRdTd', 'Props');
// script/Props.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onCollisionEnter = function (other, self) {
        if (other.node.group === 'Player') {
            this.node.destroy();
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQcm9wcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDs7SUFPQSxDQUFDO0lBTEcsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBTmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FPNUI7SUFBRCxlQUFDO0NBUEQsQUFPQyxDQVBxQyxFQUFFLENBQUMsU0FBUyxHQU9qRDtrQkFQb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09PSAnUGxheWVyJykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Start.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fefbw7p6xJMbsIi/Geqq53', 'Start');
// script/Start.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BtnStart = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.BtnStart.node.on('click', this.callback, this);
    };
    NewClass.prototype.callback = function () {
        cc.find('Canvas/UIManager/Start').active = false;
        cc.find('Canvas/UIManager/Game').active = true;
    };
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "BtnStart", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQVVDO1FBUkcsY0FBUSxHQUFjLElBQUksQ0FBQzs7SUFRL0IsQ0FBQztJQVBhLHlCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDTywyQkFBUSxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFQRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNPO0lBRlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQVU1QjtJQUFELGVBQUM7Q0FWRCxBQVVDLENBVnFDLEVBQUUsQ0FBQyxTQUFTLEdBVWpEO2tCQVZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIEJ0blN0YXJ0OiBjYy5CdXR0b24gPSBudWxsO1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuQnRuU3RhcnQubm9kZS5vbignY2xpY2snLCB0aGlzLmNhbGxiYWNrLCB0aGlzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjYWxsYmFjaygpIHtcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL1VJTWFuYWdlci9TdGFydCcpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvVUlNYW5hZ2VyL0dhbWUnKS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/EnemyBullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxFbmVteUJ1bGxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXVDQztRQWpDRyxXQUFLLEdBQVcsR0FBRyxDQUFBOztJQWlDdkIsQ0FBQztJQS9CRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoRCxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsVUFBVTtJQUNWLGtDQUFZLEdBQVosVUFBYSxTQUFrQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixPQUFPO1NBQ1Y7UUFFRCxhQUFhO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFbEQsaUJBQWlCO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEksSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBaENEO1FBREMsUUFBUTs4Q0FDVTtJQU5GLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F1Qy9CO0lBQUQsa0JBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q3dDLEVBQUUsQ0FBQyxTQUFTLEdBdUNwRDtrQkF2Q29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15QnVsbGV0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHNjckhlaWdodDogbnVtYmVyO1xuICAgIGRpcmVjdGlvbjogY2MuVmVjMjsgLy8g5pa55ZCR5ZCR6YePXG5cbiAgICBAcHJvcGVydHlcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2NySGVpZ2h0ID0gY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0O1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8g6K6+572u5a2Q5by555qE5pa55ZCRXG4gICAgc2V0RGlyZWN0aW9uKGRpcmVjdGlvbjogY2MuVmVjMikge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qC55o2u5pa55ZCR5ZCR6YeP56e75Yqo5a2Q5by5XG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuZGlyZWN0aW9uLnggKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuZGlyZWN0aW9uLnkgKiB0aGlzLnNwZWVkICogZHQ7XG5cbiAgICAgICAgLy8g5aaC5p6c5a2Q5by56LaF5Ye65bGP5bmV6IyD5Zu077yM6ZSA5q+B5a6DXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+IHRoaXMuc2NySGVpZ2h0IHx8IHRoaXMubm9kZS54IDwgLXRoaXMuc2NySGVpZ2h0IHx8IHRoaXMubm9kZS55ID4gdGhpcy5zY3JIZWlnaHQgfHwgdGhpcy5ub2RlLnkgPCAtdGhpcy5zY3JIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09PSAnUGxheWVyJykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Bullet .js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxCdWxsZXQgLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBOEJDO1FBMUJHLFdBQUssR0FBVyxHQUFHLENBQUE7O0lBMEJ2QixDQUFDO0lBeEJHLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hELEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFDRCxpQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUUsRUFBRSxVQUFVO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxFQUFFLFVBQVU7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFLEVBQUUsVUFBVTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQXhCRDtRQURDLFFBQVE7eUNBQ1U7SUFKRixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBOEIxQjtJQUFELGFBQUM7Q0E5QkQsQUE4QkMsQ0E5Qm1DLEVBQUUsQ0FBQyxTQUFTLEdBOEIvQztrQkE5Qm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHNjckhlaWdodDogbnVtYmVyO1xuXG4gICAgQHByb3BlcnR5XG4gICAgc3BlZWQ6IG51bWJlciA9IDIwMFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNjckhlaWdodCA9IGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodDtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+IHRoaXMuc2NySGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT09ICdFbmVteScpIHsgLy8g5a2Q5by555qE56Kw5pKe5YiG57uEXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09PSAnTWV0ZW9yJykgeyAvLyDlrZDlvLnnmoTnorDmkp7liIbnu4RcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgPT09ICdDb21ldCcpIHsgLy8g5a2Q5by555qE56Kw5pKe5YiG57uEXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Comet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDb21ldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFeEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4QkM7UUExQkcsV0FBSyxHQUFXLEdBQUcsQ0FBQTtRQUNYLFFBQUUsR0FBRyxDQUFDLENBQUM7O0lBeUJuQixDQUFDO0lBdkJhLHlCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNuRCxDQUFDO0lBQ1MseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDdkUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxRQUFRLEdBQUcsSUFBSSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFDRCxTQUFTO0lBQ1QsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQ3hCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUksQ0FBQyxFQUFFLElBQUksZ0JBQU0sQ0FBQyxPQUFPLENBQUM7WUFDMUIsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3ZCO1NBQ0o7SUFDTCxDQUFDO0lBekJEO1FBREMsUUFBUTsyQ0FDVTtJQUpGLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4QjVCO0lBQUQsZUFBQztDQTlCRCxBQThCQyxDQTlCcUMsRUFBRSxDQUFDLFNBQVMsR0E4QmpEO2tCQTlCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgc2NySGVpZ2h0OiBudW1iZXI7XG5cbiAgICBAcHJvcGVydHlcbiAgICBzcGVlZDogbnVtYmVyID0gMjAwXG4gICAgcHJpdmF0ZSBocCA9IDM7XG4gICAgcHJpdmF0ZSB0YXJnZXRQb3NpdGlvbjogY2MuVmVjMztcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNjckhlaWdodCA9IGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLndpZHRoO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbiA9IGNjLmZpbmQoJ0NhbnZhcy9VSU1hbmFnZXIvR2FtZS9QbGF5ZXInKS5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLnRhcmdldFBvc2l0aW9uLngtdGhpcy5ub2RlLng7XG4gICAgICAgIGlmIChkaXN0YW5jZSA8IDEzMDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiBkdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2RlLnggPCAtMTAwMCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDlpITnkIbnorDmkp7kuovku7ZcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09PSAnQnVsbGV0Jykge1xuICAgICAgICAgICAgdGhpcy5ocCAtPSBQbGF5ZXIuYXR0Y2tlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLmhwIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BackGround.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4c31ItZD1HQr0RAyKo597h', 'BackGround');
// script/BackGround.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMove = true;
        _this.speed = 50;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.scrWidth = cc.view.getCanvasSize().width;
        cc.director.getCollisionManager().enabled = true;
    };
    NewClass.prototype.update = function (dt) {
        if (this.isMove)
            this.move();
        if (this.node.width < this.scrWidth) {
            this.isMove = false;
        }
        // console.log(this.node.width);
        // console.log(this.scrWidth);
    };
    NewClass.prototype.move = function () {
        this.node.x -= this.speed * cc.director.getDeltaTime();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxCYWNrR3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUJDO1FBbkJHLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxXQUFLLEdBQVcsRUFBRSxDQUFDOztJQWlCdkIsQ0FBQztJQWZhLHlCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUM5QyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBQ1MseUJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUNELGdDQUFnQztRQUNoQyw4QkFBOEI7SUFDbEMsQ0FBQztJQUNPLHVCQUFJLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQWhCRDtRQURDLFFBQVE7MkNBQ1U7SUFKRixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUI1QjtJQUFELGVBQUM7Q0FyQkQsQUFxQkMsQ0FyQnFDLEVBQUUsQ0FBQyxTQUFTLEdBcUJqRDtrQkFyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHNjcldpZHRoOiBudW1iZXI7XG4gICAgaXNNb3ZlID0gdHJ1ZTtcbiAgICBAcHJvcGVydHlcbiAgICBzcGVlZDogbnVtYmVyID0gNTA7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNjcldpZHRoID0gY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGg7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzTW92ZSkgdGhpcy5tb3ZlKCk7XG4gICAgICAgIGlmICh0aGlzLm5vZGUud2lkdGggPCB0aGlzLnNjcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS53aWR0aCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2NyV2lkdGgpO1xuICAgIH1cbiAgICBwcml2YXRlIG1vdmUoKSB7XG4gICAgICAgIHRoaXMubm9kZS54IC09IHRoaXMuc3BlZWQgKiBjYy5kaXJlY3Rvci5nZXREZWx0YVRpbWUoKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
