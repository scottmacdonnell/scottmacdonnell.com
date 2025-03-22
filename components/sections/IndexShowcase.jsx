import * as Showcase from 'components/Showcase'
import Container from 'components/Container'

import styles from 'styles/components/sections/IndexShowcase.module.scss'

export default function IndexShowcase() {
  return (
    <div className={styles.IndexShowcase}>
      <div className={styles.Content}>
        <Container>
          <Showcase.Wrapper>
            <Showcase.FeaturedRight>
              <Showcase.FeaturedWrapper>
                <Showcase.Featured
                  name="Larry Fitzgerald Jr. (2019-2021)"
                  displayLink="larryfitzgerald.com"
                  href="https://larryfitzgerald.com"
                  img="/images/showcase/larryfitzgerald.png"
                />
              </Showcase.FeaturedWrapper>

              <Showcase.SecondaryWrapper>
                <Showcase.Secondary
                  name="Mamma Rita's Cucina"
                  displayLink="mammaritas.ca"
                  href="https://mammaritascucina.scottmacdonnell.com"
                  img="/images/showcase/mammaritas.png"
                />
                <Showcase.Secondary
                  name="Newman & Sversky LLP."
                  displayLink="newmansversky.com"
                  href="https://newmansversky.com"
                  img="/images/showcase/newmansverskyllp.png"
                />
              </Showcase.SecondaryWrapper>
            </Showcase.FeaturedRight>
            <Showcase.SecondaryOnly>
                <Showcase.Secondary
                  name="Spring Lakes Golf Club"
                  displayLink="springlakesgolf.com"
                  href="https://github.com/scottmacdonnell/springlakesgolf.com"
                  img="/images/showcase/springlakesgolf.png"
                />
                <Showcase.Secondary
                  name="deepsix"
                  displayLink="deepsixband.com"
                  href="https://deepsixband.scottmacdonnell.com"
                  img="/images/showcase/deepsixband.png"
                />
            </Showcase.SecondaryOnly>
          </Showcase.Wrapper>
        </Container>
      </div>
    </div>
  )
}
