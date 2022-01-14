import { Component, OnInit } from '@angular/core';
import { SmartMenuService } from './smart-menu.service';

@Component({
  selector: 'app-smart-menu',
  templateUrl: './smart-menu.component.html',
  styleUrls: ['./smart-menu.component.scss']
})
export class SmartMenuComponent implements OnInit {

  public tableNumber: number;
  constructor(private smartMenuService: SmartMenuService) {
      this.tableNumber = 1;
  }

  ngOnInit(): void {
  }

  public callWaiter(): void{
    this.smartMenuService.callWaiter(this.tableNumber);
  }

}
