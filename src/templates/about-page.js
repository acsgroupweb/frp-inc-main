import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import useSiteMetadata from "../hooks/SiteMetadata"
import Seo from "../components/seo"
import Layout from "../components/siteLayout"
// import GoBack from "../components/goBack"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import ScrollAnimation from 'react-animate-on-scroll'

const AboutPage = () => {
  const { showNav } = useSiteMetadata()
  const data = useStaticQuery(graphql`
    query AboutQuery {
      markdownRemark(frontmatter: { template: { eq: "about-page" } }) {
        html
        excerpt(pruneLength: 140)
        frontmatter {
          title
        }
      }
    }
  `)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Helmet>
        <body id="body" className="utilitypage about" style={{}} />
      </Helmet>
      <Seo title={frontmatter.title} description={excerpt} />

      {showNav ? (
        <div className="spacer" style={{ height: "60px", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )}
      <div className="container " style={{ maxWidth: "1024px", margin: "0 auto", padding: "20px 8%", border:'0px solid #999' }}>
      <h1 className="headline">{frontmatter.title}</h1>
<br /><br />

<div style={{display:'flex', justifyContent:'center', position:'relative', top:'', left:'2%', right:'2%', zIndex:'3', width:'90%', maxWidth:'570px', margin:'0 auto -3vh auto', padding: '2vw 1%', maxHeight: '', fontSize: 'clamp(1rem, 1.5vw, 3.2rem)',  color: '', background: 'rgba(0,0,0,0.10)', backdropFilter: 'blur(12px)', borderRadius: '10px', textWrap: 'balance center', lineHeight:'250%', textAlign:'center' }}>
Fink Roberts & Petrie, Inc. has long been known as a premier structural engineering firm by architects, facility owners and contractors. Founded in 1944 and located in Indianapolis, Indiana, FRP has consistently been involved in significant structural engineering and architectural projects.
<br /><br />
 Since FRP's establishment, the company has built a reputation for quality and integrity of its engineering services.
</div>
        {/* <div className="mobile">
          <GoBack />
        </div>  */}

        </div>

<section id="cd-timeline" className="cd-container">


<ScrollAnimation className="animate" animateIn="bounceInLeft" animateOut="" initiallyVisible={true} animateOnce={true} animatePreScroll={true} > 
		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-picture">
			</div>

			<div className="cd-timeline-content">
				<h2>1930's</h2>
        <br />
        <StaticImage src="../../static/assets/about01_state_fairgrounds_coliseum_01-min.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
        <br /><br />
        In the late 1930's, after spending the first six years of his career teaching at the University of Illinois, Mr. George Fink was commissioned to design the structure for the Indiana State Fairgrounds Coliseum.
        <span className="cd-date">1930's</span>
<br /><br />
        {/* <div className="timeline-content-info">
          <span className="timeline-content-info-title">
            <i className="fa fa-certificate" aria-hidden="true"></i>
            Front End Developer
          </span>
          <span className="timeline-content-info-date">
            <i className="fa fa-calendar-o" aria-hidden="true"></i>
            June 2016 - Present
          </span>
        </div>
				<p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
        <ul className="content-skills">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Wordpress</li>
        </ul> */}
			</div> 
		</div> 
</ScrollAnimation>




   

		<div className="cd-timeline-block">
      <ScrollAnimation className="animate" animateIn="bounceInRight" animateOut="" initiallyVisible={false} animateOnce={true} animatePreScroll={false} > 

			<div className="cd-timeline-img cd-movie">
			</div> 

      
			<div className="cd-timeline-content">
      <h2>1940's</h2>
        <br />
      <StaticImage src="../../static/assets/about01_stewart_dry_goods_01-min.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
				<p>Upon completion of the Indiana State Fairgrounds Coliseum in December 1944, George Fink and Leroy Roberts formed a partnership to practice structural engineering in Indianapolis. In its early years, the firm served as a consultant to architects, engineers, fabricators and contractors on medium to large industrial building projects.</p>
        
	 
				<span className="cd-date">1940's</span>
			</div> </ScrollAnimation>
		</div> 

		<div className="cd-timeline-block">
    <ScrollAnimation className="animate" animateIn="bounceInLeft" animateOut="" initiallyVisible={false} animateOnce={true} animatePreScroll={false} > 
			<div className="cd-timeline-img cd-picture">
			</div> 

			<div className="cd-timeline-content">
      <h2>1950's</h2>
        <br />
      <StaticImage src="../../static/assets/about01_school59_01-min-1.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
				<p>In September of 1952, Russ Petrie joined the firm and the partnership was renamed Fink Roberts & Petrie. As a partnership of three, and particularly with George Fink's expertise in steel design and Russ Petrie's expertise in concrete design, the firm began to acquire a great reputation for quality structural designs. </p>
          
          <p>In the mid 1950's, the firm broadened its practice to include highway and bridge design as well as storm sewer design. FRP began to establish its reputation for quality design in the civil engineering field as well. During that period, FRP became the exclusive structural and civil engineer for all projects at the Indianapolis Motor Speedway. In 1958, the firm was incorporated.</p>
				<span className="cd-date">1950's</span>
			</div> 
      </ScrollAnimation>
		</div> 



		<div className="cd-timeline-block">
    <ScrollAnimation className="animate" animateIn="bounceInRight" animateOut="" initiallyVisible={false} animateOnce={true} animatePreScroll={false} > 
			<div className="cd-timeline-img cd-location">
			</div> 

			<div className="cd-timeline-content">
      <h2>1960's</h2>
        <br />
      <StaticImage src="../../static/assets/about01_frp_01-min.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
				<p>The 1960's led to FRP establishing itself as a highly respected consulting engineering firm involved in large projects such as the City-County Building in Indianapolis, the original phase of the Indiana Convention Center, and the Indiana interstate highway system. The firm began to pick up signature architectural projects such as Clowes Hall at Butler University.</p>
				<span className="cd-date">1960's</span>
			</div> 
      </ScrollAnimation>
		</div> 

		<div className="cd-timeline-block">
    <ScrollAnimation className="animate" animateIn="bounceInLeft" animateOut="" initiallyVisible={false} animateOnce={true} animatePreScroll={false} > 
			<div className="cd-timeline-img cd-location">
			</div> 

			<div className="cd-timeline-content">
      <h2>1970's</h2>
        <br />
      <StaticImage src="../../static/assets/about01_indiana_conv_ctr_01-min.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
				<p>The 1970's saw continual growth of the company's staff to meet the needs of an increasing list of repeat clients - Indianapolis Motor Speedway, Eli Lilly & Company, Indiana University, Indiana Department of Transportation, the City of Indianapolis and several local architectural firms.</p>
				<span className="cd-date">1970's</span>
			</div> 
      </ScrollAnimation>
		</div> 


    <div className="cd-timeline-block">
    <ScrollAnimation className="animate" animateIn="bounceInRight" animateOut="" initiallyVisible={false} animateOnce={true} animatePreScroll={false} >
			<div className="cd-timeline-img cd-movie">
			</div> 

			<div className="cd-timeline-content">
      <h2>1980's</h2>
        <br />
      <StaticImage src="../../static/assets/about01_rca_dome_01-min.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
				<p>In the 1980's and 90's, the industry began to alter its traditional ways of project delivery. Fast-track construction, construction management, and design/build were new processes with more demanding schedules and delivery expectations. FRP was early to adapt and earn respect for efficiently working with these new delivery methods, strengthening the company's position for selection on complex and high-profile projects.</p>
          
        <p>During these two decades, FRP continued to provide structural engineering for numerous large-scale, complex projects throughout central Indiana and the surrounding states for many repeat clients. Athletic facilities and stadiums were added to FRP's growing portfolio, the most significant of which being the new Hoosier Dome for the new NFL football team in Indianapolis</p>
				<span className="cd-date">1980's</span>
			</div> 
      </ScrollAnimation>
		</div>





    <div className="cd-timeline-block">
    <ScrollAnimation className="animate" animateIn="bounceInLeft" animateOut="" initiallyVisible={false} animateOnce={true} animatePreScroll={false} >
			<div className="cd-timeline-img cd-movie">
			</div> 

			<div className="cd-timeline-content">
      <h2>1990's</h2>
        <br />
      <StaticImage src="../../static/assets/about00_FRP_50th_anniv_01-min.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
				<p>In the mid 90's frp expanded its speedway experience to the west coast. For three years in a row, FRP led the design effort in three of the most prestigious racetracks built in the country.</p>
          
        <p>FRP's scope of services even spread to locations as far away as China. Locally, FRP completed a number of large-scale civic projects in this decade, including Indianapolis Circle Centre, the Indiana State Office Building, and the second expansion of the Indiana Convention Center. FRP's client list of nationally recognized architects continued to grow as the company's engineering services were extended into a number of other states.</p>
				<span className="cd-date">1990's</span>
			</div> 
      </ScrollAnimation>
		</div>


    
		<div className="cd-timeline-block">
    <ScrollAnimation className="animate" animateIn="bounceInRight" animateOut="" initiallyVisible={false} animateOnce={true} animatePreScroll={false} >
			<div className="cd-timeline-img cd-movie">
			</div> 

			<div className="cd-timeline-content">
      
				<h2>2000's to Today</h2>
        <br />
        <StaticImage src="../../static/assets/about01_frp_leadership_2000_01-min.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />

				<p>FRP has moved into the 21st century with continued dedication to serving our diverse base of clients. Recent notable architectural projects include the Indiana State Museum, the new Indianapolis Airport Midfield Terminal and concourses, Lucas Oil Stadium, and another major expansion of the Indiana Convention Center.</p>
          
        <p>While maintaining focus on architectural work, FRP has also developed a large portfolio of project expertise in other markets such as parking garages, industrial facilities, warehouses, and water & wastewater projects. FRP knows structural engineering, and we look forward to serving our clients for decades to come with the same expertise and dedication that has made the company successful.</p>
				<span className="cd-date">2000's to Today</span>
			</div> 
      </ScrollAnimation>
		</div> 

	</section> 


        {/* <div className="entries">
  <div className="entry">
    <div className="title">2011</div>
    <div className="body">
      <p>Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos. Doloremque et distinctio quod molestiae ut.</p>
    </div>
  </div>
  <div className="entry">
    <div className="title">2012</div>
    <div className="body">
      <p>Quo nobis cumque dolor iure voluptatem voluptatem alias soluta.</p>
    </div>
  </div>
  <div className="entry">
    <div className="title big">2013</div>
    <div className="body">
      <p>Rerum sit libero possimus amet excepturi. Exercitationem enim dolores sunt praesentium dolorum praesentium.</p>
    </div>
  </div>
  <div className="entry">
    <div className="title">2014</div>
    <div className="body">
      <p>Voluptatibus veniam ea reprehenderit atque. Reiciendis non laborum adipisci ipsa pariatur omnis. Sed ipsam repudiandae velit. Omnis libero nostrum aperiam nemo dolor ea eos eius. Esse a non itaque quidem.</p>
    </div>
  </div>
  <div className="entry">
    <div className="title">2015</div>
    <div className="body">
      <p>VAdipisci totam omnis cum et suscipit excepturi et excepturi. Inventore sequi sit ut aliquid. Modi aut dolores dignissimos.</p>
      <p>Delectus facere officia consequuntur molestias deserunt illo. Placeat laudantium beatae natus excepturi ab nihil voluptates.</p>
    </div>
  </div>
  <div className="entry">
    <div className="title big">2016</div>
    <div className="body">
      <p>Impedit dolorem commodi explicabo fugit aut alias voluptatem. Magnam earum rerum quae dicta quibusdam aliquam ut.</p>
    </div>
  </div>
  <div className="entry">
    <div className="title">2017</div>
    <div className="body">
      <p>Qui facere eos aut suscipit doloremque quos...</p>
    </div>
  </div>
</div> */}




        {/* <article dangerouslySetInnerHTML={{ __html: html }} /> */}

        {/* <GoBack />
      </div> */}

      <br />
      <br />
      <Footer />
    </Layout>
  )
}

export default AboutPage
