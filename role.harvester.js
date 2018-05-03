/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.harvester');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    
    run : function(creep){
        
          
         
        if(creep.memory.isWorking && creep.carry.energy == 0){
            creep.memory.isWorking = false;
        } else if (!creep.memory.isWorking && creep.carry.energy == creep.carryCapacity ){
            creep.memory.isWorking = true;
        }
        
        if(creep.memory.isWorking){
            
    		if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
    		    creep.moveTo(Game.spawns.Spawn1);  
    		    
    		}
    	} else {
    	    var source = creep.pos.findClosestByPath(FIND_SOURCES);
    	    if(creep.harvest(source) == ERR_NOT_IN_RANGE){
    	        creep.moveTo(source);
    	    }
    	}
        
    }

};