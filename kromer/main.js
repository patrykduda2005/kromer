var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


function preload() {
    this.load.image('back','assets/sky.png');
    this.load.image('kromka', 'assets/kromka.png');
    //this.load.image('ground', 'assets/platforma.png');
}

function create() {
    //var r1 = Phaser.add.rectangle(200, 150, 148, 148, 0x6666ff);
    
    this.add.image(640, 1080, 'back').setScale(1.6, 3.6);

    player = this.physics.add.image(100, 2000, 'kromka');
    player.setBounce(0.2);
    player.body.setMaxVelocity(300, 1000);

    /*platform = this.physics.add.staticGroup();
    platform.create(640, 2128, 'ground').setScale(1280, 64).refreshBody();*/
    //platform.create(960, 2000, 'ground');
    //platform.create(960,);
    //platform.create(320, 1900, 'ground');
    //var platform = this.add.rectangle(640, 2000,100, 100 0xffffff);
    
    //this.physics.add.existing(r1);

    platform = this.physics.add.staticGroup();
    //eval(platforma(640, 2128, 1280, 64));
    platforma(640, 2128, 1280, 64, this);
    platforma(960, 2000,400,32,this);
    
    //platform.add(this.add.rectangle(640, 2128, 1280, 64, 0x21572f));
    //platform.add(this.add.rectangle(0x21572f));
    


    cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(player, platform);
    player.setCollideWorldBounds(true);

    debugText = this.add.text(16, 1900, '0', {fontSize: '32px', fill: '#000'});

    //camera i bounds
    this.physics.world.setBounds(0, 0, 1280, 2160);
    this.cameras.main.setSize(1280,720);
    this.cameras.main.setBounds(0,0,1280,2160);
    this.cameras.main.startFollow(player);

    /*let xd = this.add.rectangle(640, 2000, 148, 148, 0xff0000);
    platform = this.physics.add.staticGroup(xd);*/
}

function update() {
    playerMovement();
    debugText.setText(player.body.y);


}

function playerMovement() {
    if (cursors.right.isDown) {
        player.flipX = false;
        player.setAccelerationX(400);
        if (player.body.velocity.x < 0) player.setAccelerationX(600);
        
    } else if (cursors.left.isDown) {
        player.flipX = true;
        player.setAccelerationX(-400);
        if (player.body.velocity.x > 0) player.setAccelerationX(-600);
        
    } else {
        if (player.body.velocity.x > 0) player.setAccelerationX(-600);
        if (player.body.velocity.x < 0) player.setAccelerationX(600); 
        if (player.body.velocity.x > -10 && player.body.velocity.x < 10) {
            player.setAccelerationX(0);
            player.setVelocityX(0);
        }
    }

    if (player.body.touching.down && cursors.up.isDown) {
        player.setVelocityY(-300); //112 jednostek moze wskoczyc
    }
}

function platforma(x, y, a, b, context) {
    //return "platform.add(this.add.rectangle("+x+","+y+","+a+","+b+",0x21572f));";
    platform.add(context.add.rectangle(x, y, a, b, 0x21572f));
}