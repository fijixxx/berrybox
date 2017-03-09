import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const TDS: Weapon[] = [
  { name_photonart: 'レイジングワルツ', damage: 375, consumption: 25, frames: 45},
  { name_photonart: 'シュートポルカ', damage: 1035, consumption: 18, frames: 60},
  { name_photonart: 'スケアフーガ', damage: 1563.75, consumption: 20, frames: 120},
  { name_photonart: 'ワイルドラプソディ零式', damage: 887, consumption: 20, frames: 52},
  { name_photonart: 'ダークスケルツォ', damage: 989, consumption: 20, frames: 78},
  { name_photonart: 'クイックマーチ', damage: 1159, consumption: 20, frames: 60},
  { name_photonart: 'シンフォニックドライブ', damage: 942, consumption: 25, frames: 52},
  { name_photonart: 'オウルスケトラー', damage: 1962, consumption: 25, frames: 144},
  { name_photonart: 'ブラッディサラバンド', damage: 1300, consumption: 30, frames: 126},
  { name_photonart: 'ファセットフォリア', damage: 1871, consumption: 30, frames: 178},
];
export const TDSPEC: Weaponspec = {
  name_weapon: 'Twin Daggers', atk1_rest: 5, atk1_frames: 28, atk2_rest: 6, atk2_frames: 26, atk3_rest: 10, atk3_frames: 36, reg: 5
};
