---
title: "Programming Pills - Inheritance"
date: "2020-06-29"
category: "it-basics"
slug: "programming-pills-inheritance"
template: "post"
tags: 
  - "basics"
  - "class"
  - "informatics"
  - "inheritance"
  - "it"
  - "oop"
  - "programming"
---

Classes can inherit attributes and methods from other classes.

The class that inherits attributes and methods is called **Base Class** and the class that inherits is called **subclass**.

Each language has its own way of defining sub classes, Java for example uses `extends`, while C # uses the sign `:`

```
Class Daisy extends Flower {
    ...
}
```

The `Daisy` subclass will now have access to all the methods and attributes of the `Flower` class, as long as they are marked with `public` or `protected`. Those marked `private` will not be visible and usable.

## Abstract classes

A class can also be marked by being abstract from `abstracts`.

An abstract class is a class that cannot be instantiated, but should only be used to create sub classes.  
Even a method of a class can be abstract. This means that the method cannot be instantiated from the base class but must be instantiated in the subclass.  
Very important, if a class has even one abstract method, then the whole class will automatically be abstract and not instantiable.

Methods can be overridden by sub classes, in order to obtain different results from the same method based on which class calls it.

For example Java always allows sub classes to overwrite base class methods, while C # prohibits it and over writable methods must be explicitly indicated.  
In Java it can be indicated when a method cannot be overwritten with `final`, while in C # the methods can be overwritten  
with `virtual`.

Classes can also be marked as non-overwritable. In Java with `final` while in C# with `sealed`.

* * *

Photo by [Markus Spiske](https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/programming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
