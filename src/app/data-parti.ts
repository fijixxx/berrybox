import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const PARTIS: Weapon[] = [
  { name_photonart: 'スライドシェイカー', damage: 1512, consumption: 20, frames: 136},
  { name_photonart: 'スピードレイン', damage: 1395, consumption: 20, frames: 118},
  { name_photonart: 'ピークアップスロー', damage: 2124, consumption: 15, frames: 156},
  { name_photonart: 'トリックレイヴ(6ヒット)', damage: 2101, consumption: 20, frames: 191},
  { name_photonart: 'スライドエンド', damage: 1133, consumption: 28, frames: 80},
  { name_photonart: 'アサルトバスター', damage: 1055, consumption: 28, frames: 76},
  { name_photonart: 'バンタースナッチ', damage: 1056, consumption: 15, frames: 78},
  { name_photonart: 'ティアーズグリッド', damage: 3682, consumption: 45, frames: 232},
];
export const PARTISPEC: Weaponspec = {
  name_weapon: 'Partizan', atk1_rest: 6, atk1_frames: 34, atk2_rest: 6, atk2_frames: 32, atk3_rest: 9, atk3_frames: 30, reg: 5
};
