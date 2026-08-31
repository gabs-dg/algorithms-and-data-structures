# 🔢 Encontrar o Maior Número de um Array

## 📌 Descrição

Dado um **array de números**, sua tarefa é percorrer todos os seus elementos e encontrar o **maior número** presente nele.

A solução deve ser feita utilizando lógica de programação básica: analisar cada número do array e compará-lo com o **maior valor encontrado até aquele momento**.

O objetivo do exercício é praticar **arrays, loops, condicionais e comparações**, sem depender de funções prontas da linguagem.

---

## 🧪 Exemplos

### Exemplo 1

**Entrada:**
```ts
[3, 7, 2, 9, 1]
```

**Saída:**
```ts
9
```

**Explicação:**

O maior valor começa sendo `3`.

```text
3 → maior = 3
7 → 7 é maior que 3 → maior = 7
2 → 2 não é maior que 7
9 → 9 é maior que 7 → maior = 9
1 → 1 não é maior que 9
```

Resultado final: `9`

---

### Exemplo 2

**Entrada:**
```ts
[-5, -2, -8, -1]
```

**Saída:**
```ts
-1
```

**Explicação:**

A lógica também funciona com números negativos:

```text
-5 → maior = -5
-2 → -2 é maior que -5 → maior = -2
-8 → -8 não é maior que -2
-1 → -1 é maior que -2 → maior = -1
```

Resultado final: `-1`

---

### Exemplo 3

**Entrada:**
```ts
[42]
```

**Saída:**
```ts
42
```

Como o array possui apenas um elemento, ele próprio é o maior número.

---

## 📋 Regras

1. 🚫 **Não utilize funções prontas** para encontrar o maior número, como `Math.max()`.
2. 🔄 Percorra o array manualmente utilizando um loop.
3. ⚖️ Compare cada número com o maior valor encontrado até aquele momento.
4. 💾 Mantenha uma variável para armazenar o maior número encontrado.
5. 📦 O array sempre terá **pelo menos um número**.
6. ✅ Ao final da execução, retorne o maior número encontrado.

---

## 🎯 Objetivo do exercício

Este exercício tem como objetivo praticar conceitos fundamentais de programação:

- Arrays
- Loops (`for`, `while`, etc.)
- Condicionais (`if`)
- Operadores de comparação
- Variáveis
- Retorno de valores
- Raciocínio lógico

---

## 🧠 Estratégia

Uma forma simples de pensar no problema é:

> **"Qual é o maior número que encontrei até agora?"**

Comece considerando o **primeiro elemento do array como o maior**.

Depois, percorra os demais elementos:

```text
Se o número atual for maior que o maior número encontrado:
    atualize o maior número
```

Por exemplo:

```text
[3, 7, 2, 9, 1]

maior = 3

7 > 3  → maior = 7
2 > 7  → não altera
9 > 7  → maior = 9
1 > 9  → não altera

Resultado → 9
```

---

## ⏱️ Complexidade

Se o array possui `n` elementos, precisamos analisar cada elemento uma vez.

**Complexidade de tempo:**

```text
O(n)
```

**Complexidade de espaço:**

```text
O(1)
```

Isso acontece porque utilizamos apenas uma variável adicional para armazenar o maior número.

---

## 🛠️ Linguagem

Este exercício foi desenvolvido em:

**TypeScript**
