import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'atata'},
      { id: 2, name: 'atat2'}
    ];
    this._brands = [
      { id: 1, name: 'brand1'},
      { id: 2, name: 'brand2'}
    ];
    this._devices = [
      { id: 1, name: 'atata', rating: 5},
      { id: 2, name: 'atata2', rating: 5},
      { id: 3, name: 'atata', rating: 5},
      { id: 4, name: 'atata2', rating: 5},
      { id: 5, name: 'atata', rating: 5},
      { id: 6, name: 'atata2', rating: 5}
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }
  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }

}