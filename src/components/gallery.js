

const Gallery = () => {
    const pages = [
        {
          id: 1,
          "title": "Golden Gate bridge",
          poster: "https://images.unsplash.com/photo-1683177920180-0175523b0271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        },
        {
          id: 2,
          poster: "https://images.unsplash.com/photo-1682687982141-0143020ed57a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        },
        {
          id: 3,
          poster: "https://images.unsplash.com/photo-1683013360092-3581b3ae6b02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
          id: 4,
          poster: "https://images.unsplash.com/photo-1682700372357-089abd65439d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        
      ];

      const renderImages = pages.map((page, index) => {
        const { id, poster} = page;
        console.log(poster)
        return <div className="image" key={index}>
            <img src={poster} alt={id}/>
        </div>
      })

      return <div className="gallery">
        <div className="container">
        {renderImages}

        </div>
      </div>
}

export default Gallery;