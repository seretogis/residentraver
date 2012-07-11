ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'game.levels.dorm1',
    'game.levels.dorm2',
    'game.levels.dorm3'
)
.defines(function(){

    MyGame = ig.Game.extend({

        gravity: 300,

        init: function() {
            // Bind Keys
            ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
            ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
            ig.input.bind( ig.KEY.SPACE, 'jump' );
            ig.input.bind( ig.KEY.X, 'shoot' );
            ig.input.bind( ig.KEY.TAB, 'switch' );

            // Load first level
            this.loadLevel( LevelDorm1 );
        },

        update: function() {
            // Update all entities and backgroundMaps
            var player = this.getEntitiesByType( EntityPlayer )[0];
            if ( player ) {
                this.screen.x = player.pos.x - ig.system.width / 2;
                this.screen.y = player.pos.y - ig.system.height / 2;
            }

            this.parent();

            // Add your own, additional update code here
        },

        draw: function() {
            // Draw all entities and backgroundMaps
            this.parent();
        }
    });


    // Start the Game with 60fps, a resolution of 320x240, scaled
    // up by a factor of 2

    var tilesizeScaleFactor = 2;

    var viewportElem = (document.compatMode === "CSS1Compat") ?
        document.documentElement :
        document.body;

    if ( viewportElem.clientHeight <= 320 && viewportElem.clientWidth <= 480 ) {
        tilesizeScaleFactor = 1;
    }
    else if ( viewportElem.clientHeight > 320 && viewportElem.clientWidth > 480 ) {
        if ( viewportElem.clientHeight > 720 && viewportElem.clientWidth > 1280 ) {
            tilesizeScaleFactor = 3;
        }
        else {
            tilesizeScaleFactor = 2;
        }
    }

    var viewportHeight = viewportElem.clientHeight / tilesizeScaleFactor - 1;
    var viewportWidth = viewportElem.clientWidth / tilesizeScaleFactor - 1;

    ig.main( '#canvas', MyGame, 60, viewportWidth, viewportHeight, tilesizeScaleFactor );
//  ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
