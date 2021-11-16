/*
 * @Author: your name
 * @Date: 2021-11-16 16:47:02
 * @LastEditTime: 2021-11-16 17:10:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue2测试\test\tests\unit\example.spec.js
 */
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

// import { add } from "@/utils/index.js";
// describe("测试加法函数", () => {
//   //测试代码可读性最好
//   //分组
//   it("一个具体的功能测试，测测试数字相加", () => {
//     expect(add(1, 2)).toBe(3);
//   });
//   it("一个具体的功能测试，测测试数字和字符串相加", () => {
//     expect(add("a", 2)).toBe("a2");
//   });
//   // it("一个具体的功能测试，测测试数字字符串相加", () => {
//   //   expect(add("1", 2)).toBe(3);
//   // });
// });
