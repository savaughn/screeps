/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.upgrader');
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
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
    		    creep.moveTo(creep.room.controller);    
    		}
    	} else {
    	    var source = creep.pos.findClosestByPath(FIND_SOURCES);
    	    if(creep.harvest(source) == ERR_NOT_IN_RANGE){
    	        creep.moveTo(source);
    	    }
    	}
        
    }
    

};