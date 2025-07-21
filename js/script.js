<script>
// 新增星火相关代码

const Fire = {
  // 定义火属性
  color: COLOR.White,
  drawWidth: 0.5,
  airDrag: 1.2, // 火的阻力系数
  // 其他必要的属性和方法
}

Fire.add = function(x, y) {
  const instance = new FireParticle(x, y);
  return instance;
};

class FireParticle extends Star {
  constructor(x, y) {
    super(x, y, COLOR.White);
    this.color = COLOR.White;
    // 设置火的移动速度
    this.speedX = (Math.random() - 0.5) * 2;
    this.speedY = (Math.random() - 0.5) * 2;
    
    // 设置火焰熄灭的时间
    this.life = Math.floor(Math.random() * 10);
  
    this.prevX = x;
    this.prevY = y;
  }
  
  add(x, y, speed, life) {
    super.add(x, y, speed, life);
    return instance;
  }
}

function newBurst(x, y) {
  const interval = setInterval(() => {
    const firePart = new Fire();
    firePart.x = x + (Math.random() - 0.5) * 8;
    firePart.y = y + (Math.random() - 0.5) * 8;
    
    // 在火存在时间内添加星星
    setTimeout(() => {
      createParticles(firePart.position, 10);
    }, firePart.life);

    clearInterval(interval);
  }, 200);
}

function createParticles(position, count) {
  for (let i = 0; i < count; i++) {
    const fire = new FireParticle(position.x + Math.random() * 4 - 2,
                                position.y + Math.random() * 4 - 2);
    fire.color = COLOR.White;
  }
}

class BurstFlash extends Burst {
  supportNewBurst: boolean = true;

  add(x, y, radius) {
    if (this.supportNewBurst) {
      newBurst(x, y);
    } else {
      super.add(x, y, radius);
    }
  }
}

init();
</script>
