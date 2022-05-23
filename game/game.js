import THREE from './src/three.js/three.module.js'

class World{
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
        this.world_width = (x = 10000)
        this.world_height = (x,y,z)=>{
            World_blocks();
            this.world_height = y
            this.world_height = 128
        }  
    }
}
class World_blocks{
    grass(world_height) {
        world_height = (1, 1)
    }
    dirt(world_height) {
        world_height = (2, 6)
    }
    stone(world_height) {
        world_height = (7, 127)
        coal();
        iron();
    }
    coal(x,y,z) {
        textures (
            x, './src/Textures/coal.png',
            y, './src/Textures/coal.png',
            z, './src/Textures/coal.png'
        );
    }
    iron(x,y,z) {
        textures (
            x, './src/Textures/iron.png',
            y, './src/Textures/iron.png',
            z, './src/Textures/iron.png'
        );
    }
    bedrock(world_height) {
        world_height = (128, 128)
    }
}
class Items {}
class Player {}
class Enemy {}
class Inventory {}
class Damage {}

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext('');