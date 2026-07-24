export function hookEngine(engine) {

    const _Scene_Map_update = Scene_Map.prototype.update;

    Scene_Map.prototype.update = function() {

        _Scene_Map_update.call(this);

        engine.update();

    };

}