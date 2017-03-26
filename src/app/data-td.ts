import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const TDS: Weapon[] = [
  { name_photonart: 'シュートポルカ', damage: 1035 * (0.34 * 3), consumption: 18, frames: 60},
  { name_photonart: 'スケアフーガ(ギア3特殊補正込)', damage: 1251 * 1.25, consumption: 20, frames: 120},
  { name_photonart: 'ワイルドラプソディ零式', damage: (807 + 80), consumption: 30 - 10, frames: 52},
  { name_photonart: 'ダークスケルツォ', damage: 989, consumption: 20, frames: 78},
  { name_photonart: 'クイックマーチ', damage: 1159, consumption: 20, frames: 60},
  { name_photonart: 'シンフォニックドライブ(空中最短)', damage: 942, consumption: 25, frames: 52},
  { name_photonart: 'オウルケストラー', damage: 1962, consumption: 25, frames: 115},
  { name_photonart: 'ブラッディサラバンド', damage: 1300, consumption: 30, frames: 126},
  { name_photonart: 'ファセットフォリア', damage: 1871, consumption: 30, frames: 178},
];
export const TDSPEC: Weaponspec = {
  name_weapon: 'Twin Daggers', atk1_rest: 5, atk1_frames: 28, atk1_hitcount: 2, atk2_rest: 6, atk2_frames: 26, atk2_hitcount: 2, atk3_rest: 10, atk3_frames: 36, atk3_hitcount: 2
};
