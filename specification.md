# **Calculator**

**Operations :**

- [x] Addition
- [x] Subtraction
- [x] Multiplication
- [x] Division


```
Operation = [Operand 1] <Symbol> [Operand 2] = Result
```

---
**Terminology :**

| Operation      |    Operand 1 | Symbol | Operand 2  |
| :------------- | -----------: | :----: | :--------- |
| Additon        |       Augend |   +    | Addend     |
| Subtraction    |      Minuend |   -    | Subtrahend |
| Multiplication | Multiplicand |   *    | Multiplier |
| Division       |     Dividend |   /    | Divisor    |


---

**Task :**

> _build a CLI app called `asmd` that can perform all the above operations_ -- **_[ add, subtract, multiply, divide ]_**

> asmd - abbreviation for the operations _[ **a**dd, **s**ubtract, **m**ultiply, **d**ivide ]_

```cmd
$ asmd add --augend 20 --addend 10

30
```

```cmd
$ asmd subtract --minuend 20 --subtrahend 10

10
```

```cmd
$ asmd multiply --multiplicand 20 --multiplier 10

200
```

```cmd
$ asmd divide --dividend 20 --divisor 10

2
```

> **Note :** for brevity and ease of use, you can use flags `--x` and `--y` as operands for all the above operations

```cmd
$ asmd add --x 20 --y 10

30
```

Another alternative you could use is to directly pass the operands without specifing what thay are.

```cmd
$ asmd add 20 10

30
```
