## Type Introduction -- Overview ##

## Types ##

Though to be more explicit, a type is introduced with:

- A type alias declaration: (`type sn = number | string;`)
- An interface declaration (`interface I { x: number[]; }`)
- A class declaration (`class C { }`)
- An enum declaration (`enum E { A, B, C }`)
- An `import` declaration, which refers to a type

## Values ##

Values are runtime names that we can reference in expressions. For example `let x = 5;` creates a value called `x`.

Again, being explicit, the following things create values:

- `let`, `const`, and `var` declarations
- A `namespace` or `module` declaration which contains a value
- An `enum` declaration
- A `class` declaration
- An `import` declaration which refers to a value
- A `function` declaration
- `Namespaces`

Types can exist in namespaces. For example, if we have the declaration let x: `A.B.C`, we say that
the type `C` comes from the `A.B` namespace.

This distinction is subtle and important — here, `A.B` is not necessarily a type or a value.

