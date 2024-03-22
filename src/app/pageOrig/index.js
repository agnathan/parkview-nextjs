import Header from './header'
import Cta from './cta'

const Page = () => {
  return (
    <div id='page' class='site'>
      <Header />
      <div id='content' class='site-content'>
        <div id='primary' class='content-area'>
          <main id='main' class='site-main' role='main'>
            <Cta />
            <div id='intro' class='row row-accent'>
              <div class='container'>
                <h1>
                  Parkview Apartments in Lincoln, NE ~ Spacious 1 &amp; 2
                  Bedrooms in an Ideal Location
                </h1>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Page
