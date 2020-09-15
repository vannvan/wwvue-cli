import store from '../store'

/**
 * @param {Array} arr  数据源
 * @param {Function} fn 去重方法
 */
export const uniqueElementsBy = (arr, fn) => arr.reduce((acc, v) => { if (!acc.some(x => fn(v, x))) acc.push(v); return acc; }, []);


/**
 *  平铺数据
 *
 * @param {Array} arr  数据源
 * @param {Array} [result=[]] 
 * @return {Array} 
 */
export const flatData = (arr, result = []) => {
    arr.forEach(item => {
        result.push(item)
        item.children && item.children.length > 0 ? flatData(item.children, result) : ""
        // item.children = '' //如果扁平化后的数组需要显示父子层级，可以把这一项删除
    })
    return result
}



/**
 * 过滤需要经过权限的路由
 *
 * @param {Array} menuPermissions 扁平菜单权限
 * @param {Array} routesSource  所有可加载的扁平路由
 * @return {Array} 
 */
export const generateRoleRouters = (menuPermissions, routesSource) => {
    const menuPaths = menuPermissions.map(el => el.path.toLowerCase())
    return routesSource.filter(item => menuPaths.includes(item.path.toLowerCase()))
}
/**
 *
 * 遍历树
 * @export 
 * @param {*} data
 * @param {string} [childrenName='children']
 * @param {*} callback
 */
export function foreachTree(data, childrenName = 'children', callback) {
    for (let i = 0; i < data.length; i++) {
        callback(data[i]);
        if (data[i][childrenName] && data[i][childrenName].length > 0) {
            foreachTree(data[i][childrenName], childrenName, callback);
        }
    }
}
/**
 * 查找父节点
 *
 * @export  
 * @param {*} pid
 * @param {*} data
 * @param {*} rootPid
 * @param {string} [pidName='pid']
 * @param {string} [idName='id']
 * @param {string} [childrenName='children']
 * @return {*} 
 */
export function traceParentNode(pid, data, rootPid, pidName = 'pid', idName = 'id', childrenName = 'children') {
    let arr = [];
    foreachTree(data, childrenName, (node) => {
        if (node[idName] == pid) {
            arr.push(node);
            if (node[pidName] != rootPid) {
                arr = arr.concat(traceParentNode(node[pidName], data, rootPid, pidName, idName));
            }
        }
    });
    return arr;
}

/**
 * 平铺菜单列表
 *
 * @return {*} 
 */
export const flatMenu = () => {
    return flatData(JSON.parse(JSON.stringify(store.state.auth.menuList)))
}


/**
 * 生成面包屑列表,
 * pathKey，idKey均可根据实际需要进行调整
 *
 * @param {*} currentMenuPath
 * @return {*} 
 */
export const breadCrumbsList = (currentMenuPath, pathKey = "path", idKey = "id") => {
    const currentMenuId = flatMenu().find(el => el[pathKey] == currentMenuPath)[idKey]
    return traceParentNode(currentMenuId, store.state.auth.menuList)
}


/** 
 * 获取文件后缀名
 */
export const fileExtension = (fileName) => {
    return fileName.substring(fileName.lastIndexOf('.') + 1);
}

/**
 * 判断数据类型
 * 原则上是所有类型都可判断，但常用的就只有以下类型，故可选类型只限制了如下格式
 * @param {any*} data
 * @param {String*} type  
 * @return {*} 
 */
export const isType = (data, type) => {
    const typeOpts = ['undefined', 'null', 'string', 'number', 'boolean', 'array', 'object', 'symbol', 'date', 'regexp', 'function']
    if (!typeOpts.includes(type)) {
        console.error('type属性可选值为', typeOpts.join())
    }
    const dataType = Object.prototype.toString.call(data).replace(/\[object /g, "").replace(/\]/g, "").toLowerCase();
    return type ? dataType === type : dataType;
}



/**
 * 图片文件转为base64 
 * @param {*} img
 * @return {*} 
 */
export const image2Base64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
}

/**
 * 随机颜色
 *
 * @param {number} [i=1]
 * @return {*} 
 */
export const randomColor = (i = 1) => {
    return (
        "#" +
        Math.floor(Math.random(i) * 0xffffff)
        .toString(16)
        .padEnd(6, "0")
    );
}