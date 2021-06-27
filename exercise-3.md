### Question

Why does the alert show Jack first and then undefined?

```javascript
function identity() {
    var name = 'Jack';
    alert(name);
    return
    name
};

var who = identity();
alert(who);
```

### Answer

The first alert is correctly called inside the `identity()` function passing the string defined in the variable `name`.

However, the function always returns `undefined` instead of returning the `name` value, because the javascript parser adds a `;` at the end of the line with the `return` statement.
Because of that issue, the variable `who` always receives an `undefined` value.