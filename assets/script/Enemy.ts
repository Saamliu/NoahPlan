import Player from "./Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Enemy extends cc.Component {

    scrWidth: number;
    scrHeight: number;
    isDead: boolean = false;

    @property
    private hp: number = 3;
    private targetPosition: cc.Vec3;

    @property(cc.Prefab)
    NdBullet: cc.Prefab = null;
    @property
    speed: number = 180;
    @property
    time: number = 2;


    onLoad() {
        this.scrWidth = cc.view.getCanvasSize().width;
        this.scrHeight = cc.view.getCanvasSize().height;
        cc.director.getCollisionManager().enabled = true;
    }

    start() {
        // this.node.y = this.scrHeight + this.node.height;
        // this.node.x = this.node.width / 2 + Math.random() * (this.scrWidth - this.node.width);
    }

    update(dt) {
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
    }

    // 处理碰撞事件layer
    onCollisionEnter(other, self) {
        if (other.node.group === 'Player') {
            this.node.destroy();
        }
        if (other.node.group === 'Bullet') {
            this.hp -= Player.attcked; // 根据需要调整伤害值
            if (this.hp <= 0) {
                // 敌人已经死亡，可以在这里添加敌人死亡的逻辑
                this.node.destroy();
            }
        }
    }

    private shoot() {
        if (this.isDead) {
            return;
        }
    
        // 获取玩家节点
        const playerNode = cc.find('Canvas/UIManager/Game/Player');
        if (!playerNode) {
            return; // 玩家节点不存在，不发射子弹
        }
    
        // 计算玩家相对于敌人的位置向量
        const playerPosition = playerNode.position;
        const enemyPosition = this.node.position;
        const direction = playerPosition.sub(enemyPosition);
    
        // 计算敌人和玩家之间的角度
        const angle = direction.signAngle(cc.Vec2.RIGHT);
    
        // 只有当角度合理时才发射子弹
        const maxAngle = Math.PI / 2 + Math.PI / 12; //165度内发射
        if (Math.abs(angle) > maxAngle) {
            // 实例化子弹预制体
            const bulletNode = cc.instantiate(this.NdBullet);
    
            // 设置子弹的位置
            bulletNode.position = this.node.position;
    
            // 设置子弹的方向，可以通过旋转子弹节点或设置速度来实现
            const bulletScript = bulletNode.getComponent('EnemyBullet'); 
            if (bulletScript) {
                bulletScript.setDirection(direction.normalize()); // 在子弹组件中设置归一化的方向
            }
    
            // 将子弹添加到场景中
            this.node.parent.addChild(bulletNode);
        }
    }
    
    
    
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
