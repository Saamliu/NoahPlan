import Player from "./Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    private hp = 3;
    // 处理碰撞事件
    onCollisionEnter(other, self) {
        if (other.node.group === 'Bullet') {
            this.hp -= Player.attcked;
            if (this.hp <= 0) {
                this.node.destroy();
            }
        }
    }
}
