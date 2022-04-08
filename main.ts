input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.RED)
    pausa = 1000
})
let pausa = 0
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
	
})
