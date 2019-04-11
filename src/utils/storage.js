/**
 * @class storage 统一处理本地缓存
 * @method {set} set storage
 * @method {get} get storage
 * @method {remove} remove storage
 * @method {clear} clear storage
 * @author swan created on 2019/04/10
 * @file last modified by swan on 2019/04/10
 */

class storage {
  constructor(name) {
    this.name = name
  }
  set(key, value, time = 0) {
    if (!key) throw new Error(`error in set ${this.name}: key is required`)
    let expireDate = time === 0 ? 0 : new Date().getTime + time * 1000
    if (typeof value === 'object') {
      value = JSON.stringify(value)
      value = 'obj-' + value
    } else {
      value = 'str-' + value
    }
    value = JSON.stringify({
      data: value,
      time: expireDate
    })
    window[this.name].setItem(key, value)
  }
  get(key) {
    if (!key) throw new Error(`error in get ${this.name}: key is required`)
    let value = window[this.name].getItem(key)
    if (!value) {
      return
    } else {
      value = JSON.parse(value)
      let currTime = new Date().getTime()
      if (value.expireDate && currTime < value.expireDate) {
        this.remove(key)
        return undefined
      } else {
        value = value.data
        if (value.indexOf('obj-') === 0) {
          value = value.slice(4)
          return JSON.parse(value)
        } else {
          return value.slice(4)
        }
      }
    }
  }
  remove(key) {
    if (key) {
      window[this.name].removeItem(key)
    } else {
      throw new Error(`error in remove ${this.name}: key is required`)
    }
  }
  clear() {
    window[this.name].clear()
  }
}

export const localStore = new storage('localStorage')

export const sessionStore = new storage('sessionStorage')
