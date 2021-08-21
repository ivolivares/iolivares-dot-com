const ListItems = ({ title, children }) => {
  return (
    <div className="list-items w-full space-y-4 md:w-1/2">
      <p className="mb-4 text-xl font-bold tracking-widest">{title}</p>
      <nav className="mb-10 list-none">{children}</nav>
    </div>
  )
}

export default ListItems