class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const node = new Node(data);
      if (!this.root) {
        this.root = node;
      } else {
        let current = this.root;
        while (true) {
          if (data.id < current.data.id) {
            if (!current.left) {
              current.left = node;
              return this;
            } else {
              current = current.left;
            }
          } else {
            if (!current.right) {
              current.right = node;
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
  
    lookup(id) {
      if (!this.root) {
        return -1;
      }
  
      if (this.root.data.id === id) {
        return this.root.data;
      } else {
        let current = this.root;
        while (current) {
          if (id < current.data.id) {
            if (!current.left) {
              return -1;
            } else {
              current = current.left;
            }
          } else if (id > current.data.id) {
            if (!current.right) {
              return -1;
            } else {
              current = current.right;
            }
          } else {
            return current.data;
          }
        }
      }
    }
  }