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
  constructor() { }

  ngOnInit() {

  }

  public deleteAction(dishId: number){
    //if(this.loggedIn){
      let index = this.dishes.findIndex(x => x.id === dishId);
      if (index > -1){
        this.dishes.splice(index, 1);
      }
    //}
  }

}
