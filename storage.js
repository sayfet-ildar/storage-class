export class Storage {
    constructor(value, storageType = 'local') {
      this.storage = storageType === 'session' ? sessionStorage : localStorage;
      this.value = value;
    }
    
    set() {
      const dataString = JSON.stringify([this.value]);
      this.storage.setItem('names', dataString);
    }
  
    get() {
      return JSON.parse(this.storage.getItem('names')) || [];
    }
  
    clear() {
      this.storage.clear();
    }
  
    isEmpty() {
      const namesValue = this.storage.getItem('names');
      return namesValue === '[""]' || namesValue === null || namesValue === undefined;
  }
}