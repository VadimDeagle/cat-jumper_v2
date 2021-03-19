enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.knock.play()
    otherSprite.destroy(effects.ashes, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hops_and_Paw.vy == 0) {
        Hops_and_Paw.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    tiles.placeOnRandomTile(Hops_and_Paw, assets.tile`tile6`)
    Hops_and_Paw.startEffect(effects.warmRadial, 200)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    current_level += 1
    startLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . f 1 1 1 f 1 1 1 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . f f 5 5 f 5 5 f f . . . . 
        . . . f 5 5 5 f 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(Hops_and_Paw.x + 80, Hops_and_Paw.y - 80)
    bee.follow(Hops_and_Paw, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fireball, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy()
})
function startLevel () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level`)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`level_0`)
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level_1`)
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(Hops_and_Paw, assets.tile`tile6`)
    Hops_and_Paw.startEffect(effects.warmRadial, 200)
    scene.cameraFollowSprite(Hops_and_Paw)
    info.setLife(9)
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Coin)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Flower)) {
        value4.destroy()
    }
    for (let value5 of tiles.getTilesByType(assets.tile`tile4`)) {
        flower = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        flower,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        150,
        true
        )
        tiles.placeOnTile(flower, value5)
        tiles.setTileAt(value5, assets.tile`tile0`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`tile5`)) {
        flower = sprites.create(flowers[randint(0, flowers.length - 1)], SpriteKind.Flower)
        tiles.placeOnTile(flower, value6)
        tiles.setTileAt(value6, assets.tile`tile0`)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`tile11`)) {
        fireball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . 5 5 2 5 5 4 5 5 . . . . 
            . . . . . 4 4 4 4 2 4 . . . . . 
            . . . 5 4 4 2 2 2 2 4 5 . . . . 
            . . . 5 4 . 2 8 2 8 4 2 . . . . 
            . . . 5 5 . 2 8 8 2 4 5 . . . . 
            . . . 2 5 2 2 8 2 4 4 5 . . . . 
            . . . . 5 4 2 2 2 4 5 . . . . . 
            . . . . . . 4 . 4 4 5 . . . . . 
            . . . 5 . 5 5 5 4 5 5 . . . . . 
            . . . . . . . 2 5 5 . . . . . . 
            . . . . . . . . . . . . . 5 . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Fireball)
        tiles.placeOnTile(fireball, value7)
        tiles.setTileAt(value7, assets.tile`tile0`)
        animation.runMovementAnimation(
        fireball,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        fireball.startEffect(effects.fire)
    }
    for (let value10 of tiles.getTilesByType(assets.tile`myTile`)) {
        Pill = sprites.create(img`
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . 5 5 4 5 5 . . . . . . 
            . . . . . 5 4 2 4 5 . . . . . . 
            . . . . . 5 4 2 4 5 . . . . . . 
            . . . . . 5 4 2 4 5 . . . . . . 
            . . . . . 5 4 2 4 5 . . . . . . 
            . . . . . 5 4 2 4 5 . . . . . . 
            . . . . . 5 4 2 4 5 . . . . . . 
            . . 5 5 5 5 4 2 4 5 5 5 5 . . . 
            . . 5 4 4 5 4 2 4 5 4 4 5 . . . 
            . . 5 4 2 4 4 2 4 4 2 4 5 . . . 
            . . . 5 4 2 4 2 4 2 4 5 . . . . 
            . . . . 5 4 2 2 2 4 5 . . . . . 
            . . . . . 5 4 2 4 5 . . . . . . 
            . . . . . . 5 4 5 . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            `, SpriteKind.Coin)
        tiles.placeOnTile(Pill, value10)
        tiles.setTileAt(value10, assets.tile`tile0`)
        animation.runMovementAnimation(
        Pill,
        animation.animationPresets(animation.bobbing),
        1000,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.clouds, 10)
    if (Hops_and_Paw.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
})
let Pill: Sprite = null
let fireball: Sprite = null
let flower: Sprite = null
let bee: Sprite = null
let Hops_and_Paw: Sprite = null
let current_level = 0
let flowers: Image[] = []
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777ffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777ffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffff77777777fffffffffffffffffffffffff777777777777777fffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffff7777777777777ffffffffffffffffffff777777777777777777ffffffff
    fffffffffffffffffffffffff77777777ffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffff7777777777777777ffffffffffffffff77777777777777ff7777ffffffff
    ffffffffffffffffffffff77777777777fffffffffffffffffff7777777ffffffffffffffffff777fffffffffffffffffff777777777f777777777fffffffffffff777777777777777fff77777ffffff
    ffffffffffffffffffff7777777777777ffffffffffffffff7777777777ffffffffffffffffff777ffffffffffffffffff77777f77777fff7777777777fffffffff77777ff77777777fff777777fffff
    ffffffffffffffffff777777777ffffffffffffffffffff777777777777ffffffffffffffffff777fffffffffffffffff77777ff77777fffff77777777ffffffff7777ffff77777777ffff77777fffff
    ffffffffffffffff77777777fffffffffffffffffffff777777777fffffffff777fffffffffff777ffffffffffffffff77777fff77777fffffff777777ffffffff77777fff77777777fff777777fffff
    ffffffffffffffff777777fffffffffffffffffffff77777777ffffffffffff7777ffffffffff777ffffffffffffffff77777fff777777fffffff777ffffffffff777777ff77777777fff7777fffffff
    fffffffffffffff77777ffffffffffffffffffffff7777777ffffffffffffff77777fffffffff777ffffffffffffffff777fffff777777fffff77777fffffffffff777777f77777777ff7777ffffffff
    ffffffffffffff77777fffffffffffffffffffffff77777ffffffffffffffff77777fffffffff777ffffffffffffffff777fffff777777fffff77777fffffffffffff7777f77777777777777ffffffff
    ffffffffffffff7777ffffffffffffffffffffffff777ffffffffffffffffff77777fffffffff777ffffffffffffffff7777ffff777777ffff77777fffffffffffffff777777777777777777ffffffff
    ffffffffffffff777fffffffffffffffffffffffff777ffffffffffffffffff7777ffffffffff777ffffffffffffffff77777ffff77777ffff7777ffffffffffffffff77777777777777777fffffffff
    ffffffffffffff777fffffffffffffffffffffffff777ffffffffffffffffff7777ffffffff7777777777777fffffffff77777777777777777777ffffffffffffffffff7777777777777ffffffffffff
    ffffffffffffff777fffffffffffffffffffffffff777ffffffffffffffffff7777ffffffff7777777777777ffffffffff7777777777777777777ffffffffffffffffffff77777777fffffffffffffff
    ffffffffffffff777fffffffffffffffffffffffff777ffffffffffffffffff7777ffffffff7777777777777fffffffffff77777777777777777ffffffffffffffffffffff777fffffffffffffffffff
    ffffffffffffff777fffffffffffffffffffffffff777ffffffffffffffffff777fffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff777fffffffffffffffffffffffff777fffffffffffffffff7777fffffffffff7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff7777ffffffffffffffffffffffff777ffffffffffffffff777777ffffffffff7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff77777fffffffffffffffffffffff777fffffffffffffff7777777fffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff77777ffffffffffffffffffffff777ffffffffffffff777777777ffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff777777ffffffffffffffffffff777fffffffffffff77777f7777ffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff7777777ffffffffffffffffff7777ffffffffff777777fff777ffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff7777777777777777777777777777fffffffff777777ffff777ffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff7777777777777777777777777777ffffff777777fffff7777fffffffff7777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff77777777777777777777777777777f777777fffffff77777ffffffff7777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff7777777777777fffffffff77777ffffffff7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff7777777777fffffffffff7777ffffffff7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff77777ffffffffffffff777fffffffff7777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ff
    ffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ff
    ffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ff
    ffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777f777ff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777fffffff77777777777777ff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777fffffff77777777777777ff
    ffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffff777fffffffffffffffffff7777777777fffffff77777777ffffffffffff7777777fffffff777fffff77777fff
    ffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffff777fffffff777fff77777f77777777777ffffff7777777777fffffffff77777777fffffff777fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffff777ffffffffff777fffffff777777777777777777777777fffff7777777777ffffffff777777777fffffff7777ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffff777ffffffffff7777ffffff7777777777777fffffff7777ffffff777ff77777fffffff777777777fffffff7777ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffff777ffffffffff7777ffffff77777777f77777fffffff777ffffff777fff77777ffffff777f7777fffffffff777ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff777fffffff777fffffffffff777ffffff777fffffff7777fffffff777ffffff777ffff7777fffff77777777ffffffffff7777fffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff7777fffffff777ffffffffff7777ffffff777ffffffff777fffffff7777fffff777fffff7777ffff77777777ffffffffff7777fffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff7777ffffff7777ffffffffff7777ffffff777ffffffff777fffffff7777fffff777fffff77777fff7777777ffffffffffff777fffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff777fffffff7777ffffffffff777fffffff777ffffffff777ffffffff777fffff777ffffff7777ff777777ffffffffffffff777fffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff777fffffff777fffffffffff777fffffff777ffffffff7777fffffff777fffff777fffffff777ff77777fffffffffffffff777fffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff777fffffff777fffffffffff777fffffff777ffffffff7777fffffff777fffff777fffffff777ff777fffffffffffffffff777fffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff777fffffff777fffffffff77777fffffff777fffffffff777fffffff777fffff777fff7777777ff777fffffffffffffffff7777ffffffffff
    fffffffffffffffffffffffffffff777fffffffffffffff777fffffff777fffffff7777777fffffff777fffffffff777fffffff777fffff777fff7777777ff777fffffffffffffffff7777ffffffffff
    fffffffffffffffffffffffffffff77777fffffffffffff777fffffff777fffff777777777fffffff777fffffffff777fffffffffffffff777fff777777fff777ffffffffffffffffff7777fffffffff
    fffffffffffffffffffffffffffff7777777777ffffffff777fffffff777fff77777777777fffffff777fffffffff777fffffffffffffff777ffffffffffff7777fffffffffffffffff7777fffffffff
    fffffffffffffffffffffffffffff777777777777777777777fffffff777777777777ff7777ffffffffffffffffffffffffffffffffffff777ffffffffffff77777777ffffffffffffff777fffffffff
    ffffffffffffffffffffffffffffffff777777777777777777fffffff7777777777ffff7777ffffffffffffffffffffffffffffffffffff777fffffffffffff7777777ffffffffffffff777fffffffff
    fffffffffffffffffffffffffffffffffffff777777777777ffffffff77777777ffffff7777ffffffffffffffffffffffffffffffffffff777ffffffffffffff777777ffffffffffffff777fffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffff777fffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
pause(2000)
scene.setBackgroundColor(9)
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
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999997dd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999997ddddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999997ddddddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999997ddddddddddddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999997ddddddddddddddddddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999997dddddddddddddddddddddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    ddddddddddddddddddddddddddddddddddddddd99999999997dddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    dddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    dddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999997ddddd9999999999
    ddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999997ddddddddd9999999
    dddddddddddddddddddddddddddddbbbbbbddddbbbdddddbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999997ddddddddddddddd999
    dddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999999999997dd99999999999999997dddddddddddddddddddd
    dddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999997ddddddd9999999999997ddddddddddddddddddddddd
    ddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999997dddddddddddd999999997dddddddddddddddddddddddddd
    dddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999997ddddddddddddddd999997dddddddddddddddddddddddddddd
    dddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999997ddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999997dddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb997dddd9999999999999999999999999999997ddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddd99999999999999999999999999997dddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddd99999999999999999999999997dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddd99999999999999999999997dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddd999999999999999999997ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddd9999999999999997dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddd9999999997dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddd997ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddd6d66ddddddddddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddd6666666666ddddddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddd6666666666666666ddddddddddddddddddddddddddddddddddddb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddd6666666666666666666dddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddd66666666666666666666666ddddddddddddddddddddddddddddddddbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddd66666666666666666666666666ddddddddddddddddddddddddddbdddbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddd66666666666666666666666666666ddddddddddddddddddddddbbdddddb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddd66666666666666666666666666666666dddddddddddddddddddbbbbbdbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddd666666666666666666666666666666666666ddddddddddddddddbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddd66d6666666666666666666666666666666666666dddddddddddddddbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddd66666666666666666666666666666666666666666666ddddddddddddbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd6666666666666666666666666666666666666666666666666dddddbdbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666666bbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666666666666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb6666666666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb66666bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
flowers = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 a . . a 3 . . . . . . 
    . . . . a 3 2 2 3 a . . . . . . 
    . . 7 7 . a 3 3 a . . . . . . . 
    . . 7 7 7 . c c . 7 7 . . . . . 
    . . . 8 7 7 7 . 7 7 7 . . . . . 
    . . . 8 8 7 7 7 7 8 . . . . . . 
    . . . . . 8 7 7 8 . . . . . . . 
    . . . . . . 7 8 . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . 2 4 2 2 4 2 . . . . . . 
    . . . . 4 2 5 5 2 4 . . . . . . 
    . . 7 7 . 4 2 2 4 . . . . . . . 
    . . 7 7 7 . c c . 7 7 . . . . . 
    . . . 8 7 7 7 . 7 7 7 . . . . . 
    . . . 8 8 7 7 7 7 8 . . . . . . 
    . . . . . 8 7 7 8 . . . . . . . 
    . . . . . . 7 8 . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 6 . . . . . . . . 
    . . . . . . . 6 7 . . . . . . . 
    . 6 . . . . . 7 7 . . . . . . . 
    . 6 7 . . . . 7 7 . . . . . . . 
    . 7 7 . . . . 6 7 . . . 7 . . . 
    . 7 7 6 . . 7 7 7 . . 7 6 7 . . 
    . 7 6 7 7 7 7 7 7 6 7 7 7 . . . 
    . . 7 7 6 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 6 7 7 7 6 . . . . 
    . . . . . 8 7 7 8 . . . . . . . 
    . . . . . . 7 8 . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 1 . . 1 . . . 1 . . . . . 
    . . . 1 1 . 1 . 1 1 . . . . . . 
    . . . . 1 1 5 5 1 . . . . . . . 
    . 1 1 1 1 5 5 5 5 1 1 1 . . . . 
    . . . . 1 1 5 5 1 1 . . . . . . 
    . . 1 1 1 . 7 . 1 1 1 . . . . . 
    . . . . . . 7 . 1 . 1 . . . . . 
    . . 7 7 . . 7 . 1 . . . . . . . 
    . . 7 7 7 . 7 . . 7 7 . . . . . 
    . . . 8 7 7 7 . 7 7 7 . . . . . 
    . . . 8 8 7 7 7 7 8 . . . . . . 
    . . . . . 8 7 7 8 . . . . . . . 
    . . . . . . 7 8 . . . . . . . . 
    `]
current_level = 0
Hops_and_Paw = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    f . . . . . . . . . . . 
    f . . . . . . . f . . . 
    f . . . . . . . f f f . 
    f . . . . . . . f f 5 f 
    f f f f f f f f f f f f 
    f f f f f f f f f f . . 
    f f f f f f f f f . . . 
    f . f . . . f . f . . . 
    f . f . . . f . f . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hops_and_Paw, 80, 0)
startLevel()
game.onUpdate(function () {
    if (Hops_and_Paw.vy < 0) {
        Hops_and_Paw.setImage(img`
            . . . . . . . f . . . . 
            . . . . . . . f f f . . 
            . . . . . . . f f 5 f . 
            . . . . . . f f f f f . 
            . f . . . . f f f f . . 
            . f . . . f f f . . . . 
            f . . . . f f f f f f f 
            f . . . f f f f . . . . 
            . f . f f f f f f f f . 
            . . f f f f . . . . . . 
            . . f f f . . . . . . . 
            . f f . f . . . . . . . 
            . f . . f . . . . . . . 
            . f . . . . . . . . . . 
            `)
    } else if (Hops_and_Paw.vy > 0) {
        Hops_and_Paw.setImage(img`
            . . . f . . . . . . . . 
            . . f . . . . . . . . . 
            . f f . . . . . . . . . 
            . f . . . . . . . . . . 
            . f . . . . . . . . . . 
            . f f . . . . . . . . . 
            f f f f . . . . . . . . 
            f f f f . . . . . . . . 
            f f f f f . . . . . . . 
            f . f f f f . . f . . . 
            f . f f f f f f f f f . 
            f . f . f f f f f f 5 f 
            . . . . f f f f f f f f 
            . . . . f . f . . . . . 
            . . . . f . f . . . . . 
            . . . . f . f f . . . . 
            `)
    } else if (Math.round(Hops_and_Paw.x) % 2 == 0) {
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            f . . . . . . . . . . . 
            f . . . . . . . . . . . 
            f . . . . . . . f . . . 
            f . . . . . . . f f f . 
            f . . . . . . . f f 5 f 
            f f f f f f f f f f f f 
            f f f f f f f f f f . . 
            f f f f f f f f f . . . 
            f f . . . . . f f . . . 
            f f . . . . . f f . . . 
            `)
    } else {
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . f . . . . . . . . 
            . . f . . . . . . . . . 
            . f . . . . . . f . . . 
            f . . . . . . . f f f . 
            f . . . . . . . f f 5 f 
            f f f f f f f f f f f f 
            f f f f f f f f f f . . 
            f f f f f f f f f . . . 
            f . f . . . f . f . . . 
            f . f . . . f . f . . . 
            `)
    }
    if ((Hops_and_Paw.isHittingTile(CollisionDirection.Left) || Hops_and_Paw.isHittingTile(CollisionDirection.Right)) && Hops_and_Paw.vy >= 0) {
        Hops_and_Paw.vy = 0
        Hops_and_Paw.ay = 0
        Hops_and_Paw.setImage(img`
            . . . . . . . f f . . . 
            . . . . . . f 5 f . . . 
            . . . . . . f f f . . . 
            . . . . . f f f f . . . 
            . . . . . . . f f f f f 
            . . . . . . . f f . . . 
            . . . . . . . f f f f f 
            . . f . . . . f f . . . 
            . . f . . . . f f . . . 
            . . f . . . . f f f . f 
            . . f . . . . f f f f f 
            . . f f . . . f f f . f 
            . . . f f f f f f f f f 
            `)
    } else {
        Hops_and_Paw.ay = 350
    }
    if (Hops_and_Paw.vx < 0 || Hops_and_Paw.isHittingTile(CollisionDirection.Left)) {
        Hops_and_Paw.image.flipX()
        Hops_and_Paw.setImage(Hops_and_Paw.image)
    }
})
