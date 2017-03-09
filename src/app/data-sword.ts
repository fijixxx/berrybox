import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const SWORDS: Weapon[] = [
  { name_photonart: 'ライジング', damage: 2010, consumption: 20, frames: 146},
  { name_photonart: 'ツイスター零(最短, 空中発動)', damage: 1580, consumption: 30, frames: 85},
  { name_photonart: 'ノヴァストライク(チャージ2)', damage: 1895, consumption: 20, frames: 162},
  { name_photonart: 'ライドスラッシャー(チャージ2, 空中発動)', damage: 2214, consumption: 25, frames: 146},
  { name_photonart: 'オーバーエンド(ギア3)', damage: 4125, consumption: 40, frames: 298},
  { name_photonart: 'ソニックアロウ', damage: 594, consumption: 25, frames: 40},
  { name_photonart: 'JGソニック', damage: 755, consumption: 0, frames: 40},
  { name_photonart: 'ギルティブレイク(チャージ2)', damage: 1100, consumption: 20, frames: 72},
  { name_photonart: 'イグナイトパリング', damage: 1841, consumption: 25, frames: 190},
  { name_photonart: 'JGイグナイトパリング', damage: 3068, consumption: 15, frames: 160},
];
export const SWORDSPEC: Weaponspec = {
  name_weapon: 'Sword', atk1_rest: 9, atk1_frames: 48, atk2_rest: 9, atk2_frames: 40, atk3_rest: 10, atk3_frames: 52, reg: 5
};
