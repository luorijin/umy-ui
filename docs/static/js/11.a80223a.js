(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{651:function(e,n,t){"use strict";t.r(n);var l=t(34),u=Object(l.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("h1",[this._v("用前须知(这是关于表格的须知，你应该认真读完下面的内容)")]),n("pre",[n("code",[this._v(" 1. 表格解决卡顿问题，那么虚拟表格原理呢大概就是： 减少对DOM节点的渲染，通过滚动函数节流实现滚动后事件来动态渲染数据\n\n 2. 基础表格其实就是element的表格的升级版（如果你想使用个普通表格你无需安装其他库，就使用这个表格即可），你可以发现基础表格里面的示例没有配置：use-virtual 这个属性。\n\n 2.5 基础表格没有使用use-virtual属性，代表表格数据不多，只想要一个普通的表格。如果你表格卡。请你关注下虚拟表格部分。\n\n 3. 使用u-table 开启use-virtual虚拟可以支持微小的合并行|列 如2列 2行，支持多级头, 超过2行2列可能布局错乱，因为虚拟滚动的原理导致某些节点并未渲染。\n\n 4. ux-grid解决列多 行多导致卡的情况， u-table解决行多的情况，不解决列多的情况（如你的列超过70+，你可能就需要使用ux-grid了，因为此时你需要把列也虚拟）\n\n 5. 重点：虚拟表格集成了基础表格的东西（如属性/方法/事件），但是虚拟表格呢，有如上面的3条不可实现！所以呢先看看基础表格有什么东西！\n\n 6. 虚拟表格在本文档中呢， 意思就是解决了数据量多导致卡顿的情况！ 基础表格在文档中呢，意思就是升级版的el-table（但是没解决数据多卡的情况）！\n\n 7. 编辑型表格呢，是解决那种表格单元带有输入框或者选择时间等等的情况，而导致卡顿的场景！意思就是表格单元格具有一定的操作，单元格有自定义组件或者UI库组件等等\n\n 8. 有了表格,怎么导出表格数据为excel并且带样式呢?,[请点击](https://github.com/livelyPeng/pl-export-excel)\n")])])])}],!1,null,null,null);n.default=u.exports}}]);