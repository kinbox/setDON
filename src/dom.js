window.dom = {
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(div,'border',1px solid red'')
            node.style[name] = value
        }
        else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //dom.style(div,'border')
                return node.style[name]
            }
            else if (name instanceof Object) {
                //dom.style(div,{border:1px solid red})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },


    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },

    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },

}





