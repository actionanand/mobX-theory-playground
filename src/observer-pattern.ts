interface Observer {
  update: () => void;
}

class CongreteObserverA implements Observer {
  update() {
    console.log(`'${this.constructor.name}' has been updated!`);
  }
}

class CongreteObserverB implements Observer {
  update() {
    console.log(`'${this.constructor.name}' has been updated!`);
  }
}

class Subject {
  private _name = '';
  private observerCollections: Observer[] = [];

  get name() {
    return this._name;
  }

  set name(val: string) {
    this._name = val;
    this.notifyObservers();
  }

  registerObserver(...o: Observer[]) {
    this.observerCollections.push(...o);
  }

  unregisterObserver(o: Observer) {
    this.observerCollections = this.observerCollections.filter(
      (el) => el !== o,
    );
  }

  notifyObservers() {
    this.observerCollections.forEach((o) => o.update());
  }
}

const subject = new Subject();
const oA = new CongreteObserverA();
const oB = new CongreteObserverB();

subject.registerObserver(oA, oB);
// whenever a `name` is set, registered observers will be notified.
subject.name = 'isItCool?';

/*

Output:
'CongreteObserverA' has been updated!
'CongreteObserverB' has been updated!

*/
