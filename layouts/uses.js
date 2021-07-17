import Container from '@io/components/Container'

const UsesLayout = ({ frontMatter, children }) => {

  return (
    <Container
      title={frontMatter.title}
      description={frontMatter.summary}
    >
      <article className="flex flex-col">
        <div className="prose dark:prose-dark text-gray-900 dark:text-gray-50">{children}</div>
      </article>
    </Container>
  )
}

export default UsesLayout