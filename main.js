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
    this.load.image('guard', 'assets/guard.png');
    this.load.audio('obiad', 'assets/obiad.mp3');
    this.load.image('speaker', 'assets/speaker.png');
    this.load.audio('disconnect', 'assets/dc.mp3');
    this.load.audio('connect', 'assets/connect.mp3');
    this.load.audio('death', 'assets/death.mp3');
    this.load.audio('fart', 'assets/fart.mp3');
    this.load.image('snipe', 'assets/snipe.png');
    this.load.image('wind', 'assets/wind.png');
    this.load.image('zilean', 'assets/zilean.png');
    this.load.image('hak', 'assets/hak.png');
    this.load.image('chlebak', 'assets/checkpoint.png');
    this.load.image('chlebakOtwarty', 'assets/checkpointOpen.png');
    this.load.audio('reload', 'assets/reload.mp3');
    this.load.image('lina', 'assets/lina.png');
    this.load.image('boss', 'assets/boss.png');
}

var gameSave = {
    afkCharges:10,
    playerX:100,
    playerY:2000
}

function create() {
    
    this.add.image(640, 1080, 'back').setScale(1.6, 3.6);

    this.add.image(520, 1355, 'hak').setScale(0.5, 0.35);



    //path1 = new Phaser.Curves.Path(50,1870).lineTo(830,1870);

    //guard = this.add.follower(path1, 50,1870, 'guard');

    /*this.physics.add.existing(guard);
    console.log(guard);
    guard.body.setAllowGravity(false);*/
    checkpoints = this.physics.add.staticGroup();
    checkpoints.create(200, 1065, 'chlebak');
    //checkpoints.create(300, 1562, 'chlebak');
    /*checkpoint1 = checkpoints.create(50, 2070, 'chlebak');
    checkpoint2 = checkpoints.create(300, 1520, 'chlebak');*/

    player = this.physics.add.image(gameSave.playerX, gameSave.playerY, 'kromka'); // 100, 2000
    player.setBounce(0.2);
    player.body.setMaxVelocity(300, 1000);

    boss = this.physics.add.image(100, 100, 'boss').setBounce(1).setVelocityX(300).setVelocityY(300).setGravityY(0);


    zilean = this.physics.add.staticImage(1100, 950, 'zilean');

    guards = this.physics.add.group();

    guard1 = guards.create(50, 1870, 'guard');
    guard2 = guards.create(960, 1666, 'guard');
    guard3 = guards.create(20, 1100, 'guard');
    guard4 = guards.create(20, 620, 'guard');
    guard5 = guards.create(500, 700, 'guard');
    guard6 = guards.create(600, 700, 'guard').flipX = true;
    guard7 = guards.create(650, 700, 'guard');
    guard8 = guards.create(750, 700, 'guard').flipX = true;
    guard9 = guards.create(800, 700, 'guard');
    guard10 = guards.create(900, 700, 'guard').flipX = true;
    guard11 = guards.create(950, 700, 'guard');
    guard12 = guards.create(1050, 700, 'guard').flipX = true;
    guard13 = guards.create(300, 715, 'guard');
    //backAndForth(guard1,this);



    speakers = this.physics.add.staticGroup();

    speakers1 = speakers.create(15,1630,'speaker');
    speakers1.flipX = true;
    speakers1.angle = 45;

    speakers2 = speakers.create(520, 1440, 'speaker');
    speakers2.angle = -90;

    speakers3 = speakers.create(670, 1567, 'speaker');
    speakers3.angle = -45;
    speakers3.flipX = true;

    speakers4 = speakers.create(800, 430, 'speaker');
    speakers4.angle = -90;

    speakers5 = speakers.create(180, 625, 'speaker');
    speakers5.flipX = true;
    speakers5.angle = -45;
    //speakers3 = speakers.create(120, 1270, 'speaker');

    winds = this.physics.add.group();
    

    //winds.create(100, 1630, 'wind').setScale(0.5).refreshBody().body.setVelocityX(3000);
    
    contextHere = this;
    snipes = this.physics.add.staticGroup();

    snipe1 = snipes.create(630, 1300, 'snipe').flipX = true;
    snipe2 = snipes.create(700, 1150, 'snipe');
    snipe3 = snipes.create(100, 950,'snipe').flipX = true;
    snipe4 = snipes.create(100, 850, 'snipe').flipX = true;
    snipe5 = snipes.create(1050, 525, 'snipe');

    zones = this.physics.add.staticGroup();
    zonesTextures = this.physics.add.staticGroup();
    
    reloadSnipes();
    
    



    
    /*platform = this.physics.add.staticGroup();
    platform.create(640, 2128, 'ground').setScale(1280, 64).refreshBody();*/
    //platform.create(960, 2000, 'ground');
    //platform.create(960,);
    //platform.create(320, 1900, 'ground');
    //var platform = this.add.rectangle(640, 2000,100, 100 0xffffff);
    
    //this.physics.add.existing(r1);

    platform = this.physics.add.staticGroup();
    platform.add(contextHere.add.rectangle(100, 650, 200, 10, 0xffffff));
    //eval(platforma(640, 2128, 1280, 64));
    platforma(640, 2128, 1280, 64, this);

    platforma(960, 2000,400,32,this);

    platforma(1280, 1904, 400,32,this);
    platforma(360,1904,1000,32,this);
    
    platforma(0, 1800, 20,32,this);
    
    platforma(750, 1700,1280,32,this);

    platforma(530, 1600, 1280, 32, this);

    platforma(640, 1474, 32, 224, this);
    //platforma(700, 1410, 100, 32, this);

    platforma(1200, 1488, 200, 32, this);
    platforma(1200, 1458, 100, 32, this);

    platforma(800, 1280, 600, 16, this);

    platforma(620, 1360, 100, 100, this);
    platforma(520, 1300, 100, 50, this);

    platforma(100, 1500, 100, 32, this);
    platforma(10, 1400, 100, 32, this);
    platforma(100, 1300, 100, 32, this);
    platforma(10, 1200, 100, 32,this);

    platforma(700, 1100, 1280, 32,this);

    platforma(700, 850, 100,16,this);

    platforma(750, 950, 10, 200,this);

    

    platforma(540, 750, 1280, 30, this);
    platforma(1100, 600, 32, 270, this);

    platforma(1200, 650, 100, 32, this);
    platforma(1200, 550, 100, 32, this);

    platforma(1050, 500, 100, 32, this); 

    platforma(640, 450, 32, 100, this);

    platforma(0, 470, 20, 32 ,this);

    //ostatetium
    platforma(700, 400, 1280, 32, this);
    
    
    //platform.add(this.add.rectangle(640, 2128, 1280, 64, 0x21572f));
    //platform.add(this.add.rectangle(0x21572f));
    
    //target = new Phaser.Math.Vector2(960, 1600);


    var cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(player, platform);
    this.physics.add.collider(guards, platform);
    this.physics.add.collider(winds,platform);
    this.physics.add.collider(boss, platform);
    this.physics.add.overlap(player, guards, death, null, this);
    this.physics.add.overlap(player, speakers, obiad, null, this);
    this.physics.add.overlap(player, winds, death, null, this);
    this.physics.add.overlap(player, zones, yeet, null, this);
    this.physics.add.overlap(winds, guards, guardDodge,null, this);
    this.physics.add.overlap(player, boss, death, null, this);
    this.physics.add.overlap(zilean,player, function() {
        player.setVelocityY(-300);
    }, null, this);
    this.physics.add.overlap(player, checkpoints, checkpointAquaire, null, this);
    this.physics.add.overlap(player, zonesTextures, function (player, lina) {
        if (cursors.up.isDown) {
		player.setVelocityY(-300);
	}
	    lina.destroy();
    }, null, this);
    player.setCollideWorldBounds(true);
    boss.setCollideWorldBounds(true);
    guard1.setCollideWorldBounds(true);

    afkChargesText = this.add.text(16, 1900, 'Afk Charges: ' + afkCharges, {fontSize: '32px', fill: '#000'});
    //debugText = this.add.text(200, 1400, 'hmm');

    //camera i bounds
    this.physics.world.setBounds(0, 0, 1280, 2160);
    this.cameras.main.setSize(1280,720);
    this.cameras.main.setBounds(0,0,1280,2160);
    this.cameras.main.startFollow(player);

    //guard.body.setAllowGravity(false);
    //this.physics.accelerateToObject(guard, target);
    /*guard.startFollow({
        positionOnPath: true,
        duration:3000,
        yoyo:true,
        repeat: -1,
        onYoyo: guardFlip,
        onYoyoParams: [guard]
    });*/
    /*let xd = this.add.rectangle(640, 2000, 148, 148, 0xff0000);
    platform = this.physics.add.staticGroup(xd);*/
    
}
var gameOver = false;
var obiadTrigger = 0;
var afkCd = false;
var afkCharges = 10;


function update() {
    if (gameOver == true) {
        return;
    }

    if (obiadTrigger != 0) {
        obiadTrigger--;
        
    } /*else {
        guards.children.iterate(function (child) {
        child.alpha = 1;
        child.body.enable = true;
        
    });
    }*/

    //this.physics.accelerateTo(guard1, 440,1870);
    hud(this);
    backAndForth(this);
    if (afkCd == false && afkCharges > 0) afk();
    playerMovement();
    
    winds.children.iterate(function (child) {
    	if(Phaser.Math.Distance.Between(player.x, player.y, child.x, child.y) < 350) {
            //debugText.setText('Bel: ' + child.body.velocity.x);
    		if (child.body.velocity.x < -2500) {
				child.setVelocityX(-2500);
			} else if (child.body.velocity.x > 2500) {
				child.setVelocityX(2500);
			}
    	}
    });


    
    //if (Phaser.Math.Distance.Between(guard.x, guard.y, target.x, target.y) < 4) guard.body.reset(target.x,target.y);


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

    if ((player.body.touching.down || player.body.embedded) && cursors.up.isDown) {
        player.setVelocityY(-300); //112 jednostek moze wskoczyc
    }
}

function zaklucanie() {

}

function afk() {
    if (cursors.down.isDown) {
        player.alpha = 0.25;
        player.body.enable = false;
        afkCd = true;
        afkCharges--;
        game.sound.play('disconnect');
        setTimeout(function() {
            player.alpha = 1;
            player.body.enable = true;
            game.sound.play('connect');
            setTimeout(function() {
                afkCd = false;
            },5000);
        },1000);
    } /*else {
        player.alpha = 1;
        player.body.enable = true;
    }*/
}

function platforma(x, y, a, b, context) {
    //return "platform.add(this.add.rectangle("+x+","+y+","+a+","+b+",0x21572f));";
    platform.add(context.add.rectangle(x, y, a, b, 0x21572f));
}

function death(player, guard) {
    document.getElementById('tekst').innerHTML = "GAME OVER";
    player.body.enable = false;
    player.setTint(0xff0000);
    game.sound.play('death');
    setTimeout(function() {
        //contextHere.physics.pause();
       // gameOver = true;
       afkCharges = gameSave.afkCharges;
       document.getElementById('tekst').innerHTML = "Oto moja gra, która jest świetna";
        contextHere.registry.destroy();
        contextHere.events.off();
        contextHere.scene.restart();
    },2000);
    /*setTimeout(function() {
        checkpoints.children.iterate(function(child) {
            if (child.texture = 'chlebakOtwarty') {
                contextHere.physics.resume();
                player.clearTint();
                player.body.reset(child.x, child.y);
            }
        });
    }, 5000);*/
    
}

function backAndForth(context) {
    if (Phaser.Math.Distance.Between(guard1.x, guard1.y, 50, 1870) < 10) {
        if (guard1.body.velocity.x < 0) guard1.setVelocityX(300);
        context.physics.accelerateTo(guard1, 830, 1870,300,1000);
        guard1.flipX = false;
    } else if (Phaser.Math.Distance.Between(guard1.x, guard1.y, 830, 1870) < 10) {
        if (guard1.body.velocity.x > 0) guard1.setVelocityX(-300);
        context.physics.accelerateTo(guard1,50,1870,300,1000);
        guard1.flipX = true;
    }

    if (Phaser.Math.Distance.Between(guard2.x, guard2.y, 250, 1666) < 10) {
        context.physics.moveTo(guard2, 960, 1666, 500);
        guard2.flipX = false;
    } else if (Phaser.Math.Distance.Between(guard2.x, guard2.y, 960, 1666) < 10) {
        context.physics.moveTo(guard2, 250, 1666, 500);
        guard2.flipX = true;
    }

    if (Phaser.Math.Distance.Between(guard13.x, guard13.y, 300, 715) < 10) {
        if (guard13.body.velocity.x < 0) guard13.setVelocityX(300);
        context.physics.accelerateTo(guard13, 1050, 715,300,1000);
        guard13.flipX = false;
    } else if (Phaser.Math.Distance.Between(guard13.x, guard13.y, 900, 715) < 10) {
        if (guard13.body.velocity.x > 0) guard13.setVelocityX(-300);
        context.physics.accelerateTo(guard13,300,715,300,1000);
        guard13.flipX = true;
    }
}

function obiad(player, speakers) {
    if (obiadTrigger == 0) {
        if (Phaser.Math.RND.integerInRange(1, 100) > 1) {
            this.sound.play('obiad');
        } else {
            game.sound.play('fart');
        }
        
        //guards afk
        guards.children.iterate(function (child) {
            if (Phaser.Math.Distance.Between(child.x, child.y, speakers.x, speakers.y) < 500 && child.body.enable == true) {
                //child.setVelocityX(0);
                child.body.enable = false;
                child.alpha = 0.25;
                game.sound.play('disconnect');
                setTimeout(function() {
                    child.alpha = 1;
                    child.body.enable = true;
                    game.sound.play('connect');
                }, 10000);
            }
        });
        //end of it
        reloadSnipes();
        game.sound.play('reload');

        obiadTrigger = 2;
    } else {
        obiadTrigger = 2;
    }
}

function hud(context) {
    afkChargesText.setText('Afk Charges: ' + afkCharges);
    afkChargesText.y = context.cameras.main.scrollY;
}

function yeet(player, zone) {
    
    winds.children.iterate(function(child) {
        if (Phaser.Math.Distance.Between(zone.x-1280/2, zone.y, child.x, child.y) < 10) {
                
            

            child.setVelocityX(7000);
            child.body.setAllowGravity(true);
            afkCd = false;
            child.alpha = 1;
            zone.destroy();
        } else if (Phaser.Math.Distance.Between(zone.x+1280/2, zone.y, child.x, child.y) < 10) {
            
            child.setVelocityX(-7000);
            child.body.setAllowGravity(true);
            afkCd = false;
            child.alpha = 1;
            zone.destroy();
        }
    });

}

function yeetSlow(player, wind) {
	if (wind.body.velocity.x < -2500) {
		wind.setVelocityX(-2500);
	} else if (wind.body.velocity.x > 2500) {
		wind.setVelocityX(2500);
	}
}

function guardDodge(wind, guard) {
    guard.body.enable = false;
    guard.alpha = 0.25;
    game.sound.play('disconnect');
    setTimeout(function() {
        guard.alpha = 1;
        guard.body.enable = true;
        game.sound.play('connect');
    }, 2000);
}

function checkpointAquaire(player, chlebak) {
    if (chlebak.texture.key == 'chlebak') {
        gameSave.playerX = chlebak.x;
        gameSave.playerY = chlebak.y - 10;
        gameSave.afkCharges = afkCharges;  
    }
    checkpoints.children.iterate(function(child) {
        child.setTexture('chlebak');
    });
    chlebak.setTexture('chlebakOtwarty');
    }

function reloadSnipes() {
    snipes.children.iterate(function(child) {
        let dziecko = 1;
        winds.children.iterate(function(childWind) {
            if (Phaser.Math.Distance.Between(child.x, child.y, childWind.x, childWind.y) < 10) dziecko--;
            
        });
              
        if (child.flipX == true && dziecko == 1) {
            winds.create(child.x, child.y, 'wind').setScale(1).refreshBody().setAlpha(0).body.setAllowGravity(false).setGravityY(10); //.body.setVelocityX(3000);
            zones.add(contextHere.add.zone(child.x + 1280/2, child.y, 1280, 14));
            zonesTextures.create(child.x + 1280/2 + 10, child.y, 'lina');
            //console.log(dziecko);
            
        } else if (dziecko == 1) {
            let thisWind = winds.create(child.x, child.y, 'wind').setScale(1).refreshBody().setAlpha(0).setFlip(true).body.setAllowGravity(false).setGravityY(10);
            //console.log(dziecko);
            zones.add(contextHere.add.zone(child.x - 1280/2, child.y, 1280, 14));
            zonesTextures.create(child.x - 1280/2 - 10, child.y, 'lina');
        }
    });
}
