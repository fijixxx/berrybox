import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const JBS: Weapon[] = [
  { name_photonart: 'ストライクガスト(チャージ2 + 派生)', damage: 2574, consumption: 25, frames: 218},
  { name_photonart: 'グランウェイブ(派生なし)', damage: 1859, consumption: 30, frames: 106},
  { name_photonart: 'グランウェイブ(派生あり)', damage: 2179, consumption: 30, frames: 132},
  { name_photonart: 'モーメントゲイル(派生なし)', damage: 1256, consumption: 30, frames: 130},
  { name_photonart: 'モーメントゲイル(派生あり)', damage: 3140, consumption: 30, frames: 398},
  { name_photonart: 'ヴィントジーカー(派生ギア3)', damage: 4427, consumption: 35, frames: 132},
];
export const JBSPEC: Weaponspec = {
  name_weapon: 'Jet Boots', atk1_rest: 5, atk1_frames: 24, atk1_hitcount:1 ,atk2_rest: 12, atk2_frames: 24, atk2_hitcount: 2, atk3_rest: 9, atk3_frames: 36, atk3_hitcount: 1
};
