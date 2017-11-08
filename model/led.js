/**
 * Created by i4M1k0SU on 2017/11/03.
 */

// Important Notes:
// *  Instead of providing the global broadcast address which is the default, you should provide the IP address
//    of the Milight Controller for unicast mode. Don't use the global broadcast address on Windows as this may give
//    unexpected results. On Windows, global broadcast packets will only be routed via the first network adapter. If
//    you want to use a broadcast address though, use a network-specific address, e.g. for `192.168.0.1/24` use
//    `192.168.0.255`.
// *  Note, for the v6 command set each command must be provided with a zone parameter as shown in the example below!

import {MilightController as Milight, commandsV6 as commands} from 'node-milight-promise';
import config from '../config.json';

const DEFAULT_BRIGHTNESS = 100;

export default class LedModel {

    constructor(zone) {
        this.light = new Milight({
            ip: config.led.ip_address || '255.255.255.255',
            type: 'v6'
        });
        this.zone = zone;
    }
    
    on() {
        this.commands.rgbw.on(this.zone);
    }

    off() {
        this.light.sendCommands(commands.rgbw.off(this.zone));
    }
    
    pause(time) {
        this.light.pause(time);
    }
    
    chengeBrightness(brightness) {
        this.light.sendCommands(commands.rgbw.brightness(this.zone, brightness));
    }
    
    changeHue(hue) {
        this.light.sendCommands(commands.rgbw.hue(this.zone, hue));
    }

    white() {
        this.light.sendCommands(commands.rgbw.on(this.zone), commands.rgbw.whiteMode(this.zone), commands.rgbw.brightness(this.zone, DEFAULT_BRIGHTNESS));
    }
    
    pink() {
        this.light.sendCommands(commands.rgbw.on(this.zone), commands.rgbw.rgb(this.zone, 0xFE, 0x2E, 0xF7), commands.rgbw.brightness(this.zone, DEFAULT_BRIGHTNESS));
    }
    
    close() {
    	this.light.close().then(() => {
            console.log("All command have been executed - closing Milight");
        });
    }
}
