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
      classNames="container pb-10 px-64 mx-auto flex flex-col justify-center w-full m-4 mx-auto shadow-xl bg-white dark:bg-gray-700 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-20"
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