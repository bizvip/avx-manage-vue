import { request } from '@/utils/request.js'

/**
 * 相册管理 API JS
 */

export default {

  /**
   * 获取相册管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'picture/album/index',
      method: 'get',
      params
    })
  },

  /**
   * 更改相册管理数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'picture/album/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 从回收站获取相册管理数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'picture/album/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复相册管理数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'picture/album/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除相册管理
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'picture/album/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 将相册管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'picture/album/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 读取相册管理
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'picture/album/read',
      method: 'get',
      data
    })
  },

  /**
   * 更新相册管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'picture/album/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 添加相册管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'picture/album/save',
      method: 'post',
      data
    })
  },


}