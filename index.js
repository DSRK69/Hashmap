
let hashCode = 0;
let primeNum = 31;
let hashMapArr = [];
let checkArr = [];

let head = null;
let tail = null;

class HashMap {

    hashCode (key) {
        let hash = new Hash (key);
        return hash;
    }
    // Add keys to the HashMap array
    set (node) {
        let currentNode;
        let inserted = false;

        if (hashMapArr.length > 0) {
            for (let i = 0; i < hashMapArr.length; i++) {
                // Add to linked list of equal value
                if (hashMapArr[i].value == node.value) {
                    currentNode = hashMapArr[i];
                    while (currentNode.next != null) {
                        currentNode = currentNode.next;
                    }
                    currentNode.next = node;
                    inserted = true;
                }
                // Add not equal items into the hashmap array
                else {
                    continue;
                }
            }
            if (inserted == false) {
                hashMapArr.push(node);
            }
        }
        // If arr empty, push first obj 
        else {
                hashMapArr.push(node);
        }
    }
    // Return the value of the key
    get (key) {
        let found = false;
        let currentNode;

        for (let i = 0; i < hashMapArr.length; i++) {
            currentNode = hashMapArr[i];
            while (currentNode != null) {
                if (currentNode.key == key) {
                    found = true;
                    return hashMapArr[i].value;
                }
                currentNode = currentNode.next;
            }
        }
        if (found == false) {
            return null;
        }
    }

    remove (key) {
        let currentNode;
        let lastNode;

        for (let i = 0; i < hashMapArr.length; i++) {
            currentNode = hashMapArr[i];

            while (currentNode != null) {
                if (currentNode.key == key) {
                    currentNode = currentNode.next;
                    if (currentNode.key == currentNode.next.key) {
                        lastNode = currentNode.next;
                        this.remove(key);
                    } else {
                        currentNode = lastNode;
                        return true;
                    }
                }
                currentNode = currentNode.next;
            }
        }
        return false;
    }

    length () {
        let currentNode;
        let count = 0;

        for (let i = 0; i < hashMapArr.length; i++) {
            currentNode = hashMapArr[i];
            while (currentNode != null) {
                count++;
                currentNode = currentNode.next;
            }
        }
        return count;
    }

    keys () {
        let keyArr = [];
        let currentNode;

        for (let i = 0; i < hashMapArr.length; i++) {
            currentNode = hashMapArr[i];
            while (currentNode != null) {
                if (!keyArr.includes(currentNode)) {
                    keyArr.push(currentNode.key);
                }
                currentNode = currentNode.next;
            }
        }
        return keyArr;
    }
}

// Create a HashCode and give it a link

class Hash {
    constructor (key) {
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNum * hashCode + key.charCodeAt(i);
            hashCode = hashCode % 97;
        }

        let node = new Node (key, hashCode);
        hashMap.set(node);
        hashCode = 0;
        return hashMapArr;
    }
}

class Node {
    constructor (key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = null;
        return {key, value, next};
    }
}

let hashMap = new HashMap();

let code1 = hashMap.hashCode('carla');
let code2 = hashMap.hashCode('carla');
let code3 = hashMap.hashCode('carla');
let code4 = hashMap.hashCode('c');
let code5 = hashMap.hashCode('cttsd');
let code6 = hashMap.hashCode('cttsd');
let code7 = hashMap.hashCode('iiiiid');
let code8 = hashMap.hashCode('iiiiid');
let code9 = hashMap.hashCode('hghghghg');
let code10 = hashMap.hashCode('eewewewewewewew');
let code11 = hashMap.hashCode('ollolloolol');
let code12 = hashMap.hashCode('rrgrgd');
let code13 = hashMap.hashCode('ollolloolol');
let code14 = hashMap.hashCode('ollolloolol');
let code15 = hashMap.hashCode('ollolloolol');
let code16 = hashMap.hashCode('llllll');
let code17 = hashMap.hashCode('carla');

console.log(hashMap.keys());
console.log(hashMapArr);