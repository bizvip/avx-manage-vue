import { request } from '@/utils/request.js'

/**
 * 标签分组 API JS
 */

export default {

  /**
   * 获取标签分组分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'resource/tagGroup/index',
      method: 'get',
      params
    })
  },

  /**
   * 标签分组导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'resource/tagGroup/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },

  /**
    * 标签分组导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'resource/tagGroup/import',
      method: 'post',
      data
    })
  },

  /**
   * 标签分组下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'resource/tagGroup/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 更改标签分组数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'resource/tagGroup/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 从回收站获取标签分组数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'resource/tagGroup/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复标签分组数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'resource/tagGroup/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除标签分组
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'resource/tagGroup/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 将标签分组删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'resource/tagGroup/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 读取标签分组
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'resource/tagGroup/read',
      method: 'get',
      data
    })
  },

  /**
   * 更新标签分组数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'resource/tagGroup/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 添加标签分组
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'resource/tagGroup/save',
      method: 'post',
      data
    })
  },


}