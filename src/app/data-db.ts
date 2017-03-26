import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const DBS: Weapon[] = [
  { name_photonart: 'ディストラクトウィング(密着)', damage: 823, consumption: 25, frames: 34},
  { name_photonart: 'ディストラクトウィング(遠距離)', damage: 823, consumption: 25, frames: 60},
  { name_photonart: 'ディスパースシュライク', damage: 1260, consumption: 30, frames: 103},
  { name_photonart: 'ヘブンリーカイト', damage: 1273, consumption: 25, frames: 71},
  { name_photonart: 'ジャスティスクロウ', damage: 1197, consumption: 20, frames: 73},
  { name_photonart: 'スターリングフォール(フルヒット)', damage: 3010, consumption: 30, frames: 116},
  { name_photonart: 'ケストレルランページ零式(ギア3補正込)', damage: (2384 + 238) * 2.5, consumption: 40, frames: 192},
  { name_photonart: 'ケストレルランページ零式(ギア3補正込/追撃なし)', damage: (2384 + 238) * 2.5 * 0.76, consumption: 40, frames: 192},
  { name_photonart: 'イモータルダーヴ', damage: 800, consumption: 20, frames: 40},
  { name_photonart: 'フォトンブレード(静止)', damage: 600, consumption: 0, frames: 38},
  { name_photonart: 'フォトンブレード(前)', damage: 600, consumption: 0, frames: 40},
  { name_photonart: 'フォトンブレード(横)', damage: 600, consumption: 0, frames: 39},
  { name_photonart: 'フォトンブレード(後)', damage: 600, consumption: 0, frames: 41},
  { name_photonart: '素振り + フォトンブレード', damage: 600, consumption: 0, frames: 59},
  { name_photonart: 'フィーバーフォトンブレード(静止)', damage: 1560, consumption: 0, frames: 38},
  { name_photonart: 'フィーバーフォトンブレード(前)', damage: 1560, consumption: 0, frames: 40},
  { name_photonart: 'フィーバーフォトンブレード(横)', damage: 1560, consumption: 0, frames: 39},
  { name_photonart: 'フィーバーフォトンブレード(後)', damage: 1560, consumption: 0, frames: 41},
  { name_photonart: '素振り + フィーバーフォトンブレード', damage: 1560, consumption: 0, frames: 59},
  { name_photonart: 'イモータルダーヴ(ギア3補正) + フィーバーフォトンブレード', damage: 800 * 1.2 + 1560, consumption: 0, frames: 40 + 38},
  { name_photonart: 'キャンセルランペ零(ギア3補正込) + ステアタ + ヘブンリーカイト', damage: (2384 + 238) * 2.5 + 1273, consumption: 40 - 4 - 4 + 25, frames: 162 + 46 + 71},
];
export const DBSPEC: Weaponspec = {
  name_weapon: 'Dual Blades', atk1_rest: 7, atk1_frames: 21, atk1_hitcount: 1, atk2_rest: 8, atk2_frames: 19, atk2_hitcount: 1, atk3_rest: 20, atk3_frames: 33, atk3_hitcount: 2
};
