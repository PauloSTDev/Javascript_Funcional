const exec = (fn, a, b) => fn(a, b)
const somarNoTerminal = (x, y) => console.log(x+y);
const subtrairNoTerminal = (w, z) => console.log(w-z);

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 187, 38)
//CallBack
setInterval(() => console.log("Exe!"), 1000)
//Crtl + Alt + m