import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private _storage: Storage

  constructor() {
    this._storage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this._storage) {
      this._storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this._storage) {
      return JSON.parse(this._storage.getItem(key)!);
    }
    return null;
  }

  remove(key: string): boolean {
    if (this._storage) {
      this._storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this._storage) {
      this._storage.clear();
      return true;
    }
    return false;
  }
}
