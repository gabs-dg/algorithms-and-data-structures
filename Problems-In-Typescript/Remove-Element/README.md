# Remove Element

## 📝 Descrição

Dado um array de inteiros `nums` e um inteiro `val`, remova todas as ocorrências de `val` **in-place** em `nums`.

A ordem dos elementos pode ser alterada.

Ao final, retorne `k`, que representa a quantidade de elementos de `nums` que são diferentes de `val`.

### Requisitos

Para que a solução seja aceita:

- Os primeiros `k` elementos de `nums` devem conter todos os elementos diferentes de `val`.
- Os elementos após a posição `k` não são importantes.
- O tamanho original de `nums` não precisa ser alterado.
- A função deve retornar `k`.

> **In-place:** a alteração deve ser realizada diretamente no array original, sem criar outro array para armazenar a resposta.

---

## 💡 Exemplos

### Exemplo 1

```text
Entrada:
nums = [3,2,2,3]
val = 3

Saída:
k = 2
nums = [2,2,_,_]
```

**Explicação:**

A função deve retornar `k = 2`.

Os dois primeiros elementos de `nums` devem conter os elementos diferentes de `3`:

```text
[2, 2, _, _]
```

Os elementos após `k` não são importantes.

---

### Exemplo 2

```text
Entrada:
nums = [0,1,2,2,3,0,4,2]
val = 2

Saída:
k = 5
nums = [0,1,4,0,3,_,_,_]
```

**Explicação:**

A função deve retornar `k = 5`.

Os cinco primeiros elementos devem conter os valores:

```text
0, 0, 1, 3, 4
```

A ordem desses elementos pode ser diferente.

Os elementos após `k` não são importantes.

---

## ⚖️ Juiz personalizado

O juiz verificará a solução utilizando uma lógica equivalente a:

```cpp
int[] nums = [...];          // Array de entrada
int val = ...;               // Valor a ser removido
int[] expectedNums = [...];  // Resposta esperada

int k = removeElement(nums, val);

// Verifica o tamanho correto
assert k == expectedNums.length;

// Ordena apenas os primeiros k elementos
sort(nums, 0, k);

// Compara os elementos
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

Se todas as verificações forem verdadeiras, a solução será **aceita**.

---

## 📌 Restrições

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

---

## 🧠 Conceitos praticados

- Arrays
- Manipulação **in-place**
- Percorrimento de arrays
- Condicionais
- Índices
- Complexidade de algoritmos

---

## 💻 Solução

A implementação da solução está disponível em:

```text
index.ts
```

### Complexidade

```text
Tempo: O(n)
Espaço: O(1)
```

A solução percorre o array uma vez e utiliza apenas variáveis auxiliares, sem criar um novo array.

---

## 🔗 Problema original

Este exercício é baseado no problema **Remove Element**, do LeetCode.
