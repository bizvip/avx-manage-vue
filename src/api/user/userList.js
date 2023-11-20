import { request } from '@/utils/request.js'

/**
 * 用户管理 API JS
 */

export default {

  /**
   * 获取用户管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'user/list/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加用户管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'user/list/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新用户管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'user/list/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取用户管理
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'user/list/read',
      method: 'get',
      data
    })
  },

  /**
   * 将用户管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'user/list/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取用户管理数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'user/list/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复用户管理数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'user/list/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除用户管理
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'user/list/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改用户管理数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'user/list/changeStatus',
      method: 'put',
      data
    })
  },


}