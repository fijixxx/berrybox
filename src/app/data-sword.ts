import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const SWORDS: Weapon[] = [
  { name_photonart: 'ライジングエッジ(チャージ2)', damage: 2010, consumption: 20, frames: 40 + 106},
  { name_photonart: 'ツイスターフォール零式(最短, 空中発動)', damage: (2549 + 254) * (0.05 + 0.05 + 0.25 + 0.18 + 0.09), consumption: 30, frames: 85},
  { name_photonart: 'ツイスターフォール零式(フルヒット, 空中発動)', damage: (2549 + 254) * 1.37, consumption: 30, frames: 270},
  { name_photonart: 'ノヴァストライク(チャージ2)', damage: 1895, consumption: 20, frames: 40 + 122},
  { name_photonart: 'ライドスラッシャー(チャージ2, 空中発動)', damage: 2214, consumption: 25, frames: 50 + 96},
  { name_photonart: 'オーバーエンド(ギア3)', damage: 2947 * 1.4, consumption: 40, frames: 298},
  { name_photonart: 'スタンコンサイド', damage: 476, consumption: 15, frames: 32},
  { name_photonart: 'ソニックアロウ(ギア3)', damage: 396 * 0.5 * 3, consumption: 25, frames: 40},
  { name_photonart: 'JGソニックアロウ(ギア3,JA関連スキル割引)', damage: 396 * 0.5 * 3 * 2.2 / 1.1 / 1.1 / 1.1 / 1.3, consumption: 0, frames: 40},
  { name_photonart: 'クルーエルスロー(地上)', damage: 1580, consumption: 20, frames: 126},
  { name_photonart: 'ギルティブレイク(チャージ2)', damage: 1100, consumption: 20, frames: 20 + 52},
  { name_photonart: 'イグナイトパリング', damage: 1534 * (0.1 * 4 + 0.3 * 2), consumption: 25, frames: 190},
  { name_photonart: 'JGイグナイトパリング', damage: 1534 * (0.3 + 0.1 * 3 + 0.7 * 2), consumption: 15, frames: 160},
];
export const SWORDSPEC: Weaponspec = {
  name_weapon: 'Sword', atk1_rest: 9, atk1_frames: 48, atk1_hitcount: 1, atk2_rest: 9, atk2_frames: 40, atk2_hitcount: 1, atk3_rest: 10, atk3_frames: 52, atk3_hitcount: 1
};
