import { Food } from './../../core/models/Food';
import { DishesService } from './../../core/services/dishes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DishForm } from 'src/app/core/form/DishForm';
import { Router, ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/core/models/Ingredient';
import { IngredientsList } from 'src/app/core/data/IngredientsList';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit {
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
  selectedTag: Object = {
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
   * @param _activatedRoute ActivatedRoute
   * @param _router Router
   * @param _dishesService DishesService
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _dishesService: DishesService
  ) { }

  /**
   * @inheritdoc
   */
  ngOnInit(): void {
  }

  /**
   * Move uploaded file to local directory and returns url
   * @param event any
   * @returns void
   */
  detectFiles(event): void {
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
  deleteImage(url: string): void{
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
*/

  /**
   * Add dish
   * @param newDish Food
   * @returns void
   */
  add(newDish: Food): void {
    this._dishesService.addDish(newDish);
    this._router.navigate(['/dishes']);
  }

  /**
   * Back button
   * @returns void
   */
  backButton(): void {
    this._router.navigate(['/dishes']);
  }
}
