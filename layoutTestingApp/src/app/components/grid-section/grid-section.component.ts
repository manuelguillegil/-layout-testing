import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-section',
  templateUrl: './grid-section.component.html',
  styleUrls: ['./grid-section.component.scss']
})
export class GridSectionComponent implements OnInit {

  itemsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  modalData = '';
  newItemsBackground = '';

  constructor() { }

  ngOnInit() {
  }

  onItemClick(item) {
    this.modalData = item;
  }

  onHoverItem(item) {
    console.log(item);
    
    if(item === 4) {
      this.newItemsBackground = 'fourth-item-background';
      console.log(this.newItemsBackground);
      
    } else if (item === 10) {
      this.newItemsBackground = 'tenth-item-background';
    }
  }

  onLeaveItem(item){
    if(item === 4) {
      this.newItemsBackground = '';
    } else if (item === 10) {
      this.newItemsBackground = '';
    }
  }

}
