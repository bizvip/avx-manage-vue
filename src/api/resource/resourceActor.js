import { request } from '@/utils/request.js'

/**
 * 演员信息 API JS
 */

export default {

  /**
   * 获取演员信息分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'resource/actor/index',
      method: 'get',
      params
    })
  },

  /**
   * 更新演员信息数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'resource/actor/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 添加演员信息
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'resource/actor/save',
      method: 'post',
      data
    })
  },

  /**
   * 读取演员信息
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'resource/actor/read',
      method: 'get',
      data
    })
  },

  /**
   * 将演员信息删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'resource/actor/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取演员信息数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'resource/actor/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复演员信息数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'resource/actor/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除演员信息
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'resource/actor/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改演员信息数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'resource/actor/changeStatus',
      method: 'put',
      data
    })
  },

  /**
    * 演员信息导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'resource/actor/import',
      method: 'post',
      data
    })
  },

  /**
   * 演员信息下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'resource/actor/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 演员信息导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'resource/actor/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}