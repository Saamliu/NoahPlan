const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    scrWidth: number;
    isMove = true;
    @property
    speed: number = 50;

    protected onLoad(): void {
        this.scrWidth = cc.view.getCanvasSize().width;
        cc.director.getCollisionManager().enabled = true;
    }
    protected update(dt: number): void {
        if (this.isMove) this.move();
        if (this.node.width < this.scrWidth) {
            this.isMove = false;
        }
        // console.log(this.node.width);
        // console.log(this.scrWidth);
    }
    private move() {
        this.node.x -= this.speed * cc.director.getDeltaTime();
    }
}
