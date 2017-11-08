'use strict';

import LedModel from './model/led'
const led = new LedModel(2);

led.pink();
led.pause(1000);

led.white();
led.pause(1000);

led.chengeBrightness(100);
// Setting Hue
for (let x = 0; x < 256; x += 5) {
  led.changeHue(x);
}
led.pause(1000);

led.off();
led.pink();

// Setting Brightness
for (let x = 100; x >= 0; x -= 5) {
    led.chengeBrightness(x);
}
led.pause(1000);

led.off();
led.close();
