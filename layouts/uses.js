import Container from '@io/components/Container';

const UsesLayout = ({ frontMatter, children }) => {

  return (
    <Container
      title={frontMatter.title}
      description={frontMatter.summary}
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}

export default UsesLayout