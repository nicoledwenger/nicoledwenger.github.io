import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from '../components/text/Heading'
import Paragraph from '../components/text/Paragraph'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading>NOT FOUND</Heading>
    <Paragraph>You just hit a route that doesn&#39;t exist.</Paragraph>
    <Paragraph>Go back to the <Link to="/">homepage</Link> and view my recent projects.</Paragraph>
  </Layout>
)

export default NotFoundPage
