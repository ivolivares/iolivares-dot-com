import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import ExternalLink from '@io/components/ExternalLink'
import Container from '@io/components/Container'

const UsesLayout = ({ frontMatter, children }) => {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  return (
    <Container
      title={frontMatter.title}
      description={frontMatter.summary}
      classNames="lg:container pb-10 px-5 sm:px-10 lg:px-20 xl:px-35 2xl:px-64 mx-auto sm:mt-4 mb-4 flex flex-col justify-center w-full m-4 mx-auto shadow-xl bg-white dark:bg-gray-700 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-20"
    >
      <article className="flex flex-col">
        <div className="prose dark:prose-dark">{children}</div>
      </article>
      <div className="text-right text-sm mt-5">
        <ExternalLink
          href={`https://github.com/ivolivares/iolivares-dot-com/edit/main/data/uses.${locale}.mdx`}
        >
          {t('edit-on-github')}
        </ExternalLink>
      </div>
    </Container>
  )
}

export default UsesLayout