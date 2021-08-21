const ListGroup = ({ children }) => {
  return (
    <div className="list-group flex flex-wrap justify-start flex-grow mt-8 text-left md:mt-0 ">
      {children}
    </div>
  )
}

export default ListGroup