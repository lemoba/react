const a = 20;
export const b = 10;
export const c = 11;

const fn = (a) => {
    console.log(a)
}

const obj = {name: "孙悟空"}

/*
 * 作为一个模块,我们不希望模块中所有的内容都暴露给外部
 * 作为导入方,也不希望导入无用的变量
 *
 * export(导出)
 *      - 导出用来决定一个模块中那些内容可以被外部查看
 *      - 导出分成两种：
 *          1. 默认导出
 *              - 语法：
 *                  export default xxx
 *              - 一个模块中只能有一个默认导出
 *          2. 命名导出
 *              - 语法：
 *                  import a from './export.js'
 *              - 导入默认模块式,变量名无需和模块中变量名一致
 *              - 在网页中导入模块是,type=module,模块的路径必须写完整
 */

export default a;

export {obj, fn};
