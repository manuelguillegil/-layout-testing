import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-grid-section',
  templateUrl: './grid-section.component.html',
  styleUrls: ['./grid-section.component.scss']
})
export class GridSectionComponent implements OnInit {

  itemsList = [];
  modalData = '';
  newItemsBackground = '';

  constructor(
    private itemsService: ItemsService,
  ) { }

  ngOnInit() {
    this.itemsService.getItems().then(items => {
      this.itemsList = items;  
    });
  }

  onItemClick(itemImage) {
    this.modalData = itemImage;
  }

  onHoverItem(item) {
    if(item === 4) {
      this.newItemsBackground = 'fourth-item-background';   
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
