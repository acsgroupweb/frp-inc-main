import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class BlogList extends React.Component {
  constructor(props) {
    super(props)
    this.domRef = React.createRef()
    this.state = { feedbackMsg: null, errors: null }
    this.feedbackRef = React.createRef()
  }

  handleChange = e => {
    //this.validateForm(e.target.name)
    this.setState({ [e.target.name]: e.target.value })
    //console.log(this.state)
  }

  validateForm = name => {
    let validForm = true
    let errors = {}

    if (!this.state["email"]) {
      validForm = false
      errors["email"] = "E-mail field cannot be empty"
    } else if (typeof this.state["email"] !== "undefined") {
      let lastAtPos = this.state["email"].lastIndexOf("@")
      let lastDotPos = this.state["email"].lastIndexOf(".")

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          this.state["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          this.state["email"].length - lastDotPos > 2
        )
      ) {
        validForm = false
        errors["email"] = "E-mail is not valid"
      }
    }

    this.setState({ errors: errors })

    return validForm
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.validateForm()) {
      return
    }

    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => {
        this.setState({
          email: "",
          feedbackMsg: "Thank you for subscribing to FRP news!",
        })

        setTimeout(() => {
          this.setState({ feedbackMsg: "" })
        }, 10000)

        this.domRef.current.reset()
      })
      .catch(error => {
        this.setState({
          email: "",
          feedbackMsg: "There was an error! We will get back to you shortly",
        })
      })
  }
  render() {
    //

    const { currentPage, numPages } = this.props.pageContext

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? "/news" : "/news/" + (currentPage - 1).toString()
    const nextPage = "/news/" + (currentPage + 1).toString()

    const posts = this.props.data.allMarkdownRemark.edges
    const categoryList = this.props.data.categoryList.group

    return (
      <Layout>
        <SEO title="All posts" />
        <div className="news-list-container">
          <div className="section-title">
            <span className="top-text">
              FRP Ne<span className="half-color">w</span>s
            </span>
            <span className="horizontal-line"></span>
          </div>
          <div className="news-list-content">
            <ol style={{ listStyle: `none` }}>
              {posts.map(post => {
                const title =
                  post.node.frontmatter.title || post.node.fields.slug

                return (
                  <li key={post.node.fields.slug}>
                    <article
                      className="news-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <div className="single-page-title">
                        <Link
                          to={post.node.fields.slug}
                          key={post.node.fields.slug}
                          itemProp="url"
                          state={{
                            pathName: this.props.location.pathname,
                          }}
                        >
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </div>
                      <header>
                        <div className="news-meta-data">
                          <small>Posted on {post.node.frontmatter.date}</small>
                          <small>
                            Category:{" "}
                            <Link
                              className="category-link"
                              to={`/news/category/${post.node.frontmatter.category}`}
                            >
                              {post.node.frontmatter.category}
                            </Link>
                          </small>
                        </div>
                      </header>
                      <div>
                        <Link
                          to={post.node.fields.slug}
                          state={{
                            pathName: this.props.location.pathname,
                          }}
                        >
                          <Img
                            fluid={
                              post.node.frontmatter.newsItemImage
                                .childImageSharp.fluid
                            }
                            alt={"Featured Image for- " + title}
                          />
                        </Link>
                      </div>

                      <section>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.node.html.split("\n").slice(0, 1),
                          }}
                        />
                        <div className="news-more-container">
                          <Link
                            to={post.node.fields.slug}
                            itemProp="url"
                            className="news-more-text"
                            state={{
                              pathName: this.props.location.pathname,
                            }}
                          >
                            <span itemProp="link">Read More</span>
                          </Link>
                          <span className="horizontal-line"></span>
                        </div>
                      </section>
                    </article>
                  </li>
                )
              })}
            </ol>
            <div className="news-navigation">
              {!isFirst && (
                <Link
                  to={prevPage}
                  rel="next"
                  className="previous news-navigation-text"
                >
                  Prev
                </Link>
              )}
              {!isLast && (
                <Link
                  to={nextPage}
                  rel="next"
                  className="next news-navigation-text"
                >
                  Next
                </Link>
              )}
            </div>
          </div>
          <div className="news-list-sidebar">
            <div className="sidebar-item">
              <div className="title">Categories</div>
              <div className="content">
                {
                  <Link to="/news">
                    <div className="red-category-button selected">
                      <span className="name">{`All (${this.props.data.categoryList.totalCount})`}</span>
                    </div>
                  </Link>
                }
                {categoryList.map(category => {
                  return (
                    <Link to={`/news/category/${category.category}`}>
                      <div
                        key={category.category}
                        className="red-category-button"
                      >
                        <span className="name">{`${category.category} (${category.totalCount})`}</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
            <div className="sidebar-item">
              <div className="title">Subscribe to News</div>
              <div className="content">
                {this.state.feedbackMsg && (
                  <div className="error-message" ref={this.feedbackRef}>
                    {this.state.feedbackMsg}
                  </div>
                )}
                {this.state.errors && this.state.errors["email"] && (
                  <div className="error-message">
                    {this.state.errors["email"]}
                  </div>
                )}
              </div>
              <div className="newsletter-section">
                <div>
                  <form
                    name="newsletter-news-list"
                    method="post"
                    action="/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                    ref={this.domRef}
                    noValidate={true}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input
                      type="hidden"
                      name="form-name"
                      value="newsletter-news-list"
                    />
                    <div hidden>
                      <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <input
                      className="newsletter-box"
                      type={"email"}
                      name={"email"}
                      placeholder="E-mail Address"
                      onChange={this.handleChange}
                    />
                    <button
                      className="go-button"
                      aria-label="Subscribe to Newsletter"
                      type="submit"
                    >
                      GO
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { layout: { eq: "news" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            category
            newsItemImage {
              childImageSharp {
                # Specify a fixed image and fragment.
                # The default width is 400 pixels
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          html
        }
      }
    }
    categoryList: allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "news" } } }
    ) {
      group(field: frontmatter___category) {
        category: fieldValue
        totalCount
      }
      totalCount
    }
  }
`
