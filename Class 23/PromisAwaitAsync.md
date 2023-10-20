# Callback Function

- I will call you back later
- Passed argument one function to another
- A callback function run after finished another function
- Callback function can be called closer function
- Callback are asynchronous function

**Syntax of a callback**

```javascript
function info(name, year, callback) {
  //code
  callback();
}
```

# Promise Function

- Make a promise
- Promise return a resolve and reject data
- A nice asynchronous function
- syntax

```javascript
let marks = 30;
let result = new Promise((resolve, reject) => {
  if (mark > 32) {
    resolve();
  } else {
  }
  reject();
});

result
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

# Async Await

- Async await is asynchronous function
- Return a promise for better respose
- syntex

```javascript
function ageCal(){
  let data = await info();
}
```
