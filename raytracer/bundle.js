/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

class Vector{
    constructor(x,y,z){
        this.x=x
        this.y=y
        this.z=z
    }
    static times(k, v) { return new Vector(k * v.x, k * v.y, k * v.z) }
    static divide(v,k) { return new Vector(v.x/k, v.y/k, v.z/k) }
    static minus(v1, v2) { return new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z) }
    static plus(v1, v2) { return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z) }
    static dot(v1, v2) { return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z }
    static mag(v) { return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z) }
    static norm(v) {
        return Vector.divide(v, Vector.mag(v))
    }
    static cross(v1, v2) {
        return new Vector(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x)
    }
}

class Color{
    constructor(r, g, b) {
        this.r = r
        this.g = g
        this.b = b
    }
    static scale(k, v) { return new Color(k * v.r, k * v.g, k * v.b) }
    static plus(v1, v2) { return new Color(v1.r + v2.r, v1.g + v2.g, v1.b + v2.b) }
    static times(v1, v2) { return new Color(v1.r * v2.r, v1.g * v2.g, v1.b * v2.b) }
    static toDrawingColor(c) {
        let legalize = function (d) { return d > 1 ? 1 : d }
        let r= Math.floor(legalize(c.r) * 255)
        let g= Math.floor(legalize(c.g) * 255)
        let b= Math.floor(legalize(c.b) * 255)
        return new Color(r,g,b)
    }
    static get white(){ return new Color(1,1,1) }
    static get yellow(){ return new Color(1,1,0) }
    static get green(){ return new Color(0,1,0) }
    static get red(){ return new Color(1,0,0) }

    static get grey(){ return new Color(0.5, 0.5, 0.5) }
    static get black(){ return new Color(0.0, 0.0, 0.0) }
    static get background(){ return this.black }
    static get defaultColor(){ return this.black }
}

class Camera{
    constructor(pos, lookAt) {
        this.pos = pos
        let down = new Vector(0.0, -1.0, 0.0)
        this.forward = Vector.norm(Vector.minus(lookAt, this.pos))
        this.right = Vector.times(1.5, Vector.norm(Vector.cross(this.forward, down)))
        this.up = Vector.times(1.5, Vector.norm(Vector.cross(this.forward, this.right)))
    }
}

class Sphere{
    constructor(center, radius, surface) {
        this.center = center
        this.surface = surface
        this.radius2 = radius * radius
    }
    normal(pos) { return Vector.norm(Vector.minus(pos, this.center)) }
    intersect(ray) {
        let eo = Vector.minus(this.center, ray.start)
        let v = Vector.dot(eo, ray.dir)
        let dist = 0
        if (v >= 0) {
            let disc = this.radius2 - (Vector.dot(eo, eo) - v * v)
            if (disc >= 0) {
                dist = v - Math.sqrt(disc)
            }
        }
        if (dist === 0) {
            return null
        }
        else {
            return { thing: this, ray: ray, dist: dist }
        }
    }
}

class Plane{
    constructor(norm, offset, surface) {
        this.surface = surface
        this.normal = function (pos) { return norm }
        this.intersect = function (ray) {
            let denom = Vector.dot(norm, ray.dir)
            if (denom > 0) {
                return null
            }
            else {
                let dist = (Vector.dot(norm, ray.start) + offset) / (-denom)
                return { thing: this, ray: ray, dist: dist }
            }
        }
    }
}

class Surfaces{

    static shinyColor(color){
        class ShinyColor{
            static diffuse(pos) { return color }
            static specular(pos) { return Color.white }
            static reflect(pos) { return 0.3 }
            static get roughness(){ return 10 }
        }
        return ShinyColor
    }

    static get shinyWhite(){
        class ShinyWhite{
            static diffuse(pos) { return Color.grey }
            static specular(pos) { return Color.white }
            static reflect(pos) { return 0.3 }
            static get roughness(){ return 10 }
        }
        return ShinyWhite
    }

    static get shinyRed(){
        class ShinyRed{
            static diffuse(pos) { return Color.red }
            static specular(pos) { return Color.white }
            static reflect(pos) { return 0.3 }
            static get roughness(){ return 50 }
        }
        return ShinyRed
    }

    static get computed(){
        class Computed{
            static checker(pos){ return (((Math.floor(pos.z/10) + Math.floor(pos.x/10)) % 2) !== 0) }
            static circle(pos){ return (Math.sqrt(pos.z**2+pos.x**2) < 700) }
            static mixed(pos){
                return this.checker(pos)&&this.circle(pos)
            }
            static selected(pos){
                return this.checker(pos)
            }
            static diffuse(pos) {
                if(this.selected(pos)){
                    return Color.green
                }
                else {
                    return Color.yellow
                }
            }
            static specular(pos) { return Color.white }
            static reflect(pos) {
                if (this.selected(pos)) {
                    return 1
                }
                else {
                    return 0.9
                }
            }
            static get roughness(){ return 150 }
        }
        return Computed
    }
}

class RayTracer{
    constructor(){
        this.maxDepth = 3
        this.rayCache={}//new Map()
        this.cachingEnabled=true
        this.stats={
            rayCacheSize:0,
            reused:0,
        }
    }
    intersections(ray, scene) {
        let closest = +Infinity
        let closestInter = undefined
        for (let i in scene.things) {
            let inter = scene.things[i].intersect(ray)
            if (inter != null && inter.dist < closest) {
                closestInter = inter
                closest = inter.dist
            }
        }
        return closestInter
    }
    testRay(ray, scene) {
        let isect = this.intersections(ray, scene)
        if (isect != null) {
            return isect.dist
        }
        else {
            return undefined
        }
    }
    traceRay(ray, scene, depth) {
        let color
        let rayKey=JSON.stringify(ray)
        if(this.cachingEnabled && rayKey in this.rayCache){
            this.stats.reused++
            return this.rayCache[rayKey]
        }
        let isect = this.intersections(ray, scene)
        if (isect === undefined) {
            color=Color.background
        }
        else {
            color=this.shade(isect, scene, depth)
        }
        if(this.cachingEnabled){
            this.rayCache[rayKey]=color
            this.stats.rayCacheSize++
        }
        return color
    }
    shade(isect, scene, depth) {
        let d = isect.ray.dir
        let pos = Vector.plus(Vector.times(isect.dist, d), isect.ray.start)
        let normal = isect.thing.normal(pos)
        let reflectDir = Vector.minus(d, Vector.times(2, Vector.times(Vector.dot(normal, d), normal)))
        let naturalColor = Color.plus(Color.background, this.getNaturalColor(isect.thing, pos, normal, reflectDir, scene))
        let reflectedColor = (depth >= this.maxDepth) ? Color.grey : this.getReflectionColor(isect.thing, pos, normal, reflectDir, scene, depth)
        return Color.plus(naturalColor, reflectedColor)
    }
    getReflectionColor(thing, pos, normal, rd, scene, depth) {
        return Color.scale(thing.surface.reflect(pos), this.traceRay({ start: pos, dir: rd }, scene, depth + 1))
    }
    getNaturalColor (thing, pos, norm, rd, scene) {
        let _this = this
        let addLight = function (col, light) {
            let ldis = Vector.minus(light.pos, pos)
            let livec = Vector.norm(ldis)
            let neatIsect = _this.testRay({ start: pos, dir: livec }, scene)
            let isInShadow = (neatIsect === undefined) ? false : (neatIsect <= Vector.mag(ldis))
            if (isInShadow) {
                return col
            }
            else {
                let illum = Vector.dot(livec, norm)
                let lcolor = (illum > 0) ? Color.scale(illum, light.color)
                    : Color.defaultColor
                let specular = Vector.dot(livec, Vector.norm(rd))
                let scolor = (specular > 0) ? Color.scale(Math.pow(specular, thing.surface.roughness), light.color)
                    : Color.defaultColor
                return Color.plus(col, Color.plus(Color.times(thing.surface.diffuse(pos), lcolor), Color.times(thing.surface.specular(pos), scolor)))
            }
        }
        return scene.lights.reduce(addLight, Color.defaultColor)
    }
    render(scene, ctx, screenWidth, screenHeight) {
        function getPoint(x, y, camera) {
            function recenterX(x) { return (x - (screenWidth / 2.0)) / 2.0 / screenWidth }
            function recenterY(y) { return -(y - (screenHeight / 2.0)) / 2.0 / screenHeight }
            return Vector.norm(Vector.plus(camera.forward, Vector.plus(Vector.times(recenterX(x), camera.right), Vector.times(recenterY(y), camera.up))))
        }
        for (let y = 0; y < screenHeight; y++) {
            for (let x = 0; x < screenWidth; x++) {
                let color = this.traceRay({ start: scene.camera.pos, dir: getPoint(x, y, scene.camera) }, scene, 0)
                let c = Color.toDrawingColor(color)
                ctx.fillStyle = "rgb(" + String(c.r) + ", " + String(c.g) + ", " + String(c.b) + ")"
                ctx.fillRect(x, y, x + 1, y + 1)
            }
        }
    }
}

function defaultScene(x,z) {
    let cameraPosition=new Vector(x,8,z)
    return {
        things: [
            new Plane(new Vector(0,1,0),0,Surfaces.computed),

            new Sphere(new Vector(0, 2, 0), 2, Surfaces.shinyRed),

            new Sphere(new Vector(0, 3, 4), 1, Surfaces.shinyColor(Color.grey)),
            new Sphere(new Vector(0, 3, -4), 1, Surfaces.shinyColor(Color.green)),
            new Sphere(new Vector(4, 3, 0), 1, Surfaces.shinyColor(Color.black)),
            new Sphere(new Vector(-4, 3, 0), 1, Surfaces.shinyColor(Color.yellow)),
        ],
        lights: [
            { pos: cameraPosition, color: new Color(1,1,1) },
            { pos: new Vector(0,6,0), color: new Color(1,1,1) },
        ],
        camera: new Camera(cameraPosition, new Vector(0,5,0))
    }
}

let {all}=document
let canv=all.canvas
let ctx=canv.getContext('2d')
let rayTracer=new RayTracer()
let renderSceneWithCamera=(x,z)=>rayTracer.render(defaultScene(x,z),ctx,canv.width,canv.height)

let rotationValue=()=>(all.cameraRotation.value/all.cameraRotation.max)*Math.PI*2
let x=()=>Math.cos(rotationValue())*all.cameraZoom.value*5
let z=()=>Math.sin(rotationValue())*all.cameraZoom.value*5

let renderScene=()=>renderSceneWithCamera(x(),z())
all.cameraRotation.oninput=all.cameraZoom.oninput=()=>setTimeout(renderScene)
renderScene()

let rotateIncrement=()=>{all.cameraRotation.value=parseInt(all.cameraRotation.value)+4; if(all.cameraRotation.value==all.cameraRotation.max)all.cameraRotation.value=all.cameraRotation.min}
let rotate=()=>{ rotateIncrement(); setTimeout(renderScene); setTimeout(rotate,100)}
rotate()

setInterval(()=>all.stats.innerHTML='rayCacheSize:'+rayTracer.stats.rayCacheSize+' reused:'+rayTracer.stats.reused,1500)


/***/ })
/******/ ]);