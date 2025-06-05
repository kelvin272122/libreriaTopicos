export class Stack<T>{
    private stack: T[] = [];

    constructor(){
        this.stack = [];
    }

    public isVoid(): boolean{
        if(this.stack.length === 0){
            return true;
        }else{
            return false;
        }
    }

    public push(value:T): void{
        this.stack.push(value);
    }

    public pop(): void{
        if(this.stack.length===0){
            console.log('The stack is empty');
        }else{
            this.stack.pop();
        }
    }

    public top(): T | undefined{
        if(this.stack.length === 0){
            console.log('The stack is empty');
            return undefined;
        }else{
            return this.stack[this.stack.length-1];
        }
    }
}

const exampleStack = new Stack<number>();


exampleStack.push(5);
exampleStack.push(2);
exampleStack.push(6);
exampleStack.push(8);
exampleStack.push(656);

console.log(exampleStack.top());
exampleStack.pop();
console.log(exampleStack.top());
exampleStack.pop();
exampleStack.pop();
console.log(exampleStack.top());
exampleStack.pop();
if(exampleStack.isVoid()){
    console.log('It is empty');
}else{
    console.log('It is not empty');
}
console.log(exampleStack.top());