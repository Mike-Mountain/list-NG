import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ListStore } from './list.store';
import {ListState} from "./list.model";

@Injectable({ providedIn: 'root' })
export class ListQuery extends QueryEntity<ListState> {

  constructor(override store: ListStore) {
    super(store);
  }

}
