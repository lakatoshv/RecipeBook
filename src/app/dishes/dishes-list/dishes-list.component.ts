import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/core/models/Food';
import { FoodList } from 'src/app/core/data/FoodList';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit {
  /**
   * @param dishes Food[]
   */
  public dishes: Food[] = FoodList;

  /**
   * @param pageInfo Object
   */
  public pageInfo: any = {
    pageSize: 3,
    pageNumber: 0,
    totalItems: 0
  };

  constructor() { }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
    this.pageInfo.totalItems = this.dishes.length;
  }

  /**
   * Delete dish
   * @param dishId number
   */
  public deleteAction(dishId: number): void {
    // if(this.loggedIn){
      const index = this.dishes.findIndex(x => x.id === dishId);
      if (index > -1){
        this.dishes.splice(index, 1);
        this.pageInfo.totalItems -= 1;
      }
    // }
  }

  /**
   * Pagination
   * @param page number
   */
  public paginate(page: number): void {
    this.pageInfo.pageNumber = page;
  }

}
