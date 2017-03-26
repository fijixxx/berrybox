import { Component } from '@angular/core';
import { SWORDS, SWORDSPEC } from "../data-sword";
import { WIREDS, WIREDSPEC } from "../data-wired";
import { PARTIS, PARTISPEC } from "../data-parti";
import { TDS, TDSPEC } from "../data-td";
import { DSS, DSSPEC } from "../data-ds";
import { KNUCKLESS, KNUCKLESSPEC } from "../data-knuckles";
import { GSS, GSSPEC } from "../data-gs";
import { KATANAS, KATANASPEC } from "../data-katana";
import { DBS, DBSPEC } from "../data-db";
import {JBS, JBSPEC} from "../data-jb";
import { TMGS, TMGSPEC } from "../data-tmg";

@Component({
  selector: 'app-index-weapon',
  templateUrl: './index-weapon.component.html',
  styleUrls: ['./index-weapon.component.css']
})
export class IndexWeaponComponent {

  //武器ごとのPAと武器性能を読み込み
  index_sword = [SWORDS, SWORDSPEC];
  index_wired = [WIREDS, WIREDSPEC];
  index_parti = [PARTIS, PARTISPEC];
  index_td = [TDS, TDSPEC];
  index_ds = [DSS, DSSPEC];
  index_knuckles = [KNUCKLESS, KNUCKLESSPEC];
  index_gs = [GSS, GSSPEC];
  index_katana = [KATANAS, KATANASPEC];
  index_db = [DBS, DBSPEC];
  index_jb = [JBS, JBSPEC];
  index_tmg = [TMGS, TMGSPEC];

  //ngFor 用に↑をまとめる
  index_weapons = [
    this.index_sword,
    this.index_wired,
    this.index_parti,
    this.index_td,
    this.index_ds,
    this.index_knuckles,
    this.index_gs,
    this.index_katana,
    this.index_db,
    this.index_jb,
    this.index_tmg
  ];

  //detail 表示用
  selectedWeapon;

  onSelect(index_weapon){
    this.selectedWeapon = index_weapon;
 }

}
