const { ccclass, property } = cc._decorator;

@ccclass
export default class Over extends cc.Component {

    @property(cc.Button)
    private BtnReStart: cc.Button = null;

    start() {
        this.BtnReStart.node.on('click', this.onRestartGame, this);
    }
    // 此函数用于按钮点击事件
    onRestartGame() {
        // 重新加载当前场景，即重新开始游戏
        cc.director.loadScene(cc.director.getScene().name);
    }
}
