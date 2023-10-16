# Object Oriented Programming

- JavaScript is a scripting language, even type missing, Not a class based programming language.
- From ES6 we can classes in javaScript for better programming experience and features.
- ES6 + Classes are not too powerfull such as Java, PHP or Python. It's a syntactic sugar only.
- We should learn ES6 + Javascript for accessing the future tech
- ES6+ are modern JS but all modern code will convert as a vanilla code through babel JS, we should use it for browser capability.

# OOP Features

- Vanilla JS (ES5 features)
- Mordern JS (ES6+ features)
- Design Pattern Concept (Advance) with project

# Class Base OOP

- **Declare a Class and init it**<br>

```javascript
class Student {}
```

- **Create an instance of this Class**<br>
  <code>let object = new Student()</code>

- **Constructor method with property access**<br>

  ```javascript
  class Student {
    constructor(p1, p2, p3) {
      this.p1 = p1;
      this.p2 = p2;
    }
  }
  let objectName = new Student();
  objectName.propertyName;
  ```

- **Object method**<br>

  ```javascript
  class Student {
    constructor(p1, p2, p3) {
      this.p1 = p1;
      this.p2 = p2;
    }

    ageCal() {}
    BMI() {}
    studentInfo() {}
  }
  let objectName = new Student();
  objectName.propertyName;
  objectName.methodName;
  ```

- **Static methods and its use** <br>
  for static method we haven't to need object instance but we cannot user other method and property inside static method. static method use other static method.

  ```javascript
  class Student {
    constructor(p1, p2, p3) {
      this.p1 = p1;
      this.p2 = p2;
    }

    static ageCal() {}
    static BMI() {}
    static studentInfo() {}
  }

  objectName.propertyName;
  objectName.methodName();
  ```

- **Object Inheritence** <br>

  ```javascript
  class Student extends Staff {
    constructor(p1, p2, p3) {
      super(parameter);
      this.p1 = p1;
      this.p2 = p2;
    }

    static ageCal() {}
    BMI() {}
    studentInfo() {}
  }
  let objectName = new Student();
  objectName.propertyName;
  objectName.methodName();
  ```
