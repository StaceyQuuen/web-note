/*
 * @Author: your name
 * @Date: 2021-11-15 10:26:36
 * @LastEditTime: 2021-11-15 14:28:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \web-note\axios\api\goods.js
 */
// goods.js
import myAxios from './axios';
export function getListAPI(paramsList) {
    return myAxios({
      url: '/api/list',
      method: 'get',
      params: paramsList
    }, {
      loading: true,
      reduct_data_format: false
    }, {
      text: '获取列表数据....'
    })
  }
  
