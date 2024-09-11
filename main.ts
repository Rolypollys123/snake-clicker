namespace SpriteKind {
    export const money = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(-100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    pause(550)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . c c c c c c c . . . . 
        . . . . c 6 7 7 7 7 7 6 c . . . 
        . . . c 7 c 6 6 6 6 c 7 6 c . . 
        . . c 6 7 6 f 6 6 f 6 7 7 c . . 
        . . c 7 7 7 7 7 7 7 7 7 7 c . . 
        . . f 7 8 1 f f 1 6 7 7 7 f . . 
        . . f 6 f 1 f f 1 f 7 7 7 f . . 
        . . . f f 2 2 2 2 f 7 7 6 f . . 
        . . c c f 2 2 2 2 7 7 6 f c . . 
        . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
        c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
        f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 1 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . c c c c c c c . . . 
        . . . . . c f f 6 6 f f 7 c . . 
        . . . . c 7 6 6 6 6 6 6 7 6 c . 
        . . . c 7 7 7 7 7 7 7 7 7 7 c . 
        . . . c 7 8 1 f f 1 6 7 7 7 c . 
        . . . f 6 f 1 f f 1 f 7 7 7 f . 
        . . . f 6 f 2 2 2 2 f 7 7 7 f . 
        . . c c 6 f 2 2 2 2 f 7 7 6 f . 
        . c 7 7 7 7 2 2 2 2 7 7 f c . . 
        c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
        f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
        f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 6 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . c c c c c c c . . . 
        . . . . . c f f 6 6 f f 7 c . . 
        . . . . c 7 6 6 6 6 6 6 7 6 c . 
        . . . c 7 7 7 7 7 7 7 7 7 7 c . 
        . . . c 7 8 1 f f 1 6 7 7 7 c . 
        . . . f 6 f 1 f f 1 f 7 7 7 f . 
        . . . f 6 f 2 2 2 2 f 7 7 7 f . 
        . . c c 6 f 2 2 2 2 f 7 7 6 f . 
        . c 7 7 7 7 2 2 2 2 7 7 f c . . 
        c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
        f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
        f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
        f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
        f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . f 6 1 1 1 1 6 6 6 6 6 c . . . 
        . . f f c c c c c c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . c c c c c c 6 6 6 c c . . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `],
    50,
    false
    )
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . b b d d d 5 5 5 5 5 5 5 b . . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        c b 5 5 b c d d 5 5 5 5 5 5 b . 
        b b c c c d d d 5 5 5 5 5 d b . 
        . . . . c c d d d 5 5 5 b b . . 
        . . . . . . c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `],
    50,
    false
    )
})
function make_points (mySprite4: Sprite) {
    mySprite4 = sprites.create(img`
        ................................
        ................................
        ................................
        ..eee...eeee....................
        .e22ee.e777e....................
        .e222e.e277e....................
        .e722e.e227e....................
        .e777e.e222e....................
        4e227e4e222e444.................
        4e222e4e772e444.................
        4e722e4e272e444.................
        4e777e4e277e444.................
        4e222e4e222e444.................
        4e222e4e777e444.................
        4e222e4e777e444.................
        444444444444444.................
        4444eeee4444e4e.................
        e44ee42ee444e4e.................
        e4ee44244e44e4e.................
        e4e442224e44e4e.................
        e4e4422222e4e4e.................
        e4e4444442e4e4e.................
        e4e444444ee4e4e.................
        e4eee444ee44e4e.................
        e4444eeee444e4e.................
        e44444444444e4e.................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.money)
}
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.showLongText("this is snake clicker ", DialogLayout.Bottom)
game.showLongText("\"credits to cookie clicker\" ", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.money)
mySprite2 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.money)
mySprite.setPosition(43, 64)
mySprite2.setPosition(41, 74)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999777779
    9999999999999999999999999999999999999669999999999999999999999999999999999999966999999999999999999999999999999999999996699999999999999999999999999999999977777779
    9999999999999999999999999999999999999669999999999999999999999999999999999999966999999999999999999999999999999999999996699999999999999999999999999999999977777779
    9999999999999999999999999999999999999676999999999999999999999999999999999999967699999999999999999999999999999999999996769999999999999999999999999999999977777777
    9999999999966999999999999999999999999676999999999996699999999999999999999999967699999999999669999999999999999999999996769999999999966999999999999999999977777777
    9999999999967699999999999999999996699676999999999996769999999999999999999669967699999999999676999999999999999999966996769999999999967699999999999999999977777777
    9996996669996769999999999999996696769676999699666999676999996699999999669676967699969966699967699999669999999966967696769996996669996769999966999999996677777777
    9966999676996776999999999999967696769676996699967699677699967696699996769676967699669996769967769996769669999676967696769966999676996776999676966999967677777777
    6676999967699676999999999699677696776677667699996769967699967666769967769677667766769999676996769996766676996776967766776676999967699676999676667699677697777777
    6676669996769677696999999769676696676677667666999676967769677666776967669667667766766699967696776967766677696766966766776676669996769677696776667769676696777777
    6776769996776667696999999766776666677677677676999677666769676666676677666667767767767699967766676967666667667766666776776776769996776667696766666766776666777777
    6766776996667767667799999776766666677677676677699666776766776666677676666667767767667769966677676677666667767666666776776766776996667767667766666776766666777777
    7766676966677667667999999676766776667677776667696667766766766776667676677666767777666769666776676676677666767667766676777766676966677667667667766676766776777777
    7766677666776667777999999677767766667777776667766677666777766677667776776666777777666776667766677776667766777677666677777766677666776667777666776677767766777777
    7666667666776767777999999677667666767777766666766677676777766667667766766676777776666676667767677776666766776676667677777666667666776767777666676677667666777777
    7667667767766777776999999677677667766777766766776776677777667767767767766776677776676677677667777766776776776776677667777667667767766777776677677677677667767777
    eeee767767766777776999999677677667666777766776776776677777677666767767766766677776677677677667777767766676776776676667777667767767766777776776667677677667667777
    eeeeee7767666777676999999b776776b766677b7666767767666777676766667b776776b766677b7666767767666777676766667b776776b766677b7666767767666777676766667b776776b7666777
    eeeeeebbbbbbbbbbbbb999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeebbbbbbbbbbbbb99999bbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeebbbebbbbbbbbb99999bbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbfffbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbb
    eeeeeeeebbbbbbbbbbbe99999eebbbbbbbbebbbbbbbeeeeebbbbbbbbfffebbbeeeebbbbbbbbebbbbbbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbefffbbbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbb
    beeeeeeeeebbbbeebbbb99999eeeebbeebbbbbebbeeeebeeeebbbbeefffbbeeeeeeeebbeebbbbbebbeeeebeeeebbbbeebbbbbeeeeeeeebbeebbbfffbbeeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbeb
    eeeeeeeeeeebbbeebbbb999999eeeebeebbbbbbbeeeeeeeeeeebbbeefffbeebeeeeeeebeebbbbbbbeeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbffffeeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbb
    ebbeeeeeeeeebbbbbbbe999999eeeeebbbbbbbbeebbeeeeeeeeebbbbfffeeeeeeeeeeeebbbbbbbbeebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbffffebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbe
    ebbeeeeeeeeeeebbbeee999999ebbeeeebbbbeeeebbeeeeeeeeeeebbfffeeeeeeeebbeeeebbbbeeeebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbffffebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeee
    eeeeeeeeeeeeeeeeeeee999999ebbeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeee
    eeeeeeeeeebbeeeeeebb99999999eeebeeeeeebeeeeeeeeeeebbeeeefffbeeeeeeeeeeebeeeeeebeeeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeefffffeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebe
    eeeeeeeeeebbeeeeeebbe99999999eeeeebbeeeeeeeeeeeeeebbeeeefffbeeeeeeeeeeeeeebbeeeeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbfffffeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeee
    eeeeeeeeeeeeeebeeeeee999999999eeeebbeeeeeeeeeeeeeeeeeebefffeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbfffffeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeee
    eeeeeeeeeeeeeeeeeeeee9999999999eeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeee9999999999eeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeee9999999999eeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeee9999999999eeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeee999999999eeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeee999999999eeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeee9999999999eeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999eeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999eeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999eeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999eeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999eeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999eeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999eeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999eeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999eeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999eeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999eeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999999eeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999eeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999eeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
music.play(music.createSong(hex`0078000408020300001c00010a006400f4016400000400000000000000000000000000050000040f00340038000220253c004000031b252905001c000f0a006400f4010a0000040000000000000000000000000000000002300008000c00021d240c00100002272a10001400021d241400180002222a18001c0001271c002000031d222a20002400012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001b00240025000204062800290001052c002d0002040630003100020406`), music.PlaybackMode.LoopingInBackground)
