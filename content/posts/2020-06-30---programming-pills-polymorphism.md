---
title: "Programming Pills - Polymorphism"
date: "2020-06-30"
category: "it-basics"
slug: "programming-pills-polymorphism"
template: "post"
tags: 
  - "basics"
  - "informatics"
  - "interface"
  - "it"
  - "oop"
  - "polymorphism"
  - "programming"
---

Polymorphism is the ability to obtain different results from the same method. The best way to understand it is to do the classic example with animals.

Let's take into account that we have an Animal class base, which contains the methods speak(), walk(), eat().  
From this base class we create two subclasses, the Dog class and the Parrot class.

```
class Animal {
    ...
    public function speak();
    public function walk();
    public function eat();
}
```

As we saw when we talked about inheritance, the subclasses inherit the methods and attributes of the base class if they are public or protected.

In this case, Dog and Parrot inherit the methods speak(), walk(), eat().

We have a problem though: the dog and the parrot don't do the same verse, they don't walk the same way and they don't eat the same things.  
And this is where polymorphism comes into action.

By inheriting the Animal methods, the subcases Dog and Parrot can override these methods.  
This means that in the Dog class I'll modify the Speak() method by having it print in console, for example, "Woof", while in the Parrot class I'll modify it to say "Hello".

```
class Dog extends Animal {
    ...
    public function speak() {
        return "Bau";
    }
}

class Parrot extends Animal {
    ...
    public function speak() {
        return "Hello!";
    }
}
```

The talk() method of the base class, then, will result in two different things, depending on which subclass calls it.

Without polymorphism, so in a non-object-oriented programming condition, we would have to write a function with, for example, a switch case:

```
function speak(string $animal) {
    switch($animal) {
        case "Dog":
            return "Bau";
            break;
        case "Parrot":
            return "Hello!";
            break;
    }
}
```

Now comes the good part of polymorphism: if we create a Labrador class starting from the Dog class, and we call the Speak() method, we will have as result "Woof", since we inherit the right class.

```
class Labrador extends Dog {
    ...
}

$fido = new Labrador();
$fido->speak(); // This will return "Bau"
```

Just try to imagine when the switch case we saw before should become large, complex, unreadable and unmaintainable. Here is all the power of polymorphism and object-oriented programming.

## Interface

Speaking of polymorphism, it is also worth briefly discussing the concept of interface.

This concept is used in most (not all) programming languages.

An interface is a construct that behaves like an abstract class, and provides abstract methods.

The usefulness of interfaces can be seen when two very different classes need a common method.

For example, both a dog and a Ferrari are washable, but they only have this one thing in common. In this case I can create a Washable interface with a wash() method, and implement it in the Dog and Ferrari classes.

Classes implementing an interface are obliged to use its methods, otherwise a compilation error (if there is a compiler) will occur.

The interface is therefore concerned with declaring abstract methods and allowing, for example, the inclusion of parameters in its methods to be respected.

```
interface Washable {
     public function wash();
}

class Dog extends Animal implements Washable {
   ...
   public function wash() {
      return "only with soap";
   }
}

class Ferrari extends Car implements Washable {
   ...
   public function wash() {
      return "only with wax";
  }
}
```

* * *

Photo by [Chris Ried](https://unsplash.com/@cdr6934?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/programming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
