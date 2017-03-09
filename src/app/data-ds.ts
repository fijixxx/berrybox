import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const DSS: Weapon[] = [
  { name_photonart: 'かまいたち', damage: 110, consumption: 0, frames: 28.5},
  { name_photonart: 'トルネードダンス零式', damage: 0, consumption: 0, frames: 0},
  { name_photonart: 'シザーエッジ', damage: 1211, consumption: 20, frames: 76},
  { name_photonart: 'ランブリングムーン', damage: 1386, consumption: 20, frames: 79},
  { name_photonart: 'イリュージョンレイヴ', damage: 1773, consumption: 32, frames: 174},
  { name_photonart: 'フェイクキャプチャ', damage: 1773, consumption: 15, frames: 95},
  { name_photonart: 'サプライズダンク', damage: 1419, consumption: 20, frames: 98},
  { name_photonart: 'デッドリーアーチャー', damage: 1621, consumption: 30, frames: 82},
  { name_photonart: 'アクロエフェクト', damage: 1315, consumption: 20, frames: 76},
  { name_photonart: 'デッドリーサークル零式', damage: 1706, consumption: 30, frames: 138},
  { name_photonart: 'ケイオスライザー(ギア3)', damage: 1488, consumption: 20, frames: 72},
  { name_photonart: 'ハリケーンセンダー', damage: 942, consumption: 25, frames: 60}
];
export const DSSPEC: Weaponspec = {
  name_weapon: 'Double Sabers', atk1_rest: 4, atk1_frames: 34, atk2_rest: 6, atk2_frames: 31, atk3_rest: 27, atk3_frames: 50, reg: 5
};
