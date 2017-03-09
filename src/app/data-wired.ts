import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const WIREDS: Weapon[] = [
  { name_photonart: 'バインドスルー', damage: 1444, consumption: 20, frames: 96},
  { name_photonart: 'グラップルチャージ(非ホールド)', damage: 1161, consumption: 20, frames: 70},
  { name_photonart: 'ヘブンリーフォール', damage: 1565, consumption: 20, frames: 90},
  { name_photonart: 'アザーサイクロン零式(フルヒット)', damage: 6044.76, consumption: 32, frames: 414},
  { name_photonart: 'アザースピン', damage: 1089, consumption: 28, frames: 116},
  { name_photonart: 'ホールディングカレント', damage: 4939.2, consumption: 30, frames: 274},
  { name_photonart: 'エアポケットスイング', damage: 3989, consumption: 30, frames: 274},
  { name_photonart: 'サーベラスダンス零式', damage: 1797, consumption: 30, frames: 111},
  { name_photonart: 'ワイルドラウンド', damage: 1538, consumption: 28, frames: 123},
];
export const WIREDSPEC: Weaponspec = {
  name_weapon: 'Wired Lances', atk1_rest: 7, atk1_frames: 48, atk2_rest: 10, atk2_frames: 40, atk3_rest: 11, atk3_frames: 52, reg: 5
};
