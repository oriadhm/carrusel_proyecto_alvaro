radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        servos.P1.run(5)
        basic.pause(11000)
        servos.P1.stop()
    }
    if (receivedNumber == 2) {
        servos.P1.run(-5)
        basic.pause(11000)
        servos.P1.stop()
    }
    if (receivedNumber == 3) {
        servos.P1.run(50)
        basic.pause(5000)
        servos.P1.run(100)
        basic.pause(5000)
        servos.P1.run(-50)
        basic.pause(5000)
        servos.P1.run(-100)
        servos.P1.stop()
    }
})
radio.setGroup(48)
let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    music.setVolume(253)
    music.setTempo(130)
    strip.rotate(5)
    strip.show()
    music.playTone(294, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(294, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(220, music.beat(BeatFraction.Half))
    strip.rotate(5)
    strip.show()
    music.playTone(196, music.beat(BeatFraction.Half))
    strip.rotate(5)
    strip.show()
    music.playTone(185, music.beat(BeatFraction.Breve))
    strip.rotate(5)
    strip.show()
    music.stopMelody(MelodyStopOptions.All)
    strip.rotate(5)
    strip.show()
    music.playTone(147, music.beat(BeatFraction.Double))
    strip.rotate(5)
    strip.show()
    music.playTone(196, music.beat(BeatFraction.Double))
    strip.rotate(5)
    strip.show()
    music.playTone(233, music.beat(BeatFraction.Double))
    strip.rotate(5)
    strip.show()
    music.playTone(294, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(294, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(294, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(262, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(233, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(220, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(233, music.beat(BeatFraction.Double))
    strip.rotate(5)
    strip.show()
    music.playTone(196, music.beat(BeatFraction.Double))
    strip.rotate(5)
    strip.show()
    music.playTone(233, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(294, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(392, music.beat(BeatFraction.Double))
    strip.rotate(5)
    strip.show()
    music.playTone(392, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(392, music.beat(BeatFraction.Double))
    strip.rotate(5)
    strip.show()
    music.playTone(440, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(349, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(311, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(349, music.beat(BeatFraction.Double))
    strip.rotate(5)
    strip.show()
    music.playTone(233, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(294, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(349, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(440, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(392, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    strip.rotate(5)
    strip.show()
    music.playTone(277, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
	
})
