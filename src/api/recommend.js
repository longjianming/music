/**
 * Created by Administrator on 2019/2/15.
 */

import jsonp from "common/js/jsonp"
import {commonPaams,options} from './config'

export function getRecommend(){
  const url='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data=Object.assign({},commonPaams,{
    platform:"h5",
    uin:0,
    needNewCode:1
  })
  return jsonp(url,data,options)
}
