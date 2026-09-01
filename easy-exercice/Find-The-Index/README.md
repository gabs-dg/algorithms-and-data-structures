# LeetCode 28 — Encontre o Índice da Primeira Ocorrência em uma String

## Descrição

Dadas duas strings `haystack` e `needle`, retorne o índice da **primeira ocorrência** de `needle` em `haystack`.

Caso `needle` não faça parte de `haystack`, retorne `-1`.

**Problema:** [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

**Dificuldade:** Fácil

---

## Exemplos

### Exemplo 1

```text
Entrada:
haystack = "sadbutsad"
needle = "sad"

Saída:
0
```

`"sad"` aparece nos índi

### Exemplo 2

````text
Entrada:
haystack = "leetcode"
needle = "leeto"

Saída:
-1
```ces `0` e `6`. Como queremos a primeira ocorrência, o resultado é `0`.

`"leeto"` não aparece em `"leetcode"`, portanto retornamos `-1`.

---

## Solução

A solução percorre `haystack` procurando uma posição onde os caracteres de `needle` coincidam sequencialmente.

```javascript
var strStr = function(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;

        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }

        if (j === needle.length) {
            return i;
        }
    }

    return -1;
};
````

### Como funciona

Considere:

```text
haystack = "sadbutsad"
needle   = "sad"
```

Começamos com `i = 0`:

```text
haystack: s a d b u t s a d
          ↑
          i

needle:   s a d
          ↑
          j
```

Os caracteres coincidem:

```text
s == s
a == a
d == d
```

Quando todos os caracteres de `needle` coincidem, retornamos o índice inicial:

```text
0
```

Se nenhuma posição produzir uma correspondência completa, retornamos:

```text
-1
```

---

## Complexidade

### Tempo

**O(n × m)** no pior caso.

- `n` = tamanho de `haystack`
- `m` = tamanho de `needle`

Para cada posição possível em `haystack`, podemos precisar comparar vários caracteres de `needle`.

### Espaço

**O(1)** — utilizamos apenas algumas variáveis auxiliares.

---

## Casos de teste

| `haystack`      | `needle`  | Resultado |
| --------------- | --------- | --------: |
| `"sadbutsad"`   | `"sad"`   |       `0` |
| `"leetcode"`    | `"leeto"` |      `-1` |
| `"hello"`       | `"ll"`    |       `2` |
| `"aaaaa"`       | `"bba"`   |      `-1` |
| `"a"`           | `"a"`     |       `0` |
| `"mississippi"` | `"issip"` |       `4` |

---

## Restrições

- `1 <= haystack.length, needle.length <= 10⁴`
- `haystack` e `needle` contêm apenas letras minúsculas do alfabeto inglês.

---

## Conceitos praticados

- Strings
- Percorrimento de arrays/strings
- Dois ponteiros (`i` e `j`)
- Comparação de caracteres
- Complexidade de tempo e espaço
- Busca de substring
