import { request } from '@/utils/request.js'

/**
 * 点击记录 API JS
 */

export default {

  /**
   * 获取点击记录分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'analysis/clickLog/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取点击记录
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'analysis/clickLog/read',
      method: 'get',
      data
    })
  },

  /**
    * 点击记录导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'analysis/clickLog/import',
      method: 'post',
      data
    })
  },

  /**
   * 点击记录下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'analysis/clickLog/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 点击记录导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'analysis/clickLog/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}