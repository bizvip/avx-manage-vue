import { request } from '@/utils/request.js'

/**
 * 爬取记录 API JS
 */

export default {

  /**
   * 获取爬取记录分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'spider/log/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取爬取记录
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'spider/log/read',
      method: 'get',
      data
    })
  },

  /**
   * 将爬取记录删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'spider/log/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取爬取记录数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'spider/log/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复爬取记录数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'spider/log/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除爬取记录
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'spider/log/realDelete',
      method: 'delete',
      data
    })
  },

  /**
    * 爬取记录导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'spider/log/import',
      method: 'post',
      data
    })
  },

  /**
   * 爬取记录下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'spider/log/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 爬取记录导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'spider/log/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}