// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyBullet extends cc.Component {

    scrHeight: number;
    direction: cc.Vec2; // 方向向量

    @property
    speed: number = 200

    onLoad() {
        this.scrHeight = cc.view.getCanvasSize().height;
        cc.director.getCollisionManager().enabled = true;
    }

    // 设置子弹的方向
    setDirection(direction: cc.Vec2) {
        this.direction = direction;
    }

    update(dt) {
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
    }

    onCollisionEnter(other, self) {
        if (other.node.group === 'Player') {
            this.node.destroy();
        }
    }
}

