'use strict';

import LedModel, * as LedModelConst from './model/led'
const led = new LedModel(2);

led.on();
led.setBrightness(100);
led.pink();
led.pause(10000);

// Setting Hue
for (let x = 0; x < 256; x += 5) {
    led.setHue(x);
}
led.pause(1000);

led.setPreset(LedModelConst.PRESET_COLOR_GRADATION);
led.pause(60000);

// Setting Brightness
for (let x = 100; x >= 0; x -= 5) {
    led.setBrightness(x);
}
led.pause(1000);

led.off();
led.close();
