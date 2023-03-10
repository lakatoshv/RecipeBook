import { DishesService } from './../../core/services/dishes.service';
import { Component, NgIterable, OnInit } from '@angular/core';
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
  /**
   * @param selectedTab string
   */
  public selectedTab: string = "description";

  /**
   * @param dish Food | undefined
   */
  public dish: Food | undefined;

  /**
   * @param _dishId number | undefined
   */
  private _dishId: number | undefined;
index: (string[]&NgIterable<string>)|null|undefined;

  /**
   * @param _globalService GlobalService
   * @param _activatedRoute ActivatedRoute
   * @param _dishesService DishesService
   */
  constructor(
    private _globalService: GlobalService,
    private _activatedRoute: ActivatedRoute,
    private _dishesService: DishesService
  ) { }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
    this._dishId = parseInt(this._globalService.getRouteParam('id', this._activatedRoute) ?? '', undefined);
    this.getDish(this._dishId);
  }

  /**
   * Change tab content
   * @param tab string
   */
  public selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  /**
   * Get dish
   * @param dishId number
   */
  public getDish(dishId: number): void {
    this.dish = this._dishesService.getDish(dishId);
  }

  /**
   * Delete dish
   * @param id number
   */
  public deleteAction(id: number): void {
  }
}
