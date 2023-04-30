export default class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // preserve the order in which it is added
  }

  get(key) {
 
    const value = this.cache.get(key);
    if(value === undefined) {
        return -1
    }
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    this.cache.delete(key);

    if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
      this.cache.set(key, value);
    } else {
      this.cache.set(key, value);
    }
  }

  getLeastRecentlyUsed() {
    return Array.from(this.cache)[0];
  }

  getMostRecentlyUsed() {
    return Array.from(this.cache)[this.cache.size - 1];
  }
}
