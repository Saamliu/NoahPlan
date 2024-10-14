
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxFbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFeEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFnSEM7UUE1R0csWUFBTSxHQUFZLEtBQUssQ0FBQztRQUdoQixRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBSXZCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUVwQixVQUFJLEdBQVcsQ0FBQyxDQUFDOztRQXVGakIsa0NBQWtDO1FBQ2xDLDRDQUE0QztRQUM1QyxzQkFBc0I7UUFDdEIsNENBQTRDO1FBQzVDLG1EQUFtRDtRQUNuRCx5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLG9DQUFvQztRQUNwQyxRQUFRO1FBQ1IsSUFBSTtJQUNSLENBQUM7SUE5Rkcsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoRCxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQscUJBQUssR0FBTDtRQUNJLG1EQUFtRDtRQUNuRCx5RkFBeUY7SUFDN0YsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRUQsY0FBYztJQUNkLGdDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEVBQUUsSUFBSSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVk7WUFDdkMsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDZCx3QkFBd0I7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkI7U0FDSjtJQUNMLENBQUM7SUFFTyxxQkFBSyxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsT0FBTztTQUNWO1FBRUQsU0FBUztRQUNULElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2IsT0FBTyxDQUFDLGdCQUFnQjtTQUMzQjtRQUVELGlCQUFpQjtRQUNqQixJQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pDLElBQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFcEQsZUFBZTtRQUNmLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqRCxnQkFBZ0I7UUFDaEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO1FBQ3RELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLEVBQUU7WUFDNUIsV0FBVztZQUNYLElBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWpELFVBQVU7WUFDVixVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBRXpDLDZCQUE2QjtZQUM3QixJQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVELElBQUksWUFBWSxFQUFFO2dCQUNkLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7YUFDdEU7WUFFRCxZQUFZO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQTNGRDtRQURDLFFBQVE7cUNBQ2M7SUFJdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDTztJQUUzQjtRQURDLFFBQVE7d0NBQ1c7SUFFcEI7UUFEQyxRQUFRO3VDQUNRO0lBZkEsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWdIekI7SUFBRCxZQUFDO0NBaEhELEFBZ0hDLENBaEhrQyxFQUFFLENBQUMsU0FBUyxHQWdIOUM7a0JBaEhvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHNjcldpZHRoOiBudW1iZXI7XG4gICAgc2NySGVpZ2h0OiBudW1iZXI7XG4gICAgaXNEZWFkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIGhwOiBudW1iZXIgPSAzO1xuICAgIHByaXZhdGUgdGFyZ2V0UG9zaXRpb246IGNjLlZlYzM7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIE5kQnVsbGV0OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIHNwZWVkOiBudW1iZXIgPSAxODA7XG4gICAgQHByb3BlcnR5XG4gICAgdGltZTogbnVtYmVyID0gMjtcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNjcldpZHRoID0gY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGg7XG4gICAgICAgIHRoaXMuc2NySGVpZ2h0ID0gY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0O1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS55ID0gdGhpcy5zY3JIZWlnaHQgKyB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICAvLyB0aGlzLm5vZGUueCA9IHRoaXMubm9kZS53aWR0aCAvIDIgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMuc2NyV2lkdGggLSB0aGlzLm5vZGUud2lkdGgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aW1lIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gMjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy50aW1lIC09IGR0O1xuICAgICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA8IC0xMDAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5aSE55CG56Kw5pKe5LqL5Lu2bGF5ZXJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLmdyb3VwID09PSAnUGxheWVyJykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXIubm9kZS5ncm91cCA9PT0gJ0J1bGxldCcpIHtcbiAgICAgICAgICAgIHRoaXMuaHAgLT0gUGxheWVyLmF0dGNrZWQ7IC8vIOagueaNrumcgOimgeiwg+aVtOS8pOWus+WAvFxuICAgICAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIOaVjOS6uuW3sue7j+atu+S6oe+8jOWPr+S7peWcqOi/memHjOa3u+WKoOaVjOS6uuatu+S6oeeahOmAu+i+kVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob290KCkge1xuICAgICAgICBpZiAodGhpcy5pc0RlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyDojrflj5bnjqnlrrboioLngrlcbiAgICAgICAgY29uc3QgcGxheWVyTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9VSU1hbmFnZXIvR2FtZS9QbGF5ZXInKTtcbiAgICAgICAgaWYgKCFwbGF5ZXJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIOeOqeWutuiKgueCueS4jeWtmOWcqO+8jOS4jeWPkeWwhOWtkOW8uVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIOiuoeeul+eOqeWutuebuOWvueS6juaVjOS6uueahOS9jee9ruWQkemHj1xuICAgICAgICBjb25zdCBwbGF5ZXJQb3NpdGlvbiA9IHBsYXllck5vZGUucG9zaXRpb247XG4gICAgICAgIGNvbnN0IGVuZW15UG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBsYXllclBvc2l0aW9uLnN1YihlbmVteVBvc2l0aW9uKTtcbiAgICBcbiAgICAgICAgLy8g6K6h566X5pWM5Lq65ZKM546p5a625LmL6Ze055qE6KeS5bqmXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gZGlyZWN0aW9uLnNpZ25BbmdsZShjYy5WZWMyLlJJR0hUKTtcbiAgICBcbiAgICAgICAgLy8g5Y+q5pyJ5b2T6KeS5bqm5ZCI55CG5pe25omN5Y+R5bCE5a2Q5by5XG4gICAgICAgIGNvbnN0IG1heEFuZ2xlID0gTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gMTI7IC8vMTY15bqm5YaF5Y+R5bCEXG4gICAgICAgIGlmIChNYXRoLmFicyhhbmdsZSkgPiBtYXhBbmdsZSkge1xuICAgICAgICAgICAgLy8g5a6e5L6L5YyW5a2Q5by56aKE5Yi25L2TXG4gICAgICAgICAgICBjb25zdCBidWxsZXROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5OZEJ1bGxldCk7XG4gICAgXG4gICAgICAgICAgICAvLyDorr7nva7lrZDlvLnnmoTkvY3nva5cbiAgICAgICAgICAgIGJ1bGxldE5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgXG4gICAgICAgICAgICAvLyDorr7nva7lrZDlvLnnmoTmlrnlkJHvvIzlj6/ku6XpgJrov4fml4vovazlrZDlvLnoioLngrnmiJborr7nva7pgJ/luqbmnaXlrp7njrBcbiAgICAgICAgICAgIGNvbnN0IGJ1bGxldFNjcmlwdCA9IGJ1bGxldE5vZGUuZ2V0Q29tcG9uZW50KCdFbmVteUJ1bGxldCcpOyBcbiAgICAgICAgICAgIGlmIChidWxsZXRTY3JpcHQpIHtcbiAgICAgICAgICAgICAgICBidWxsZXRTY3JpcHQuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbi5ub3JtYWxpemUoKSk7IC8vIOWcqOWtkOW8uee7hOS7tuS4reiuvue9ruW9kuS4gOWMlueahOaWueWQkVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8g5bCG5a2Q5by55re75Yqg5Yiw5Zy65pmv5LitXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGJ1bGxldE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIC8vIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAvLyAgICAgaWYgKG90aGVyLnRhZyA9PSA5ICYmICF0aGlzLmlzRGVhZCkge1xuICAgIC8vICAgICAgICAgdGhpcy5kaWUoKTtcbiAgICAvLyAgICAgICAgIG90aGVyLmdldENvbXBvbmVudChCdWxsZXQpLmRpZSgpO1xuICAgIC8vICAgICB9IGVsc2UgaWYgKG90aGVyLnRhZyA9PSAwICYmICF0aGlzLmlzRGVhZCkge1xuICAgIC8vICAgICAgICAgY2MuZ2FtZS5wYXVzZTtcbiAgICAvLyAgICAgICAgIGFsZXJ0KFwiZ2FtZW92ZXJcIik7XG4gICAgLy8gICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWM7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG4iXX0=