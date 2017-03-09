import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

export const KNUCKLESS: Weapon[] = [
  { name_photonart: 'ダッキングブロウ', damage: 843, consumption: 18, frames: 52},
  { name_photonart: 'フリッカージャブ', damage: 731, consumption: 16, frames: 40},
  { name_photonart: 'ペンデュラムロール', damage: 1952, consumption: 30, frames: 105},
  { name_photonart: 'スライドアッパー', damage: 715, consumption: 20, frames: 42},
  { name_photonart: 'スライドアッパー零式(最速JA)', damage: 1144, consumption: 20, frames: 53},
  { name_photonart: 'スライドアッパー零式(フルヒット)', damage: 1716, consumption: 20, frames: 77},
  { name_photonart: 'クエイクハウリング(低空)', damage: 553, consumption: 20, frames: 38},
  { name_photonart: 'サプライズナックル', damage: 1281.12, consumption: 20, frames: 68},
  { name_photonart: 'バックハンドスマッシュ(ギア3補正込)', damage: 1510, consumption: 40, frames: 48},
  { name_photonart: 'メテオフィスト(はずれ)', damage: 237.75, consumption: 30, frames: 127},
  { name_photonart: 'メテオフィスト(ふつう)', damage: 970.02, consumption: 30, frames: 127},
  { name_photonart: 'メテオフィスト(あたり)', damage: 3956.16, consumption: 30, frames: 127},
  { name_photonart: 'ストレイトチャージ', damage: 1287, consumption: 15, frames: 66},
  { name_photonart: 'ストレイトチャージ零式(110PP使い切り)', damage: 8668, consumption: 110, frames: 360},
  { name_photonart: 'ストレイトチャージ零式(200PP使い切り)', damage: 17758, consumption: 200, frames: 720},
  { name_photonart: 'ハートレスインパクト', damage: 629, consumption: 25, frames: 36},
];
export const KNUCKLESSPEC: Weaponspec = {
  name_weapon: 'Knuckels', atk1_rest: 5, atk1_frames: 20, atk2_rest: 6, atk2_frames: 26, atk3_rest: 10, atk3_frames: 24, reg: 5
};
