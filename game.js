import Phaser from 'phaser';
import StartMenu from './scenes/StartMenu';
import CharacterSelect from './scenes/CharacterSelect';
import Wave from './scenes/Wave';
import Shop from './scenes/Shop';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: '',
    scene: [StartMenu, CharacterSelect, Wave, Shop]
};

const game = new Phaser.Game(config);