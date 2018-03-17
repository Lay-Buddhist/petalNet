
/*
* create by ASUS on 2017/11/16
* */
function show(ele) {
    ele.style.display =  "block";
}
function hide(ele) {
    ele.style.display = "none";
}
/**
 * 获取元素样式兼容写法
 * @param ele
 * @param attr
 * @returns {*}
 */
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}

//参数变为3个
function animate(ele,json,fn){
    //先清定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //开闭原则
        var bool = true;


        //遍历属性和值，分别单独处理json
        //attr == k(键)    target == json[k](值)
        for(var k in json){
            //四部
            var leader = parseInt(getStyle(ele,k)) || 0;
            //1.获取步长
            var step = (json[k] - leader)/10;
            //2.二次加工步长
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            //3.赋值
            ele.style[k] = leader + "px";
            //4.清除定时器
            //判断: 目标值和当前值的差大于步长，就不能跳出循环
            //不考虑小数的情况：目标位置和当前位置不相等，就不能清除清除定时器。
            if(json[k] !== leader){
                bool = false;
            }
        }

        console.log(1);
        //只有所有的属性都到了指定位置，bool值才不会变成false；
        if(bool){
            clearInterval(ele.timer);
            //所有程序执行完毕了，现在可以执行回调函数了
            //只有传递了回调函数，才能执行
            if(fn){
                fn();
            }
        }
    },1);
}


/*获取屏幕可视区域的宽高
* */
function  client() {
    if(window.innerHeight !== undefined){
        return {
            "width": window.innerWidth,
            "height": window.innerHeight
        }
    }else if(document.compatMode === "CSS1Compat"){
        return {
            "width": document.documentElement.clientWidth,
            "height": document.documentElement.clientHeight
        }
    }else if{
        return {
            "width": document.body.clientWidth,
            "height": document.body.clientHeight
    }
}


/**
 * 通过传递不同的参数获取不同的元素
 * @param str
 * @returns {*}
 */
function $(str) {
    var str1  = str.charAt(0);//<charAt>是返回指定位置的字符
    if(str1 === "#"){
        return document.getElementById(str.slice(1));//<slice(start（必须）,end（可选）)> 从已有的数组中返回指定的元素
    }else if (str1 === ".")
    {
        return document.getElementsByClassName(str.slice(1));
    }else
    {
        return document.getElementsByTagName(str);
    }
}


/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */

function getFirstNode(ele) {
    var node = ele.firstChild || ele.firstElementChild;
    return node;
}

/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele) {
    return ele.lastChild || ele.lastElementChild;
}

/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele) {
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getPreviousNode(ele) {
    return ele.previousSibling || elel.previousElementSibling;
}

/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele,index) {
    return ele.parentNode.children[index];
}

/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele) {
    //定义一个新数组，装所有的兄弟元素，将来返回
    var newArr = [];
    var arr  = ele.parentNode.children;
    for(var i = 0;i<arr.length;i++){
        //判断如果传递过来的不是元素本身那么添加到新数组中
        if(arr[i] !== ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}




