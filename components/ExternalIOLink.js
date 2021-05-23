const ExternalIOLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    rel="prerender"
    href={href}
  >
    {children}
  </a>
);

export default ExternalIOLink