import { request } from '@/utils/request.js'

/**
 * 图片管理 API JS
 */

export default {

  /**
   * 获取图片管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'picture/list/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加图片管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'picture/list/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新图片管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'picture/list/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取图片管理
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'picture/list/read',
      method: 'get',
      data
    })
  },

  /**
   * 将图片管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'picture/list/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取图片管理数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'picture/list/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复图片管理数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'picture/list/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除图片管理
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'picture/list/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改图片管理数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'picture/list/changeStatus',
      method: 'put',
      data
    })
  },

  /**
    * 图片管理导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'picture/list/import',
      method: 'post',
      data
    })
  },

  /**
   * 图片管理下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'picture/list/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 图片管理导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'picture/list/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}