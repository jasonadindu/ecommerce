
function Ecommerce(props) {
  return (
    <div className="grid lg-5">
        {props.pages.map(page => (
            <figure key={page.id}>
                <img alt={page.title} src={page.poster}/>
            </figure>
        ))}
    </div>
  )
}

export default Ecommerce