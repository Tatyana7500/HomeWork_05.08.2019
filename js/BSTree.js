const Node = function (value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

const BSTree = function () {
   this._root = null;
   this._size = 0;
};

BSTree.prototype = Object.create(ProtoList.prototype);
BSTree.prototype.constructor = BSTree;

BSTree.prototype.toArray = function () {
  if(this._root) {
      return printArray(this._root);
  } else {
      return [];
  }

  function printArray(tempNode) {
        let binaryList = [];

        if (tempNode) {
            binaryList = binaryList.concat(printArray(tempNode.left));
            binaryList.push(tempNode.value);
            binaryList = binaryList.concat(printArray(tempNode.right));
        }

        return binaryList;
    }
};

BSTree.prototype.init = function (array) {
    if (!array) {
        return this._size;
    }

    for (let i = 0; i < array.length; i++) {
        this.push(array[i]);
    }

    return this._size;
};


BSTree.prototype.toString = function () {
    if (this._root) {
        return printString(this._root);
    } else {
        return "";
    }

     function printString(tempNode) {
        let binaryList = '';

        if (tempNode) {
            binaryList += printString(tempNode.left);
            binaryList += `${tempNode.value} `;
            binaryList += printString(tempNode.right);
        }

        return binaryList;
    }
};

BSTree.prototype.getSize = function () {
    return this._size;
};

BSTree.prototype.push = function (value) {
    if (value) {
        let newNode = new Node(value);
        this._size++;
        let tempNode = this._root;

        if (!tempNode) {
            this._root = newNode;
        } else {
            let parentNode;

            while (tempNode) {
                parentNode = tempNode;
                if (newNode.value <= tempNode.value) {
                    tempNode = tempNode.left;
                } else {
                    tempNode = tempNode.right;
                }
            }

            if (newNode.value <= parentNode.value) {
                parentNode.left = newNode;
            } else {
                parentNode.right = newNode;
            }
        }
    }

    return this._size;
};

BSTree.prototype.remove = function (value) {
    let size = 0;
    this._root = removeNode(this._root, value);
    this._size -= size;

    return this.getSize();

    function removeNode(tempNode, value) {
        if (!tempNode) {
            return null;
        }

        if (tempNode.value === value) {
            if (!tempNode.right) {
                size++;
                return tempNode.left;
            }

            if (!tempNode.left) {
                size++;
                return tempNode.right;
            }

            let newNode = tempNode;
            tempNode = getLeaf(newNode.right);
            tempNode.right = delLeaf(newNode.right);
            tempNode.left = newNode.left;
            size++;
        } else if (tempNode.value > value) {
            tempNode.left = removeNode(tempNode.left, value);
        } else {
            tempNode.right = removeNode(tempNode.right, value);
        }

        return tempNode;
    }

    function getLeaf(tempNode) {
        return (!tempNode.left) ? tempNode : getLeaf(tempNode.left);
    }

    function delLeaf(tempNode) {
        if (!tempNode.left) {
            return tempNode.right;
        }

        tempNode.left = delLeaf(tempNode.left);

        return tempNode;
    }
};

BSTree.prototype.setBalance = function () {
    let binaryArray = this.toArray();

    return this._root = createBalancedTree(binaryArray, 0, binaryArray.length - 1);

    function createBalancedTree(binArray, begin, end) {
        if (end < begin) {
            return null;
        }

        const middle = parseInt((begin + end) / 2);
        const tempNode = new Node(binArray[middle]);
        tempNode.left = createBalancedTree(binArray, begin, middle - 1);
        tempNode.right = createBalancedTree(binArray, middle + 1, end);

        return tempNode;
    }
};

BSTree.prototype.get = function (value) {
    if (!value) {
        return ;
    }

    let tempNode = this._root;

    return getNode(tempNode, value);

    function getNode(tempNode, value) {
        if(!tempNode) {
            return ;
        } else if (tempNode.value === value) {
            return tempNode;
        } else if (tempNode.value > value) {
            return getNode(tempNode.left, value);
        } else {
            return getNode(tempNode.right, value);
        }
    }
};