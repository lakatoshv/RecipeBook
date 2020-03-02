import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DishForm } from 'src/app/core/form/DishForm';
import { Router, ActivatedRoute } from '@angular/router';
import { Ingradient } from 'src/app/core/models/Ingradient';
import { IngradientsList } from 'src/app/core/data/IngradientsList';
import { Food } from 'src/app/core/models/Food';
import { FoodList } from 'src/app/core/data/FoodList';
import { GlobalService } from 'src/app/core/services/GlobalsService';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.scss']
})
export class EditDishComponent implements OnInit {
  dishForm: FormGroup = new DishForm().dishForm;
  ingredients: Ingradient[] = [];
  ingradientList: Ingradient[] = IngradientsList;
  urls = new Array<string>();

  
  public dish: Food;

  tagLabel = 'Додати новий тег';
  action = 'add';
  selectedTag = {
    value: '',
    id: null
  };
  
  public options: Object = {
    plugins: 'media autolink autoresize autoresize charmap code textcolor colorpicker contextmenu directionality emoticons fullscreen help hr image imagetools importcss insertdatetime legacyoutput link lists noneditable pagebreak paste preview print save searchreplace tabfocus table template textcolor textpattern toc visualblocks visualchars wordcount',
    menubar: 'insert tools view format edit file table',
    toolbar: 'media charmap code forecolor backcolor ltr rtl emoticons fullscreen help image insertdatetime link numlist bullist pagebreak paste preview print save searchreplace table template textcolor toc visualblocks visualchars'
  };
  private _dishId: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _globalService: GlobalService
  ) { }

  ngOnInit() {
    this._dishId = parseInt(this._globalService.getRouteParam('id', this._activatedRoute));
    this._getDish(this._dishId);
  }

  detectFiles(event) {
    this.urls = [];
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

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
    this._router.navigate(['/']);
  }
  */

  edit(): void {}
  delete(): void {}
  backButton(): void {
    this._router.navigate(['/']);
  }

  private _getDish(dishId: number): void{
    this.dish = FoodList[dishId];
    this._setFormData(this.dish);
  }

  private _setFormData(dish: Food): void{
    this.dishForm.get('name').setValue(dish.name);
    this.dishForm.get('price').setValue(dish.price);
    this.dishForm.get('preview').setValue(dish.preview);
    this.ingredients = dish.ingradients
    this.dishForm.get('description').setValue(dish.description);
    this.dishForm.get('type').setValue(dish.type);
    this.urls = dish.images;
  }
}
