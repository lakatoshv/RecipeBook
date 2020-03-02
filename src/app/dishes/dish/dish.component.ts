import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/core/services/GlobalsService';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/core/models/Food';
import { FoodList } from 'src/app/core/data/FoodList';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  public selectedTab: string = "description";
  public dish: Food;

  private _dishId: number;

  constructor(
    private _globalService: GlobalService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._dishId = parseInt(this._globalService.getRouteParam('id', this._activatedRoute));
    this.getDish(this._dishId);
  }

  public selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  public getDish(dishId: number): void {
    this.dish = FoodList[dishId];
  }

  public deleteAction(id: number): void {
  }
}
