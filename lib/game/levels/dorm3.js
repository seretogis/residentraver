ig.module( 'game.levels.dorm3' )
.requires( 'impact.image','game.entities.player','game.entities.superzombie' )
.defines(function(){
LevelDorm3=/*JSON[*/{"entities":[{"type":"EntityPlayer","x":64,"y":94},{"type":"EntitySuperzombie","x":860,"y":188},{"type":"EntitySuperzombie","x":720,"y":188}],"layer":[{"name":"main","width":60,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"media/dorm-tiles.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,10,10,9,9,9,10,10,10,10,9,10,10,10,10,9,9,9,10,10,10,10,9,9,10,1],[0,0,1,9,9,9,9,9,1,9,9,9,9,1,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,7,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,7,1],[0,0,1,7,11,7,11,7,1,11,7,11,7,9,7,11,7,11,7,11,7,11,11,7,11,11,7,11,11,7,11,11,7,11,11,11,11,7,11,11,11,7,11,11,11,7,11,11,11,7,11,11,11,7,11,11,11,7,13,1],[0,0,1,7,11,7,11,7,9,11,7,11,7,19,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,20,7,7,7,7,7,13,7,7,7,7,7,7,7,13,7,7,7,13,7,7,7,9,1],[0,0,1,22,22,22,22,22,22,22,22,22,20,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,28,28,28,7,7,7,7,7,10,7,7,7,7,7,7,7,9,7,7,7,9,7,7,7,7,1],[0,0,1,14,14,14,14,14,14,14,14,14,14,30,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,7,7,7,7,7,7,7,7,7,13,7,7,7,7,7,7,7,7,7,7,7,7,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,7,7,7,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,7,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,7,7,7,7,11,11,11,7,13,13,11,7,11,11,13,7,11,11,13,13,11,11,13,7,13,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,7,7,7,7,7,13,7,7,9,10,7,7,7,7,9,7,7,7,9,10,7,7,9,7,9,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,9,7,7,7,7,7,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,9,7,7,7,13,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,9,7,13,7,7,10,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,11,7,7,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,19,9,9,9,9,9,9,9,8,9,7,7,10,7,7,7,7,11,11,11,7,11,11,11,7,11,11,11,7,11,11,11,7,11,11,11,7,7,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,7,13,19,22,20,7,7,11,11,7,7,7,7,7,7,13,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,7,9,13,13,13,20,7,11,11,7,7,7,7,7,7,10,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,7,7,8,9,8,13,7,7,7,7,7,7,7,7,7,7,7,13,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,12,7,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,19,22,22,23,22,22,22,22,22,22,22,22,22,22,22,23,23,23,22,22,22,22,22,22,22,22,23,23,23,23,22,22,22,23,23,22,22,24,20,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,1]]},{"name":"collision","width":60,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]}]}/*]JSON*/;
LevelDorm3Resources=[new ig.Image('media/dorm-tiles.png')];
});