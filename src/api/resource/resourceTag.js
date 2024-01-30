import { request } from '@/utils/request.js'

/**
 * 标签管理 API JS
 */

export default {

  /**
   * 获取标签管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'resource/tag/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加标签管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'resource/tag/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新标签管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'resource/tag/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取标签管理
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'resource/tag/read',
      method: 'get',
      data
    })
  },

  /**
   * 将标签管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'resource/tag/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取标签管理数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'resource/tag/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复标签管理数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'resource/tag/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除标签管理
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'resource/tag/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改标签管理数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'resource/tag/changeStatus',
      method: 'put',
      data
    })
  },

  /**
    * 标签管理导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'resource/tag/import',
      method: 'post',
      data
    })
  },

  /**
   * 标签管理下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'resource/tag/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 标签管理导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'resource/tag/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}