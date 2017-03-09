import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const GSS: Weapon[] = [
  { name_photonart: 'トライインパクト零式', damage: 1239, consumption: 25, frames: 70},
  { name_photonart: 'レイジダンス', damage: 1191, consumption: 20, frames: 92},
  { name_photonart: 'エインラケーテン', damage: 1219, consumption: 20, frames: 81},
  { name_photonart: 'サーペントエア', damage: 1210, consumption: 20, frames: 53},
  { name_photonart: 'エイミングショット(チャージ)', damage: 813, consumption: 28, frames: 69},
  { name_photonart: 'スリラープロード', damage: 1030.8, consumption: 25, frames: 73},
  { name_photonart: 'スラッシュレイヴ', damage: 2870, consumption: 30, frames: 146},
  { name_photonart: 'アディションバレット(蹴りあり)', damage: 712, consumption: 28, frames: 68},
  { name_photonart: 'アディションバレット(蹴りなし)', damage: 534, consumption: 28, frames: 60},
  { name_photonart: 'クライゼンシュラーク(フルヒット)', damage: 2408, consumption: 28, frames: 133},
  { name_photonart: 'レーゲンシュラーク', damage: 1404, consumption: 30, frames: 124},
  { name_photonart: 'レーゲンシュラーク(打撃のみ)', damage: 772, consumption: 30, frames: 52},
  { name_photonart: 'シュトレツヴァイ(打撃)', damage: 1522, consumption: 25, frames: 104},
  { name_photonart: 'シュトレツヴァイ(射撃)', damage: 304.4, consumption: 25, frames: 24},
  { name_photonart: 'シュトレツヴァイ(派生)', damage: 1826.4, consumption: 35, frames: 111},
];
export const GSSPEC: Weaponspec = {
  name_weapon: 'Gunslash', atk1_rest: 5, atk1_frames: 21, atk2_rest: 6, atk2_frames: 25, atk3_rest: 9, atk3_frames: 14, reg: 5
};
