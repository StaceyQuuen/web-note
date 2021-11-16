/*
 * @Author: your name
 * @Date: 2021-11-16 16:59:05
 * @LastEditTime: 2021-11-16 17:16:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue2测试\test\tests\unit\zhifeiji.spec.js
 */
import Vue from "vue";
import zhifeijiComp from "@/components/ZhiFeiJi.vue";
import { mount } from "@vue/test-utils";

describe("测试zhifeiji组件", () => {
    it("测试初始化的data", () => {
        expect(zhifeijiComp.data().msg).toBe("vue test");
    });
    //created和mounted里数据测试都是一样的
    it("测试新建完毕后，create生命周期后的数据", () => {
        //created
        let vm = new Vue(zhifeijiComp).$mount();
        expect(vm.msg).toBe("aftermounted");
    });
    it("测试新建完毕后，create生命周期后的数据", () => {
        //mounted
        let vm = new Vue(zhifeijiComp).$mount();
        expect(vm.msg1).toBe("测试下vue组件");
    });
    //点击事件测试
    it("测试点击后，msg的改变", () => {
        // $mount处理不了用户交互，所以我们要用到vue官方推荐的@vue/test-utils
        let wrapper = mount(zhifeijiComp);
        expect(wrapper.vm.msg).toBe("aftermounted");
        //点击一下
        wrapper.find(".btn").trigger("click");
        expect(wrapper.vm.msg).toBe("click over");
    });
});
