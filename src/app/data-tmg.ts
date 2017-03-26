import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const TMGS: Weapon[] = [
  { name_photonart: 'エリアルシューティング(SC)', damage: 1643 * (0.2 + 0.4 * 2), consumption: 15, frames: 82},
  { name_photonart: 'バレットスコール零式(空中最長, ギア3特殊補正のみ有り)', damage: (1442 + 144) * (0.26 + 0.07 * 25) / 1.3, consumption: 30, frames: 277},
  { name_photonart: 'デッドアプローチ(密着)', damage: 613, consumption: 15, frames: 30},
  { name_photonart: 'メシアタイム(空中, 連打最大フルヒット)', damage: 2037 * (0.05 * 30), consumption: 30, frames: 288},
  { name_photonart: 'インフィニティファイア零式(SC)', damage: (2359 + 235) * (0.02 + 0.5), consumption: 35, frames: 81},
  { name_photonart: 'サテライトエイム', damage: 724, consumption: 20, frames: 50},
  { name_photonart: 'エルダーリベリオン', damage: 1684, consumption: 32, frames: 172},
  { name_photonart: 'リバースタップ(空中)', damage: 967, consumption: 20, frames: 88},
  { name_photonart: 'ヒールスタッブ(SC, 空中)', damage: 1479 * (0.23 + 0.33 + 0.11 * 6), consumption: 20, frames: 112},
  { name_photonart: 'シフトピリオド', damage: 1268 * (0.08 * 6 + 0.18 * 3), consumption: 30, frames: 142},
  { name_photonart: 'グリムバラージュ(最短, JA1回目)', damage: 760 * (0.16 * 2), consumption: 20, frames: 32},
  { name_photonart: 'グリムバラージュ(最短, JA2回目)', damage: 760 * (0.16 * 2 + 0.17 * 4), consumption: 20, frames: 78},
];
export const TMGSPEC: Weaponspec = {
  name_weapon: 'Twin Machine Guns', atk1_rest: 1 + 1 + 1 + 1 , atk1_frames: 36, atk1_hitcount: 4, atk2_rest: 1 + 1 + 1 + 1, atk2_frames: 40, atk2_hitcount: 4, atk3_rest: 1 + 1 + 1 + 1 + 1, atk3_frames: 50, atk3_hitcount: 5
};
