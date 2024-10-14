import Enemy from "./Enemy";

const { ccclass, property } = cc._decorator;



const MAXHP = 20
@ccclass
export default class Player extends cc.Component {

    @property(cc.ProgressBar)
    private progress: cc.ProgressBar = null;
    @property(cc.Node)
    private player: cc.Node = null;
    @property(cc.Prefab)
    private bulletPrefab: cc.Prefab = null;
    @property
    private moveSpeed = 300;
    @property
    private hp = 20;

    public static attcked = 1;

    up: boolean = false;
    down: boolean = false;
    left: boolean = false;
    right: boolean = false;

    speedSave = this.moveSpeed;


    protected onLoad(): void {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        cc.director.getCollisionManager().enabled = true;
        this.progress.progress = this.hp / MAXHP;
    }
    protected onDestroy(): void {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
    protected update(dt: number): void {
        this.move();
    }
    move() {
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
    }
    private onKeyDown(event): void {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                // 左移
                this.left = true
                break;
            case cc.macro.KEY.d:
                // 右移
                this.right = true
                break;
            case cc.macro.KEY.w:
                // 上移
                this.up = true
                break;
            case cc.macro.KEY.s:
                // 下移
                this.down = true;
                break;
            case cc.macro.KEY.k:
                this.spawnBullet();
                break;
        }
    }
    private onKeyUp(event): void {
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
    }
    private spawnBullet() {
        // 实例化子弹预制体
        const bulletNode = cc.instantiate(this.bulletPrefab);

        // 设置子弹的位置，这里可以根据需要设置为角色的位置
        bulletNode.position = this.player.position;

        // 将子弹添加到场景中
        this.node.parent.addChild(bulletNode);
    }

    // 处理碰撞事件
    onCollisionEnter(other, self) {
        if (other.node.group === 'Enemy') { // 子弹的碰撞分组
            this.hp -= 3;
            this.progress.progress = this.hp / MAXHP;
            if (this.hp <= 0) {
                this.node.destroy();
                cc.find('Canvas/UIManager/Game').active = false;
                cc.find('Canvas/UIManager/Over').active = true;
            }
        } else if (other.node.group === 'End') {
            cc.find('Canvas/UIManager/Game').active = false;
            cc.find('Canvas/UIManager/End').active = true;
        } else if (other.node.group === 'Block') {
            cc.find('Canvas/UIManager/Game').active = false;
            cc.find('Canvas/UIManager/Over').active = true;
        } else if (other.node.group === 'EnemyBullet') {
            this.hp -= 1;
            console.log(this.hp);
            this.progress.progress = this.hp / MAXHP;
            if (this.hp <= 0) {
                this.node.destroy();
                cc.find('Canvas/UIManager/Game').active = false;
                cc.find('Canvas/UIManager/Over').active = true;
            }
        } else if (other.node.group === 'Meteor') {
            cc.find('Canvas/UIManager/Game').active = false;
            cc.find('Canvas/UIManager/Over').active = true;
        }else if (other.node.group === 'Comet') {
            cc.find('Canvas/UIManager/Game').active = false;
            cc.find('Canvas/UIManager/Over').active = true;
        }else if (other.node.group === 'Item') {
            const arr = [0, 1, 2, 3]//分别代表生命，子弹威力增加，加速,黑洞
            const randomNum = this.getRandomNumber(0, 2);
            switch (randomNum) {
                case 0:
                    if (this.hp >= 20) {
                        this.hp = 20
                    } else {
                        this.hp += 5;
                    }
                    this.progress.progress = this.hp / MAXHP;
                    console.log('加血')
                    break;
                case 1:
                    Player.attcked += 1;
                    console.log('加攻击')
                    break;
                case 2:
                    this.moveSpeed *= 1.25;
                    this.speedSave = this.moveSpeed;
                    console.log('加速度')
                    break;
            }
        } else if (other.node.group === 'Black') {
            this.moveSpeed *= 0.4;
            console.log('黑洞');
        }
    }
    onCollisionExit(other, self) {
        this.moveSpeed = this.speedSave;
    }
    getRandomNumber(min: number, max: number): number {
        // 生成一个从0到1之间的随机小数
        const randomFraction = Math.random();

        // 将随机小数映射到指定范围内
        const randomNumber = min + (randomFraction * (max - min + 1));

        return Math.floor(randomNumber); 
    }
}
