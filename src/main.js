import { VGEngine } from "./core/VGEngine.js";
import { Player } from "./player/Player.js";
import { hookEngine } from "./core/RPGMakerHook.js";

const engine = new VGEngine();

const player = new Player();

engine.start();

hookEngine(engine);