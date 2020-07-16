import { DishesService } from './../../core/services/dishes.service';
import { Component, OnInit, ContentChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Food } from 'src/app/core/models/Food';
import { FoodList } from 'src/app/core/data/FoodList';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DishesListComponent implements OnInit {
  @ContentChild('dishPreview') dishPreviewRef: ElementRef;
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

  /**
   * @param _dishesService DishesService
   */
  constructor(private _dishesService: DishesService) { }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
    // this.dishPreviewRef.nativeElement;
    this.dishes = this._dishesService.getDishes();
    this.pageInfo.totalItems = this.dishes.length;
    this._dishesService.dishChanged.subscribe(
      () => {
        this.dishes = this._dishesService.getDishes();
        this.pageInfo.totalItems = this.dishes.length;
      }
    );
  }

  /**
   * Delete dish
   * @param dishId number
   */
  public deleteAction(dishId: number): void {
    this._dishesService.deleteDish(dishId);
  }

  /**
   * Pagination
   * @param page number
   */
  public paginate(page: number): void {
    this.pageInfo.pageNumber = page;
  }

}
