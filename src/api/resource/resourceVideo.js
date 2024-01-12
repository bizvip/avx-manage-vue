import { request } from '@/utils/request.js'

/**
 * 视频信息记录表 API JS
 */

export default {

  /**
   * 获取视频信息记录表分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'resource/video/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加视频信息记录表
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'resource/video/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新视频信息记录表数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'resource/video/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取视频信息记录表
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'resource/video/read',
      method: 'get',
      data
    })
  },

  /**
   * 将视频信息记录表删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'resource/video/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取视频信息记录表数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'resource/video/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复视频信息记录表数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'resource/video/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除视频信息记录表
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'resource/video/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改视频信息记录表数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'resource/video/changeStatus',
      method: 'put',
      data
    })
  },

  /**
    * 视频信息记录表导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'resource/video/import',
      method: 'post',
      data
    })
  },

  /**
   * 视频信息记录表下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'resource/video/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 视频信息记录表导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'resource/video/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}