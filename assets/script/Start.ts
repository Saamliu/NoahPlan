const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Button)
    BtnStart: cc.Button = null;
    protected onLoad(): void {
        this.BtnStart.node.on('click', this.callback, this);
    }
    private callback() {
        cc.find('Canvas/UIManager/Start').active = false;
        cc.find('Canvas/UIManager/Game').active = true;
    }
}
