import { Component } from '@angular/core';
import { SWORDS, SWORDSPEC } from "../data-sword";
import { WIREDS, WIREDSPEC } from "../data-wired";

@Component({
  selector: 'app-index-weapon',
  templateUrl: './index-weapon.component.html',
  styleUrls: ['./index-weapon.component.css']
})
export class IndexWeaponComponent {

  index_sword = [SWORDS, SWORDSPEC];
  index_wired = [WIREDS, WIREDSPEC];

  index_weapons = [this.index_sword, this.index_wired];

  selectedWeapon;

  onSelect(index_weapon){
    this.selectedWeapon = index_weapon;
 }

}
