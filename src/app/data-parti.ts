import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const PARTIS: Weapon[] = [
  { name_photonart: 'スライドシェイカー', damage: 1512 * (0.1 * 5 + 0.5), consumption: 20, frames: 136},
  { name_photonart: 'スピードレイン', damage: 1395 * (0.2 * 5), consumption: 20, frames: 118},
  { name_photonart: 'ピークアップスロー', damage: 2124 * (0.15 + 0.15 + 0.15 + 0.55), consumption: 15, frames: 156},
  { name_photonart: 'トリックレイヴ(6ヒット)', damage: 1751 * (0.2 * 3 + 0.2 * 3), consumption: 20, frames: 191},
  { name_photonart: 'スライドエンド(チャージ)', damage: 1133, consumption: 28, frames: 32 + 48},
  { name_photonart: 'アサルトバスター(チャージ)', damage: 1055, consumption: 28, frames: 32 + 44},
  { name_photonart: 'バンタースナッチ', damage: 1056, consumption: 15, frames: 78},
  { name_photonart: 'ティアーズグリッド', damage: 3682, consumption: 45, frames: 232},
  { name_photonart: 'ライジングフラッグ零式(至近距離)', damage: (820 + 81), consumption: 30 - 10, frames: 63},
  { name_photonart: 'セイクリッドスキュア零式', damage: (1153 + 115) / 1.1 * 1.2, consumption: 30, frames: 61 + 52},
];
export const PARTISPEC: Weaponspec = {
  name_weapon: 'Partizan', atk1_rest: 6, atk1_frames: 34, atk1_hitcount: 1, atk2_rest: 6, atk2_frames: 32, atk2_hitcount: 1, atk3_rest: 9, atk3_frames: 30, atk3_hitcount: 1
};
