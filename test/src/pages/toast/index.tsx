import { YuToast, YuButton } from '@yu-kit/components'
import { ElementHandler } from '@yu-kit/kit'
const { info } = ElementHandler(YuToast)

import './style.scss'

const Toast = () => {
  console.log('3234233333')
  return (
    <div className="test-content">
      <div className="test-button">
        <YuButton
          type="primary"
          onClick={() => {
            info({ title: '这是一个toast' })
          }}
        >
          点击展示toast
        </YuButton>
      </div>
    </div>
  )
}

export default Toast
