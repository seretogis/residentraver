ig.module(
    'game.entities.superzombie'
).requires(
    'impact.entity'
).defines(function() {
    EntitySuperzombie = ig.Entity.extend({
        animSheet: new ig.AnimationSheet( 'media/superzombie.png', 128, 128 ),
        size: {x: 64, y: 112},
        offset: {x: 32, y: 16},
        maxVel: {x: 200, y: 100},
        flip: false,
        friction: {x: 150, y: 0},
        speed: 60,
        health: 500,
        // entity collision
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.PASSIVE,
        check: function( other ) {
            other.receiveDamage( 10, this );
        },

        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            this.speed = Math.floor( ( Math.random() * 60 ) + 1 );
            //this.addAnim( 'walk',.07, [0,1,2,3,4,5] );
            this.addAnim( 'walk',( 1 / this.speed ), [0,1,2,3,4,5] );

        },

        update: function() {
            // near an edge? return!
            if ( !ig.game.collisionMap.getTile(
                this.pos.x + ( this.flip ? +4 : this.size.x - 4 ),
                this.pos.y + this.size.y+1 )
                ) {
                this.flip = !this.flip;
            }
            var xdir = this.flip ? -1 : 1;
            this.vel.x = this.speed * xdir;
            this.currentAnim.flip.x = this.flip;
            this.parent();
        },

        handleMovementTrace: function( res ) {
            this.parent( res );
            // collision with a wall? return!
            if ( res.collision.x ) {
                this.flip = !this.flip;
            }
        },

        receiveDamage: function( amount, from ) {
            this.parent( amount, from );
            if ( this.health > 0 ) {
                ig.game.spawnEntity( EntitySuperZombieDeathExplosion, this.pos.x + 32, this.pos.y + 64, { particles: 8, colorOffset: 1 });
            }
        },

        kill: function() {
            this.parent();
            ig.game.spawnEntity( EntitySuperZombieDeathExplosion, this.pos.x + 32, this.pos.y + 64, {colorOffset: 1});
        }
    });

    EntitySuperZombieDeathExplosion = ig.Entity.extend({
        lifetime: 1,
        callBack: null,
        particles: 80,
        colorOffset: 0,

        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            for ( var i = 0; i < this.particles; i++ ) {
                ig.game.spawnEntity(EntitySuperZombieDeathExplosionParticle, x, y, {colorOffset: settings.colorOffset ? settings.colorOffset : 0 });
            }
            this.idleTimer = new ig.Timer();
        },

        update: function() {
            if ( this.idleTimer.delta() > this.lifetime ) {
                this.kill();
                if ( this.callBack ) {
                    this.callBack();
                }

                return;
            }
        },
    });

    EntitySuperZombieDeathExplosionParticle = ig.Entity.extend({
        size: {x: 2, y: 2},
        maxVel: {x: 300, y: 200},
        lifetime: 2,
        fadetime: 1,
        bounciness: 0,
        vel: {x: 200, y: 130},
        friction: {x: 50, y: 0},
        collides: ig.Entity.COLLIDES.LITE,
        colorOffset: 0,
        totalColors: 7,
        animSheet: new ig.AnimationSheet( 'media/blood.png', 2, 2 ),
        checkAgainst: ig.Entity.TYPE.A,

        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            var frameID = Math.round( Math.random() * this.totalColors ) + ( this.colorOffset * ( this.totalColors + 1 ) );
            this.addAnim( 'idle', 0.2, [frameID] );
            this.vel.x = ( Math.random() * 2 - 1 ) * this.vel.x;
            this.vel.y = ( Math.random() * 2 - 1 ) * this.vel.y;
            this.idleTimer = new ig.Timer();
        },

        update: function() {
            if ( this.idleTimer.delta() > this.lifetime ) {
                this.kill();
                return;
            }
            this.currentAnim.alpha = this.idleTimer.delta().map( this.lifetime - this.fadetime, this.lifetime, 1, 0 );
            this.parent();
        },

        check: function( other ) {
            other.receiveDamage( 3, this );
            this.kill();
        }
    });
});