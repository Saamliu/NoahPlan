const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onCollisionEnter(other, self) {
        if (other.node.group === 'Player') {
            this.node.destroy();
        }
    }
}
