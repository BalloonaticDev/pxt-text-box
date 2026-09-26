let myTextSprite = fancyText.create("Hello World!", 140, 1, fancyText.geometric_serif_9)
myTextSprite.left = 5
myTextSprite.top = 60
fancyText.setTextFlag(myTextSprite, fancyText.Flag.AlwaysOccupyMaxWidth, true)
fancyText.setAnimationSound(myTextSprite, music.createSoundEffect(WaveShape.Noise, 712, 712, 130, 0, 20, SoundExpressionEffect.None, InterpolationCurve.Linear))
fancyText.animateAtSpeed(myTextSprite, fancyText.TextSpeed.VeryFast, fancyText.AnimationPlayMode.InBackground)
pauseUntil(() => !(controller.A.isPressed()))
pauseUntil(() => controller.A.isPressed())
sprites.destroy(myTextSprite)
