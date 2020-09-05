// 权限相关方法
const ExcludePage = ['/login'] //需要排除在左侧菜单之外的页面
/**
 * 获取左侧菜单列表
 *
 * @param {*Array} menuSource 扁平菜单
 * @return {*} 
 */
export const getLeftMenuList = (menuSource) => {
    return menuSource.filter(item => !ExcludePage.includes(item.name))
}