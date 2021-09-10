import stls from '@/styles/components/forms/FormLearnMore.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconRectangle } from '@/components/icons'

type FormLearnMoreType = {
  classNames?: string[]
}

const FormLearnMore = ({ classNames = [] }: FormLearnMoreType) => {
  const handeSubmit = () => {
    alert('Форма пока что никуда не отправляет заявку')
  }

  const container = getClassNames({ classNames })

  // fills here are used as fallbacks for older browsers
  return (
    <div className={classnames([stls.container], container)}>
      <IconRectangle classNames={[stls.icontop]} fill='epsilon' opacity='o01' />
      <IconRectangle
        classNames={[stls.iconbottom]}
        fill='epsilon'
        opacity='o01'
      />
      <div className={stls.heading}>
        <h2 className={stls.title}>Узнайте больше</h2>
        <p className={stls.description}>
          Оставьте свой номер телефона и мы свяжемся с вами
        </p>
      </div>
      <form className={stls.form}>
        <div className={stls.inputs}>
          <input
            type='tel'
            className={stls.inptTel}
            placeholder='Номер телефона'
          />
          <input
            type='button'
            className={stls.inptSubmit}
            value='Перезвоните мне'
            onClick={handeSubmit}
          />
        </div>
        <p className={stls.personaldata}>
          Отправляя заявку, я соглашаюсь на обработку персональных данных
        </p>
      </form>
    </div>
  )
}

export default FormLearnMore
