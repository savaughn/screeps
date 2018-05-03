
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function() {
    
    for( let name in Memory.creeps){
        if(Game.creeps[name] == undefined){
            delete Memory.creeps[name];
        }
    }
    
    if(Game.spawns.Spawn1.energy == Game.spawns.Spawn1.energyCapacity){
        var harvesterCount = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
        if(harvesterCount < 2 ){
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {isWorking : false, role : 'harvester'});
        } else {
		    Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {isWorking : false, role : 'upgrader'});
        }
    }
    
    
	      
    
   for( let name in Game.creeps){
    
        var creep = Game.creeps[name];
       
       if(creep.memory.role == 'harvester'){
            roleHarvester.run(creep);
       }
        else if (creep.memory.role == 'upgrader'){
            roleUpgrader.run(creep);
        }
    }
}