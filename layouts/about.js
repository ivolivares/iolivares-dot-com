import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import ExternalLink from '@io/components/ExternalLink'
import Container from '@io/components/Container'

const AboutLayout = ({ frontMatter, children }) => {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  return (
    <Container
      title={frontMatter.title}
      description={frontMatter.summary}
    >
      <article className="flex flex-col">
        <div className="prose dark:prose-dark">{children}</div>
      </article>
      <div className="text-right text-sm mt-5">
        <ExternalLink
          href={`https://github.com/ivolivares/iolivares-dot-com/edit/main/data/about.${locale}.mdx`}
        >
          {t('edit-on-github')}
        </ExternalLink>
      </div>
    </Container>
  )
}

export default AboutLayout