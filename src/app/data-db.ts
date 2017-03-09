import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const DBS: Weapon[] = [
  { name_photonart: 'ディストラクトウィング', damage: 823, consumption: 25, frames: 34},
  { name_photonart: 'ディスパースシュライク', damage: 1260, consumption: 30, frames: 103},
  { name_photonart: 'ヘブンリーカイト', damage: 1273, consumption: 25, frames: 71},
  { name_photonart: 'ジャスティスクロウ', damage: 1197, consumption: 20, frames: 73},
  { name_photonart: 'スターリングフォール(フルヒット)', damage: 3010, consumption: 30, frames: 116},
  { name_photonart: 'ケストレルランページ零式(ギア3補正込)', damage: 6555, consumption: 40, frames: 192},
  { name_photonart: 'ケストレルランページ零式(ギア3補正込/追撃なし)', damage: 4981.8, consumption: 40, frames: 192},
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
  { name_photonart: 'イモータルダーヴ(ギア3補正込) + フィーバーフォトンブレード', damage: 2480, consumption: 0, frames: 78},
  { name_photonart: 'キャンセルランペ零(ギア3補正込) + ステアタ + ヘブンリーカイト', damage: 7828, consumption: 57, frames: 78},
];
export const DBSPEC: Weaponspec = {
  name_weapon: 'Dual Blades', atk1_rest: 7, atk1_frames: 21, atk2_rest: 8, atk2_frames: 19, atk3_rest: 20, atk3_frames: 33, reg: 5
};
