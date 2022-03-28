// 可以用 | 来支持多种类型的值 string|number
const _name: string = '我是一个name'
console.log(_name)

// 数字
let target: Number = 12
console.log(target)

// 数组
let arr: number[] = []
arr = [12, 3,]
console.log(arr)

// 数组泛型
let arr2: Array<Number> = [3, 1, 23]
console.log(arr2)

// 元组 用来表示已知类型和数量的数组,各元素的类型不必相同, 对应位置的类型必须相同
let tuple: [String, Number] = ['1', 3]
console.log(tuple)

// 枚举 用于定义数值集合
enum Color {
  red, green, blue
}
let color: Color = Color.green
console.log(color)

// void 用于标识方法返回值的类型, 标识该方法没有返回值
function hellow(): void {
  console.log('hellow word')
}

/**
 * any 表示任意类型的值
 * null 表示对象值确实
 * undefined 用于初始化一个没有赋值的变量
 * never 表示其他类型的(包括 null 和undefined ) 的子类型,代表从不会出现的值
 */




