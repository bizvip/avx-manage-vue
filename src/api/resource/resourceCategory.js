import { request } from '@/utils/request.js'

/**
 * 内容分类 API JS
 */

export default {

  /**
   * 获取内容分类分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'resource/category/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加内容分类
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'resource/category/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新内容分类数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'resource/category/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取内容分类
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'resource/category/read',
      method: 'get',
      data
    })
  },

  /**
   * 将内容分类删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'resource/category/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取内容分类数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'resource/category/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复内容分类数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'resource/category/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除内容分类
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'resource/category/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改内容分类数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'resource/category/changeStatus',
      method: 'put',
      data
    })
  },

  /**
    * 内容分类导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'resource/category/import',
      method: 'post',
      data
    })
  },

  /**
   * 内容分类下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'resource/category/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 内容分类导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'resource/category/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}