import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const KATANAS: Weapon[] = [
  { name_photonart: 'ツキミサザンカ', damage: 715, consumption: 15, frames: 26},
  { name_photonart: 'ゲッカザクロ', damage: 825, consumption: 15, frames: 72},
  { name_photonart: 'ゲッカザクロ(空中最速)', damage: 825, consumption: 15, frames: 22},
  { name_photonart: 'ツキミゲッカ', damage: 1540, consumption: 30, frames: 57},
  { name_photonart: 'カンランキキョウ(JC補正込)', damage: 458 * 1.1, consumption: 25, frames: 46},
  { name_photonart: 'サクラエンド(JC補正込)', damage: 1450 * 1.1, consumption: 25, frames: 75},
  { name_photonart: 'ヒエンツバキ', damage: 1429, consumption: 25, frames: 80},
  { name_photonart: 'アサギリレンダン', damage: 1562, consumption: 30, frames: 132},
  { name_photonart: 'ハトウリンドウ(先端, JC補正込)', damage: 1791 * 0.84 * 1.1, consumption: 30, frames: 63},
  { name_photonart: 'ハトウリンドウ(フルヒット, JC補正込)', damage: 1791 * 1.1, consumption: 30, frames: 63},
  { name_photonart: 'シュンカシュンラン', damage: 2989, consumption: 30, frames: 227},
  { name_photonart: 'フドウクチナシ', damage: 198, consumption: 30, frames: 28},
  { name_photonart: 'グレンテッセン', damage: 1480, consumption: 20, frames: 64},
  { name_photonart: 'カザンナデシコ零式(チャージ補正込)', damage: (2151 + 215) * 1.1, consumption: 50 - 10, frames: 180},
  { name_photonart: 'サクラエンド零式(派生JC補正込)', damage: (1255 + 125) * 0.45 + (1255 + 125) * 0.55 * 1.1, consumption: 25, frames: 52},
  { name_photonart: 'サクラ零 + ゲッカ', damage: (1255 + 125) * 0.45 + (1255 + 125) * 0.55 * 1.1 + 825, consumption: 25 + 15, frames: 52 + 22},
];
export const KATANASPEC: Weaponspec = {
  name_weapon: 'Katana', atk1_rest: 6, atk1_frames: 24, atk1_hitcount: 1, atk2_rest: 6, atk2_frames: 24, atk2_hitcount: 1, atk3_rest: 12, atk3_frames: 36, atk3_hitcount: 2
};
