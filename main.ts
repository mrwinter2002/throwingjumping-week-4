controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ball.isHittingTile(CollisionDirection.Bottom)) {
        ball.setVelocity(0, -170)
    }
})
let ball: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010100000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101`, img`
    2 . 2 . . . . . . . 2 . 2 . . 2 
    2 . 2 . . . . . . . 2 . 2 . . 2 
    2 . 2 . . . . . . . 2 . 2 . . 2 
    2 . 2 . . . . . . . 2 . 2 . . 2 
    2 . 2 . . . . . . . 2 . 2 . . 2 
    2 . 2 . . . . 2 2 2 2 . 2 . . 2 
    2 . 2 . . . . . . . 2 . 2 . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tilePath2], TileScale.Sixteen))
ball = sprites.create(img`
    . . . . . . . . c c c c . . . . 
    . . . . c c c c c c c c c . . . 
    . . . c f c c a a a a c a c . . 
    . . c c f f f f a a a c a a c . 
    . . c c a f f c a a f f f a a c 
    . . c c a a a a b c f f f a a c 
    . c c c c a c c b a f c a a c c 
    c a f f c c c a b b 6 b b b c c 
    c a f f f f c c c 6 b b b a a c 
    c a a c f f c a 6 6 b b b a a c 
    c c b a a a a b 6 b b a b b a . 
    . c c b b b b b b b a c c b a . 
    . . c c c b c c c b a a b c . . 
    . . . . c b a c c b b b c . . . 
    . . . . c b b a a 6 b c . . . . 
    . . . . . . b 6 6 c c . . . . . 
    `, SpriteKind.Player)
ball.ay = 400
controller.moveSprite(ball, 100, 0)
