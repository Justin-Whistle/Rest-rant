const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
            <h1>HOME</h1>
            <div>
              <img src="/images/griller.jpg" width={500} height={400} alt="griller" />
            </div>
            <div>
            Photo by <a href="https://unsplash.com/@goodeats_yqr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">GoodEats YQR</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <a href="/places">
            <button className="btn-primary">Places Page</button>
            </a>
          </main>
      </Def>
    )
}

module.exports = home