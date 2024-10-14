import Player from "./Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    scrHeight: number;

    @property
    speed: number = 200
    private hp = 3;
    private targetPosition: cc.Vec3;
    protected onLoad(): void {
        this.scrHeight = cc.view.getCanvasSize().width;
    }
    protected update(dt: number): void {
        this.targetPosition = cc.find('Canvas/UIManager/Game/Player').position;
        const distance = this.targetPosition.x-this.node.x;
        if (distance < 1300) {
            this.node.x -= this.speed * dt;
        }
        if (this.node.x < -1000) {
            this.node.removeFromParent(true);
            this.destroy();
        }
    }
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