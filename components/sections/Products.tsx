import stls from '@/styles/components/sections/Products.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'

type ProductsType = {
  classNames?: string[]
}

const Products = ({ classNames = [] }: ProductsType) => {
  const container = getClassNames({ classNames })

  return (
    <section className={classnames([stls.container], container)}>
      <Wrapper classNames={[stls.wrapper]}>
        <h2 className={stls.title}>Продукция</h2>
        Здесь будут карточки продукции (т.е Серверы, Графические серверы и
        т.д.), с ссылками на выбор производителя
      </Wrapper>
    </section>
  )
}

export default Products
