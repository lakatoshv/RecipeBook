import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DishForm } from 'src/app/core/form/DishForm';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit {

  public postForm: FormGroup = new DishForm().dishForm;
  public ingradients = [];
  public images = [];
  

  private _tagLabel: string = "Додати новий тег";
  private _action: string = "add";
  private _selectedTag = {
    value: "",
    id: null
  }
  
  public options: Object = {
    plugins: "media autolink autoresize autoresize charmap code textcolor colorpicker contextmenu directionality emoticons fullscreen help hr image imagetools importcss insertdatetime legacyoutput link lists noneditable pagebreak paste preview print save searchreplace tabfocus table template textcolor textpattern toc visualblocks visualchars wordcount",
    menubar: "insert tools view format edit file table",
    toolbar: "media charmap code forecolor backcolor ltr rtl emoticons fullscreen help image insertdatetime link numlist bullist pagebreak paste preview print save searchreplace table template textcolor toc visualblocks visualchars"
  };
  
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  /*
  private clearFormData(){
    this._tagLabel = "Додати новий тег";
    this._action = "add";
    this._selectedTag.value = "";
    this._selectedTag.id = null;

  }

  private _editTag(tag: string): void {
    this._selectedTag.value = tag;
    this._selectedTag.id = this._tags.indexOf(tag);
    this._action = "edit";
    this._tagLabel = "Редагувати тег";
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

  private _add(post: any){
    this.postForm.value.id = 0;
    this.postForm.value.tags = this._tags.join(", ");
    this._router.navigate(["/"]);
  }

  private _backButton(): void{
    this._router.navigate(["/"]);
  }
  */
}
