import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/core/models/Food';
import { FoodList } from 'src/app/core/data/FoodList';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss']
})
export class DishesListComponent implements OnInit {
  public dishes: Food[] = FoodList;

  public pageInfo: any = {
    pageSize: 3,
    pageNumber: 0,
    totalItems: 0
  }

  constructor() { }

  ngOnInit() {
    this.pageInfo.totalItems = this.dishes.length;
  }

  public deleteAction(dishId: number){
    //if(this.loggedIn){
      let index = this.dishes.findIndex(x => x.id === dishId);
      if (index > -1){
        this.dishes.splice(index, 1);
        this.pageInfo.totalItems -= 1;
      }
    //}
  }

  public paginate(page: number){
    this.pageInfo.pageNumber = page;
  }

}
