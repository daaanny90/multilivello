---
title: "Programming Pills - Encapsulation"
date: "2020-06-25"
category: "it-basics"
slug: "programming-pills-encapsulation"
template: "post"
tags: 
  - "basics"
  - "encapsulation"
  - "informatics"
  - "it"
  - "oop"
  - "programming"
---

Encapsulation is used to protect the attributes of a class and make them manipulable only by interfaces made available to communicate with the outside world. Typically they are **getters** and **setters**. This protects attributes and ensures that only valid values are assigned to them.

Attributes and methods can have three kinds of "visibility":

- `private`: means that the attribute or method is only visible from that class
- `protected`: attributes/methods are available for the class itself and the classes derived from it
- `public`: everyone has access to attributes/methods

As already mentioned, attributes should be editable and visible only through interfaces made available by the class to communicate with the outside world. Typically they are getters and setters.

## Getter

The getter functions are used to obtain an attribute.

```
public function getName() {
    return $this->name;
}
```

## Setter

While the setter functions are used to set the attributes from the outside.

```
public function setName(string $name) {
    $this->name = $name;
}
```

Compared to procedural programming, in object-oriented programming, encapsulation allows you to reuse a class (and its methods / attributes) several times as if it were, in fact, a capsule.

* * *

Photo by [Markus Spiske](https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/programming?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
