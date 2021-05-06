import Stack from "./Stack";

const precedenceOfOperator = (operator) => {
    if (operator === "+" || operator === "-") {
        return 1;
    } else if (operator === "*" || operator === "/") {
        return 2;
    }
    return 0;
};

const applyOperation = (firstValue, secondValue, operator) => {
    if (operator === "+") {
        return firstValue + secondValue;
    } else if (operator === "-") {
        return firstValue - secondValue;
    } else if (operator === "*") {
        return firstValue * secondValue;
    } else if (operator === "/") {
        console.log(firstValue);
        console.log(secondValue);
        console.log((firstValue * 1.0) / secondValue);
        return (firstValue * 1.0) / secondValue;
    }
};

const evaluate = (expression) => {
    // stack to store integer values.
    const values = new Stack();

    // stack to store operators.
    const operators = new Stack();
    let index = 0;
    while (index < expression.length) {
        let token = expression[index];
        if (token === "(") {
            operators.push(token);
        } else if (!isNaN(token)) {
            let value = "";
            while (
                index < expression.length &&
                (!isNaN(expression[index]) || expression[index] === ".")
            ) {
                value = value + expression[index];
                index += 1;
            }
            values.push(Number(value));

            // points to the next digit
            index -= 1;
        } else if (token === ")") {
            // solve entire brace
            while (operators.length() !== 0 && operators.peek() !== "(") {
                const val2 = values.pop();
                const val1 = values.pop();
                const operator = operators.pop();

                values.push(applyOperation(val1, val2, operator));
            }
            //pop opening brace.
            operators.pop();
        } else {
            while (
                operators.length() !== 0 &&
                precedenceOfOperator(operators.peek()) >=
                    precedenceOfOperator(token)
            ) {
                const val2 = values.pop();
                const val1 = values.pop();
                const operator = operators.pop();

                values.push(applyOperation(val1, val2, operator));
            }
            // push current token to operators
            operators.push(token);
        }
        index += 1;
    }

    // entire expression has been parsed, applying remaining operations
    while (operators.length() !== 0) {
        const val2 = values.pop();
        const val1 = values.pop();
        const operator = operators.pop();

        values.push(applyOperation(val1, val2, operator));
    }
    return values.pop();
};

export { evaluate };
