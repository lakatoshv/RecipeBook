import { DishesService } from './../../core/services/dishes.service';
import { Component, NgIterable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DishForm } from 'src/app/core/form/DishForm';
import { Router, ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/core/models/Ingredient';
import { IngredientsList } from 'src/app/core/data/IngredientsList';
import { Food } from 'src/app/core/models/Food';
import { FoodList } from 'src/app/core/data/FoodList';
import { GlobalService } from 'src/app/core/services/GlobalsService';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.scss']
})
export class EditDishComponent implements OnInit {
  /**
   * @param dishForm FormGroup
   */
  dishForm: FormGroup = new DishForm().dishForm;

  /**
   * @param ingredients Ingredient[]
   */
  ingredients: Ingredient[] = [];

  /**
   * @param ingredientList Ingredient[]
   */
  ingredientList: Ingredient[] = IngredientsList;

  /**
   * @param urls Array<string>
   */
  urls: Array<string> = new Array<string>();

  /**
   * @param dish Food | undefined
   */
  public dish: Food | undefined;

  /**
   * @param tagLabel string
   */
  tagLabel = 'Додати новий тег';

  /**
   * @param action string
   */
  action = 'add';

  /**
   * @param selectedTag Object
   */
  selectedTag = {
    value: '',
    id: null
  };
  
  /**
   * @param options Object TinyMce options
   */
  public options: Object = {
    plugins: 'media autolink autoresize autoresize charmap code textcolor colorpicker contextmenu directionality emoticons fullscreen help hr image imagetools importcss insertdatetime legacyoutput link lists noneditable pagebreak paste preview print save searchreplace tabfocus table template textcolor textpattern toc visualblocks visualchars wordcount',
    menubar: 'insert tools view format edit file table',
    toolbar: 'media charmap code forecolor backcolor ltr rtl emoticons fullscreen help image insertdatetime link numlist bullist pagebreak paste preview print save searchreplace table template textcolor toc visualblocks visualchars'
  };

  /**
   * @param _dishId number
   */
  private _dishId: number | undefined;
index: (string[]&NgIterable<string>)|null|undefined;

  /**
   * @param _activatedRoute ActivatedRoute
   * @param _router Router
   * @param _globalService GlobalService
   * @param _dishesService DishesService
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _globalService: GlobalService,
    private _dishesService: DishesService,
    // private _route: Route
  ) { }

  /**
   * @inheritdoc
   */
  ngOnInit() {
    this._dishId = parseInt(this._globalService.getRouteParam('id', this._activatedRoute) ?? '', undefined);
    this._getDish(this._dishId);
  }

  /**
   * Move uploaded file to local directory and returns url
   * @param event any
   * @returns void
   */
  detectFiles(event: any): void {
    this.urls = [];
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  /**
   * Delete image
   * @param url string
   * @returns void
   */
  deleteImage(url: string): void {
    this.urls.splice( this.urls.indexOf(url), 1 );
  }
  /*
  private clearFormData(){
    this._tagLabel = "Додати новий тег";
    this._action = "add";
    this._selectedTag.value = "";
    this._selectedTag.id = null;

  }
  editIngradient(ingradient: Ingradient): void {
    this.selectedTag.value = tag;
    this.selectedTag.id = this.tags.indexOf(tag);
    this.action = "edit";
    this.tagLabel = "Редагувати тег";
  }

  private _onAddTagAction(tag: any){
    this._tags.unshift(tag);
    this.clearFormData();
  }
  private _onEditTagAction(tag){
    let index = this._selectedTag.id;
    if (index > -1){
      this._tags[index] = tag;
      this.clearFormData();
    }
  }
  private _onDeleteTagAction(tag){
    let index = this._tags.indexOf(tag);
    if (index > -1)
      this._tags.splice(index, 1);
  }

  private _tagAction(tag: string, action: string): void {
    if(action === "add") this._onAddTagAction(tag);
    if(action === "edit") this._onEditTagAction(tag);
  }

  add(): void {
    /*this.postForm.value.id = 0;
    this.postForm.value.tags = this._tags.join(', ');
    this._router.navigate(['/'], { relativeTo: this._route });
  }
  */

  /**
   * Edit dist
   * @param dish Food
   * @returns void
   */
  edit(dish: Food): void {
    if(this._dishId) {
      dish.id = this._dishId;
      this._dishesService.editDish(this._dishId, dish);
      this._router.navigate(['/dishes']/*, { relativeTo: this._route } */);
    }
    
  }

  /**
   * Delete dish
   * @returns void
   */
  delete(): void {
    if(this._dishId) {
      this._dishesService.deleteDish(this._dishId);
      this._router.navigate(['/dishes'/*, { relativeTo: this._route } */]);
    }
  }

  /**
   * Back button
   * @returns void
   */
  backButton(): void {
    this._router.navigate(['/dishes'/*, { relativeTo: this._route } */]);
  }

  /**
   * Get dish
   * @param dishId number
   * @returns void
   */
  private _getDish(dishId: number): void {
    this.dish = this._dishesService.getDish(dishId);
    this._setFormData(this.dish);
  }

  /**
   * Set form data
   * @param dish Food
   * @returns void
   */
  private _setFormData(dish: Food): void {
    this.dishForm.get('name')?.setValue(dish.name);
    this.dishForm.get('price')?.setValue(dish.price);
    this.dishForm.get('preview')?.setValue(dish.preview);
    this.ingredients = dish.ingredients;
    this.dishForm.get('description')?.setValue(dish.description);
    this.dishForm.get('type')?.setValue(dish.type);
    this.dishForm.get('price')?.setValue(dish.price);
    this.urls = dish.images;
  }
}
