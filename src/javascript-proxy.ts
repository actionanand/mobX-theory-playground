// Target contains the values that we wanna observe
const target = {
  message1: 'Hello',
  message2: 'World',
};

// handler overrides the setter (i.e, `set` behavior of the `target` object)
const handler = {
  set: function (obj: typeof target, prop: keyof typeof target, value: string) {
    // obj(target), its keys and its values -> 3 args of set function
    console.log(`'${prop}' has changed!`);
    obj[prop] = value;

    return true;
  },
  get: function (obj: typeof target, prop: keyof typeof target) {
    console.log(`'${prop}' has been read!`);
    return obj[prop];
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.message1);
proxy.message2 = 'kitty';

/*

Output:
'message1' has been read!
Hello
'message2' has changed!

*/
