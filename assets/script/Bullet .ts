
const { ccclass, property } = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {
    scrHeight: number;

    @property
    speed: number = 200

    onLoad() {
        this.scrHeight = cc.view.getCanvasSize().height;
        cc.director.getCollisionManager().enabled = true;
    }

    update(dt) {
        this.node.x += this.speed * dt;
        if (this.node.x > this.scrHeight) {
            this.node.removeFromParent(true);
            this.destroy();
        }
    }
    onCollisionEnter(other, self) {
        if (other.node.group === 'Enemy') { // 子弹的碰撞分组
            this.node.destroy();
        }
        if (other.node.group === 'Meteor') { // 子弹的碰撞分组
            this.node.destroy();
        }
        if (other.node.group === 'Comet') { // 子弹的碰撞分组
            this.node.destroy();
        }
    }

}
