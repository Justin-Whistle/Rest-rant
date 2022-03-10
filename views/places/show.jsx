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
        let averageRating = sumRatings / data.place.comments.length
        rating = (
            <h3>
              {averageRating} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
              <div className="border">
                <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                <h4>{c.content}</h4>
                <h3>
                  <stong>- {c.author}</stong>
                </h3>
                <h4>Rating: {c.stars}</h4>
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
                        <h1>{ data.place.name }</h1>
                        <h2>
                            {rating}
                        </h2>
                        <h2>
                            Description:
                        </h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <p>
                            no ratings yet
                        </p>
                        <div className="row">
                            <div className="col-sm-6">
                                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                                    Edit
                                </a>
                            </div> 
                            <div className="col-sm-6">
                                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                                    <button type="submit" className="btn btn-danger">
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Got Your Own Rant or Rave?</h2>
                        <form method="POST" action={`/comments${data.id}?_method=POST`}>
                            <div className="form-group col-sm-12">
                                <label htmlFor="content">Content</label>
                                <textarea id="content" name="content" class="form-control" value={comments.content}></textarea> 
                            </div>
                            <div class="row">
                                <div className="form-group col-sm-4">
                                    <label htmlFor="author">Author</label>
                                    <input className="form-control" id="author" name="author" value={comments.author} />
                                </div>
                                <div className="form-group col-sm-4">
                                    <label htmlFor="stars">Star Rating</label>
                                    <input type="range" step="0.5" min="1" max="5" className="form-control" id="stars" name="stars" value={comments.stars} />
                                </div>
                                <div className="form-group col-sm-3">
                                    <label htmlFor="rant">Rant?</label>
                                    <input type="checkbox" ClassName="form-control" id="rant" name="rant" value={comments.rant} />
                                </div>
                                <input className="btn btn-primary" type="submit" value="Add Comments" />
                            </div>
                        </form> 
                    </div>
                </div>
                <h2>Comments</h2>
                {comments}
            </main>        
        </Def>
    )
}

module.exports = show
