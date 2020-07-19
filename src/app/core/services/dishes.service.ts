import { Injectable, EventEmitter } from '@angular/core';
import { Food } from '../models/Food';
import { FoodList } from '../data/FoodList';
import { sortBy } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  /**
   * @param dishChanged EventEmitter<boolean>
   */
  dishChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * @param _dishes Food[]
   */
  private _dishes: Food[] = FoodList;

  constructor() { }

  /**
   * Get Dishes.
   * @param search string
   * @param searchFilter string[]
   * @returns Food[]
   */
  public getDishes(search: string = null, searchFilter: string[] = []): Food[] {
    let dishes = this._dishes;
    searchFilter = searchFilter.filter(x => x !== null);

    if (search !== null) {
      dishes = dishes.filter(dish =>
        dish.name.includes(search)
        || dish.description.includes(search)
        || dish.type.includes(search));
    }

    /*
    if (searchFilter.length > 0) {
      // posts = posts.filter(post => post.TagsList.every(x => x.Title.includes(searchFilter)));
      const filteredPosts = [];
      dishes = dishes.map(post => {
        const found = post.TagsList.filter(tag => (searchFilter.includes(tag.Title)));
        if (found.length > 0) {
          filteredPosts.push(post);
        }
      });
      posts = filteredPosts;
    }
    */

    return dishes;
  }

  /**
   * Sort dishes.
   * @param sort string
   * @returns Food[]
   */
  public sort(sort: string): Food[] {
    return sortBy(Object.values(this.getDishes()), [sort]);
  }

  /**
   * Get dish by id.
   * @param id number
   * @returns Food
   */
  public getDish(id: number): Food {
    return this._dishes[id];
  }

  /**
   * Add new dish.
   * @param dish Food
   * @returns void
   */
  public addDish(dish: Food): void {
    if (this._dishes.findIndex(x => x.name === dish.name) > -1) {
      return;
    }
    dish.id = this._dishes.length + 1;
    this._dishes.unshift(dish);
    this.dishChanged.emit(true);
  }

  /**
   * Edit dish by id.
   * @param id number
   * @param dish Post
   */
  public editDish(id: number, dish: Food): void {
    if (id > -1) {
      this._dishes[id] = dish;
    }
    this.dishChanged.emit(true);
  }

  /**
   * Like dish.
   * @param id number
   * @returns void
   * /
  public like(id: number): void {
    this._dishes[id].Likes++;
    this.dishChanged.emit(true);
  }

  /**
   * Dislike dish.
   * @param id number
   * @returns void
   * /
  public dislike(id: number): void {
    this._dishes[id].Dislikes++;
    this.dishChanged.emit(true);
  }
  */

  /**
   * Delete dish by id.
   * @param id number
   * @returns void
   */
  public deleteDish(id: number): void {
    const index = this._dishes.findIndex(x => x.id === id);
    if (index > -1) {
      this._dishes.splice(index, 1);
      this.dishChanged.emit(true);
    }
  }
}
