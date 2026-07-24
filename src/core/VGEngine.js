export class VGEngine {

    constructor() {
        console.log("VGEngine criada!");
    }

    start() {
        console.log("VGEngine iniciada!");
    }

    update() {

        if (Input.isTriggered("ok")) {
            console.log("Ataque detectado pela VGEngine!");
        }

    }

}