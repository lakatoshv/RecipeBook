import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor() { }
  public getRouteParam(idName: string, activatedRoute: ActivatedRoute): string {
    var snapshot = activatedRoute.snapshot;
    return this._getId(idName, snapshot);
  }
  private _getId(idName: string, routeObject: ActivatedRouteSnapshot): string {
    if (!routeObject)
        return null;

    if (routeObject.paramMap.get(idName) !== null)
        return routeObject.paramMap.get(idName);
    else
        return this._getId(idName, routeObject.parent);
  }
}
