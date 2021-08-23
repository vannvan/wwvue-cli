/*
 * @Description: utils
 * @Date: 2021-08-23 14:21:53
 * @Author: vannvan
 * @Email: adoerww@gmail.com
 * @LastEditTime: 2021-08-23 14:30:27
 * --------
 * Copyright (c) github.com/vannvan
 */
/**
 * @param {Array} arr  数据源
 * @param {Function} fn 去重方法
 */
export const uniqueElementsBy = (arr, fn) => arr.reduce((acc, v) => { if (!acc.some(x => fn(v, x))) acc.push(v); return acc; }, []);


/**
 *
 *
 * @param {Array} arr  数据源
 * @param {Array} [result=[]] 
 * @return {Array} 
 */
export const flatData = (arr, result = []) => {
    arr.forEach(item => {
        result.push(item)
        item.children && item.children.length > 0 ? flatData(item.children, result) : ""
        item.children = '' //如果扁平化后的数组需要显示父子层级，可以把这一项删除
    })
    return result
}



/**
 *
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
 * 大驼峰转中划线
 * @param {*} str 
 * @returns 
 */

export const  toInLine = (str) =>{
  const renderStr = (pageNum) =>
    pageNum
      .split('')
      .map((ele, index) => {
        if (index === 0) {
          ele = ele.toLowerCase()
        } else {
          if (/[A-Z]/.test(ele)) ele = '-' + ele.toLowerCase()
        }
        return ele
      })
      .join('')

  return (
    '/' +
    str
      .replace('/', '')
      .split('/')
      .map((ele) => renderStr(ele))
      .join('/')
  )
}