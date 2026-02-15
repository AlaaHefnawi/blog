import "../Container/Container.css"

const Container = ({children, title}) => {
  return (
    <>
    <div className="secSection">
      <h2>{title}</h2>
      <div className="cards">
      {children}
    </div>
    </div>
    
    </>
    
  )
}

export default Container
