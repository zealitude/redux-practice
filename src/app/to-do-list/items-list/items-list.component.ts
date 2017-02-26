import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../items';
@Component({
  selector: 'items-list',
  template: `<div *ngFor="let item of items"
              (click)="selected.emit(item)"
              >
              <div>
                <h2>{{item.name}}</h2>
              </div>
              <div>
                {{item.description}}
              </div>
              <button (click)="deleted.emit(item); $event.stopPropagation();">
                <i class="material-icons">close</i>
              </button>
            </div>
            `,
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() items: Item[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}