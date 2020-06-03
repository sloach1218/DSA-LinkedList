//Create a linked list class
class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    insertFirst(item) {
      this.head = new _Node(item, this.head);
    }
    insertLast(item) {
      if(this.head === null) {
        this.insertFirst(item);
      } else {
        let tempNode = this.head;
        while(tempNode.next !== null) {
          tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
      }
    }
    insertBefore(item, node) {
      if(this.head === null) {
        this.insertFirst(item);
      }
      if(node === this.head.value) {
        this.head = new _Node(item, this.head);
        return this.head;
      }
      let tempNode = this.head;
      let before = null;
      while(tempNode.value !== node) {
        before = tempNode;
        tempNode = tempNode.next;
      }
      before.next = new _Node(item, tempNode);
    }
    insertAfter(item, node) {
      if(this.head === null) {
        this.insertFirst(item);
      }
      if(node === this.head.value) {
        this.head = new _Node(item, this.head);
        return this.head;
      }
      let after = node;
      let tempNode = this.head;
      while(tempNode.value !== after) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, tempNode.next);
    }
    insertAt(item, position) {
      let tempNode = this.head;
      let after;
      for(let i = 1; i < position -1; i++) {
        tempNode = tempNode.next;
      }
      after = tempNode.next;
      tempNode.next = new _Node(item, after);
    }
    find(item) {
      let currentNode = this.head;
      if(!this.head) {
        return null;
      }
      while(currentNode.value !== item) {
        if(currentNode.next === null) {
          return null;
        } else {
          currentNode = currentNode.next;
        }
      }
      return currentNode;
    }
    remove(item) {
      if(!this.head) {
        return null;
      }
      if(this.head.value === item) {
        this.head = this.head.next;
        return;
      }
      let currentNode = this.head;
      let previousNode = this.head;
      while((currentNode !== null) && (currentNode.value !== item)) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if( currentNode === null) {
        console.log('Item not found');
        return;
      }
      previousNode.next = currentNode.next;
    }
  }

  //Create a singly linked list
  function main(){
    const newList = new LinkedList;

    newList.insertLast('Apollo');
    newList.insertLast('Boomer');
    newList.insertLast('Halo');
    newList.insertLast('Husker');
    newList.insertLast('Starbuck');
    newList.insertLast('Starbuck');

    newList.insertLast('Tauhida');

    newList.remove('Husker')

    newList.insertBefore('Athena', 'Boomer')
    newList.insertAfter('Hotdog', 'Halo')

    newList.insertAt('Kat', 3)

    newList.remove('Tauhida')

    return newList
  }
  //main()

  function display(linkedList){
    let currentNode = linkedList.head
    let list = []
    
    if(!linkedList.head) {
        return 'List is empty'
    }
    while(currentNode.next !== null) {
        list.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return list
  }
  //console.log(display(main()))

  //O(n)
  function size(list){
    let currentNode = list.head;
    let size = 1;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
      size ++;
    }
    return size;
    
  }
  //console.log(size(main()))

  //O(1)
  function isEmpty(list){
      if(list.head = null){
          return true
      } else{
          return false
      }
  }
  //console.log(isEmpty(main()))

  //finds the node before the item you are looking for
  //O(n)
  function findPrevious(list, node) {
    let currentNode = list.head;
    let previousNode;
    while(currentNode.value !== node) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    } return previousNode;
  }
  //console.log(findPrevious(main(), 'Boomer'));
  
  //returns the last node in the list
  //O(n)
  function findLast(list) {
    let currentNode = list.head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    } return currentNode;
  }
  //console.log(findLast(main()));

  //Mystery Program 
  //checks for duplicates
  //O(n^2) - it runs through the list comparing each value
  function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
      let newNode = current;
      while (newNode.next !== null) {
        if (newNode.next.value === current.value) {
          newNode.next = newNode.next.next;
          console.log(current.value)
        }
        else {
          newNode = newNode.next;
          console.log(newNode.next)
        }
      }
      current = current.next;
    }
    
  }


  //Reverse a list
    //Time complexity: O(n)
    function reverseList(list) {
        let reversedList = new LinkedList;
        function helperFunction(currentNode) {
        if (!currentNode) {
            return;
        }
        if (currentNode.next) {
            helperFunction(currentNode.next);
        }
        console.log(currentNode.value);
        reversedList.insertFirst(currentNode);
        }
        helperFunction(list.head);
        return reversedList;
    }
    //reverseList(main());

    //3rd from the end
    //Time complexity: O(n) - dependednt on length of list
    function thirdFromEnd(list) {
        let length = size(list);
        let currentNode = list.head;
        for (let i = 0; i < length - 3; i ++) {
        currentNode = currentNode.next;
        }
        return currentNode;
    }
    //console.log(thirdFromEnd(main()));
    
    //Middle of a list
    //Time complexity: O(n)
    function middle(list) {
        let currentNode = list.head;
        let listArray = []
        let middle;
        while(currentNode.next !== null) {
        listArray.push(currentNode.value)
        currentNode = currentNode.next;
        }
        listArray.push(currentNode.value)
        middle = listArray.length / 2
        return listArray[middle];
    }
    //console.log(middle(main()));
    
    //Cycle in a list
    //Time complexity: O(n^2)
    let cycleList = new LinkedList;
    cycleList.insertLast('1');
    cycleList.insertLast('2');
    cycleList.insertLast('3');
    cycleList.insertLast('4');
    cycleList.insertBefore('5', '1');
    cycleList.find('1').next = cycleList.find('5');
    
    function hasCycle(list) {
        let tempList = new LinkedList;
        let currentNode = list.head;
        while(currentNode !== null) {
            tempList.insertLast(currentNode.value);
            let tempCurrentNode = tempList.head;
            while(tempCurrentNode !== null) {
                if(currentNode.next.value === tempCurrentNode.value) {
                return true;
                }
                tempCurrentNode = tempCurrentNode.next;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    //console.log(hasCycle(cycleList));
    
    //Sorting a list
    let unsortedList = new LinkedList;
    unsortedList.insertLast(3);
    unsortedList.insertLast(2);
    unsortedList.insertLast(5);
    unsortedList.insertLast(4);
    unsortedList.insertLast(1);
    unsortedList.insertLast(6);
    
    
    function sortList(list) {
        let sortedList = new LinkedList;
        let minVal;
        while(list.head) {
        minVal = minimumValue(list);
        sortedList.insertLast(minVal);
        list.remove(minVal);
        }
        return sortedList;
    }
    //console.log(display(sortList(unsortedList)));
    //expected outcome 1->2->3->4->5->6
    
    function minimumValue(list) {
        let currentNode = list.head;
        let currentValue = list.head.value;
        while(currentNode && currentNode.next) {
        if(currentValue > currentNode.next.value) {
            currentValue = currentNode.next.value;
        }
        currentNode = currentNode.next;
        }
        return currentValue;
    }
    //console.log(minimumValue(unsortedList));


