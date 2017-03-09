import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const KATANAS: Weapon[] = [
  { name_photonart: 'ツキミサザンカ', damage: 715, consumption: 15, frames: 26},
  { name_photonart: 'ゲッカザクロ', damage: 825, consumption: 15, frames: 72},
  { name_photonart: 'ゲッカザクロ(空中最速)', damage: 825, consumption: 15, frames: 22},
  { name_photonart: 'ツキミゲッカ', damage: 1540, consumption: 30, frames: 57},
  { name_photonart: 'カンランキキョウ', damage: 458, consumption: 25, frames: 46},
  { name_photonart: 'サクラエンド', damage: 1450, consumption: 25, frames: 75},
  { name_photonart: 'ヒエンツバキ', damage: 1429, consumption: 25, frames: 80},
  { name_photonart: 'アサギリレンダン', damage: 1562, consumption: 30, frames: 132},
  { name_photonart: 'ハトウリンドウ(先端)', damage: 1504.44, consumption: 30, frames: 63},
  { name_photonart: 'ハトウリンドウ(フルヒット)', damage: 1791, consumption: 30, frames: 63},
  { name_photonart: 'シュンカシュンラン', damage: 2989, consumption: 30, frames: 227},
  { name_photonart: 'フドウクチナシ', damage: 198, consumption: 30, frames: 28},
  { name_photonart: 'グレンテッセン', damage: 1480, consumption: 20, frames: 64},
];
export const KATANASPEC: Weaponspec = {
  name_weapon: 'Katana', atk1_rest: 6, atk1_frames: 24, atk2_rest: 6, atk2_frames: 24, atk3_rest: 12, atk3_frames: 36, reg: 5
};
