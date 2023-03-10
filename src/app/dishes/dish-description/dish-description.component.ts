import { Ingredient } from 'src/app/core/models/Ingredient';
import { Food } from 'src/app/core/models/Food';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dish-description',
  templateUrl: './dish-description.component.html',
  styleUrls: ['./dish-description.component.scss']
})
export class DishDescriptionComponent implements OnInit {
  @Input("dish") dish: Food | undefined;
  constructor() { }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
  }

}
