# Classes
#### Using cookies
```js
class Cookie {
    // a constructor defines what the class should have as attributes
    constructor(color) {
        this.color = color;
    }
    // methods define certain functions that affect the instance they are applied to
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
}
// constructor
let cookieOne = new Cookie('green');
let cookieTwo = new Cookie('blue');

// methods of a class
cookieOne.getColor()
// returns 'green'
cookieOne.setColor('red');
// sets the .color attribute to 'red'
```
Why is this important? An example would be items like linked lists use a constructor to handle setting up adding a new node, and methods allow us to handle things like push, pop, remove, shift, unshift, insert, etc.

## Linked lists
Note: Linked lists are not in continutious places in memory, instead they have heads, tails, and pointers.

Process to:
- add a node, tail.next = newNode
    - add to front, newNode = head, newNode.next = last head
- remove a node, iterate through the entire list, and set the second to last node's .next value to be = tail

in linked list, iterating or going by index is an O(n) complexity
