import { request } from '@/utils/request.js'

/**
 * 统计报表 API JS
 */

export default {

  /**
   * 获取统计报表分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'analysis/clickTotal/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取统计报表
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'analysis/clickTotal/read',
      method: 'get',
      data
    })
  },

  /**
    * 统计报表导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'analysis/clickTotal/import',
      method: 'post',
      data
    })
  },

  /**
   * 统计报表下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'analysis/clickTotal/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 统计报表导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'analysis/clickTotal/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}