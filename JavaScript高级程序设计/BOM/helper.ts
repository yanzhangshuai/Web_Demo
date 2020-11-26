export class Helper{
  static formatGetJson(uri: string, data: { [T: string]: string } = {}) {
    let keys = Object.keys(data)
    if (!keys.length) return uri
    let joiner = uri.lastIndexOf('?') == -1 ? '?' : '&'
    return (
      uri +
      joiner +
      keys
        .map(item => {
          if (typeof data[item] === 'undefined') {
            return ''
          } else if (!Array.isArray(data[item])) {
            return `${item}=${data[item]}`
          } else {
            //  如果当前为数组,那么就解析数组参数
            if (!data[item].length) {
              return ''
            }
            // @ts-ignore
            const arrData: Array<any> = data[item]
            return arrData
              .map((d, i) => `${item}[${i}]=${d}`)
              .filter(item => item !== '')
              .join('&')
          }
        })
        .filter(item => item !== '')
        .join('&')
    )
  }

  static awaitWrapper(promise: Promise<any>) {
    return promise.then((data: any) => [null, data]).catch((err: any) => [err, null])
  }

  static sleep(delay: number) {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve()
      }, delay)
    )
  }

  /**
   * 用于替换URL API
   *
   * @static
   * @param {string} url
   * @param {...any} target
   * @returns
   * @memberof Helper
   */
  static replaceAPI(url: string, ...target: any) {
    const replace = (key: string, target: any) => {
      return url.replace(new RegExp(key), target)
    }
    if (Array.isArray(target)) {
      return target.reduce((str, item) => replace(':\\w+', item), url)
    } else {
      return replace(':w+', target)
    }
  }
}