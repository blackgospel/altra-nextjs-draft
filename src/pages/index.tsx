import Component from 'components/global/component/index.component'
import Page from 'components/global/page/index.page'

const Home = () => {
  return (
    <Page>
      {/* <HomeHero /> */}
      {Array(100)
        .fill(1)
        .map((index) => {
          return (
            <Component key={index}>
              <div style={{ textAlign: 'center' }}>
                <h1>Home Hero lads</h1>
                <h2>Home Hero lads</h2>
                <h3>Home Hero lads</h3>
                <p>Home Hero lads</p>
                <a>Home Hero lads</a>
              </div>
            </Component>
          )
        })}
    </Page>
  )
}

export default Home
