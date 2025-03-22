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
                  name="Mamma Rita's Cucina"
                  displayLink="mammaritas.ca"
                  href="https://mammaritascucina.scottmacdonnell.com"
                  img="/images/showcase/mammaritas.png"
                />
              </Showcase.FeaturedWrapper>

              <Showcase.SecondaryWrapper>
                <Showcase.Secondary
                  name="deepsix"
                  displayLink="deepsixband.com"
                  href="https://deepsixband.scottmacdonnell.com"
                  img="/images/showcase/deepsixband.png"
                />
                <Showcase.Secondary
                  name="Larry Fitzgerald Jr."
                  displayLink="larryfitzgerald.com"
                  href="https://larryfitzgerald.scottmacdonnell.com"
                  img="/images/showcase/larryfitzgerald.png"
                />
              </Showcase.SecondaryWrapper>
            </Showcase.FeaturedRight>
          </Showcase.Wrapper>
        </Container>
      </div>
    </div>
  )
}
