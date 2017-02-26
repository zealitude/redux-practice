import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../items';
@Component({
  selector: 'item-detail',
  template: `<div>
              <div>
                <h2 *ngIf="selectedItem.id">Editing {{originalName}}</h2>
                <h2 *ngIf="!selectedItem.id">Create New Item</h2>
              </div>
              <div>
                <form novalidate>
                  <div>
                    <label>Item Name</label>
                    <input [(ngModel)]="selectedItem.name" name="name"
                      placeholder="Enter a name" type="text">
                    </div>
                  <div>
                    <label>Item Description</label>
                    <input [(ngModel)]="selectedItem.description" name="description"
                      placeholder="Enter a description" type="text">
                  </div>
                </form>
                <button type="button" (click)="cancelled.emit(selectedItem)">Cancel</button>
                <button type="submit" (click)="saved.emit(selectedItem)">Save</button>
              </div>
            </div>`,
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  // Every time the "item" input is changed, 
  //  we copy it locally (and keep the original name to display)
  @Input('item')
  set _item(value: Item) {
    if (value) this.originalName = value.name;
    this.selectedItem = Object.assign({}, value);
  }

  selectedItem: Item;
  originalName: string;

  constructor() { }

  ngOnInit() {
  }

  



}