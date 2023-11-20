import { request } from '@/utils/request.js'

/**
 * 广告主与广告位 API JS
 */

export default {

  /**
   * 获取广告主与广告位分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'analysis/customer/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加广告主与广告位
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'analysis/customer/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新广告主与广告位数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'analysis/customer/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取广告主与广告位
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'analysis/customer/read',
      method: 'get',
      data
    })
  },

  /**
   * 将广告主与广告位删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'analysis/customer/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取广告主与广告位数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'analysis/customer/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复广告主与广告位数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'analysis/customer/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除广告主与广告位
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'analysis/customer/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改广告主与广告位数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'analysis/customer/changeStatus',
      method: 'put',
      data
    })
  },


}