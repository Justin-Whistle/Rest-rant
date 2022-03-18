const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
          stars += '⭐️'
        }
        rating = (
            <h3>
              {stars} stars
            </h3>
        )
    
        comments = data.place.comments.map(comment => { 
            return (
                <div className="col-sm-4">
                    <div key={comment.id} className="border">
                        <h2 className="rant">{comment.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
                        <h4>{comment.content}</h4>
                        <h3>
                            <strong>- {comment.author}</strong>
                        </h3>
                        <h4>Rating: {comment.stars}</h4>
                        <form method="POST" action={`/places/${data.place.id}/comment/${comment.id}?_method=DELETE`}>
                            <input type="submit" className="btn btn-danger" value="Delete Comment"/>
                        </form>
                    </div>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h1><strong>{ data.place.name }</strong></h1>
                        <h2>
                            <strong>Rated:</strong>
                        </h2>
                        <h2>
                            {rating}
                        </h2>
                        <h2>
                            <strong>Description:</strong>
                        </h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                                    Edit 
                                </a> 
                            </div> 
                            <div className="col-sm-6"> 
                                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                                    <button type="submit" className="btn btn-danger">
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Got Your Own Rant or Rave?</h3>
                        <h4>Comments:</h4>
                        <div className="row">
                            {comments}
                        </div>
                        <form method="POST" action={`/places/${data.place.id}/comment`}>
                            <div className="form-group col-sm-12">
                                <label htmlFor="content">Content</label>
                                <textarea id="content" name="content" className="form-control"></textarea> 
                            </div>
                            <div class="row">
                                <div className="form-group col-sm-4">
                                    <label htmlFor="author">Author</label>
                                    <input className="form-control" id="author" name="author"/>
                                </div>
                                <div className="form-group col-sm-4">
                                    <label htmlFor="stars">Star Rating</label>
                                    <input type="range" step="0.5" min="1" max="5" className="form-control" id="stars" name="stars"/>
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="rant">Rant?</label>
                                    <input type="checkbox" ClassName="form-control" id="rant" name="rant"/>
                                </div>
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form> 
                    </div>
                </div>
            </main>        
        </Def>
    )
}

module.exports = show

