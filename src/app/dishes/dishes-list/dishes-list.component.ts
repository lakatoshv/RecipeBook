import { DishesService } from './../../core/services/dishes.service';
import { Component, OnInit, ContentChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Food } from 'src/app/core/models/Food';
import { FoodList } from 'src/app/core/data/FoodList';
import { SearchForm } from 'src/app/core/form/SearchForm';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DishesListComponent implements OnInit {
  @ContentChild('dishPreview') dishPreviewRef: ElementRef | undefined;
  /**
   * @param dishes Food[]
   */
  public dishes: Food[] = FoodList;

  /**
   * @param searchForm FormGroup
   */
  public searchForm: FormGroup = new SearchForm().searchForm;

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
    this.dishes = this._dishesService.getDishes(undefined);
    this.pageInfo.totalItems = this.dishes.length;
    this._dishesService.dishChanged.subscribe(
      () => {
        this.dishes = this._dishesService.getDishes(undefined);
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

  /**
   * Search post by Title
   * @param search string
   * @returns void
   */
  public search(search: string): void {
    this.dishes = this._dishesService.getDishes(search, []);
  }

}
