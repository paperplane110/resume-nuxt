---
title: 'Post'
---

<br />

<Hero>Post.</Hero>

Post模块仍在建设中，以下是一些测试

> Post module is still under construction. There are some tests as follow.
> 
> This is the second line

# Header 1
## Header 2
### Header 3
#### Header 4

Paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Perspiciatis fugit earum voluptas officia, quasi saepe et commodi,
dolores cumque quam fuga ullam, itaque ea dignissimos asperiores
adipisci ad eveniet repellendus

em: *Lorem ipsum dolor sit amet, consectetur adipisicing elit.*

bold: **Lorem ipsum dolor sit amet, consectetur adipisicing elit.**

em bold: ***Lorem ipsum dolor sit amet, consectetur adipisicing elit.***

## Codeblock

```python [creature/human.py] {1, 2-3}
import random
from Spirit import soul
from Material import body

human = soul + body

class Human:
    """A class of human being"""
    def __init__(self, soul, body):
        self.personality = soul.color
        self.looking = body.gene
        self.health = 100

    def eating(self, food):
        self.health += food.value

a = Human(random(soul), random(body))
```

```
just some text
```

``` [title]
just some text with title
```

## Link

[to post](/post)
