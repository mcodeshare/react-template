import sdk from '../sdk'
import React from 'react'

export default function SdkUseTemplate() {
  function getUser() {
    sdk.getUserInfo({
      data: {},
      success(res) {
        console.log('成功', res)
      },
      fail(err) {
        console.log('失败', err)
      },
      complete: (res) => {
        console.log('成功、失败都返回', res)
      },
    })
  }
  return (
    <div className="sdk-use-template-wrapper">
      <button onClick={() => getUser()}>获取用户信息</button>
    </div>
  )
}
