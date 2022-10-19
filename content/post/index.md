---
title: 'Post'
---

# Post

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

[link](/post)

# Chapter2