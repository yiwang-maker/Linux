#!/bin/bash

# Shell 中的函数
greet() {
    echo "你好, $1!"
}

# 调用函数
greet "小明"
greet "小红"

# 方式1：推荐写法
function_name() {
    # 函数体
    echo "这是函数内容"
}

# 方式2：也可以这样写
function function_name {
    # 函数体  
    echo "这是函数内容"
}



