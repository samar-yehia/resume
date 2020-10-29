import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import education from '../../data/education'
import { Link, withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'


const Layout = loadable(() => import('../components/layout'))

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.fontColor};
  opacity: .2;
`

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0,0,0,0.51);
`

const EducationCard = styled.div`
  text-decoration: none;
  color: inherit;

  ${({ href }) => href && css`
    &:hover ${Image}{
      transition: transform .5s;
      transform: translateY(-5px);
    }
  `}
`

const Education = ({ className, location }) => {
  const title = "Education"
  const { milestones } = education
  const { keywords } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={title}
        keywords={keywords}
      />

      <Hero
        heroImg={siteConfig.siteCover}
        title={title}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>

          {milestones.map((study, i) => (
            <Row>
              <Col
                key={i}

              >
                <EducationCard
                  as={"div"}
                >
                  <Image src={withPrefix(study.image)} />


                  <h4><Link to={study.url}>{study.university}</Link></h4>
                  <h5><i>{study.degree}</i></h5>

                  <div>
                    <h6 style={{ display: "flex" }}> {study.field}

                      {study.grade && (
                        <p><i>    - Grade: {study.grade}</i></p>
                      )}
                    </h6>
                  </div>
                  <p style={{ color: "gray" }}>{study.from} - {study.to}</p>
                  <br />
                  <p>{study.details}</p>
                </EducationCard>
                <Separator />
              </Col>

            </Row>
          ))}

        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Education)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

`
