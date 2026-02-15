import Card from "../components/Card/Card"
import Container from "../components/Container/Container"
import Hero from "../components/Hero/Hero"
import image1 from "../src/assets/images/image1.png"
import image2 from "../src/assets/images/image2.png"
import image3 from "../src/assets/images/image3.png"
import image4 from "../src/assets/images/image4.png"
import image5 from "../src/assets/images/image5.png"
import image6 from "../src/assets/images/image6.png"

const Home = () => {
    const cards = [
      {
        image: image1,
        name: "Alec Whitten",
        date: " 1 Jan 2023",
        title: "Bill Walsh leadership lessons",
        description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
      },
      {
        image: image2,
        name: "Demi WIlkinson",
        date: " 1 Jan 2023",
        title: "PM mental models",
        description: "Mental models are simple expressions of complex processes or relationships."
      },
      {
        image: image3,
        name: "Candice Wu",
        date: " 1 Jan 2023",
        title: "What is Wireframing?",
        description: "Introduction to Wireframing and its Principles. Learn from the best in the industry."
      }
      ,
      {
        image: image4,
        name: "Natali Craig",
        date: " 1 Jan 2023",
        title: "How collaboration makes us better designers",
        description: "Collaboration can make our teams stronger, and our individual designs better."
      }
      ,
      {
        image: image5,
        name: "Drew Cano",
        date: " 1 Jan 2023",
        title: "Our top 10 Javascript frameworks to use",
        description: "JavaScript frameworks make development easy with extensive features and functionalities."
      },
      {
        image: image6,
        name: "Orlando Diggs",
        date: " 1 Jan 2023",
        title: "Podcast: Creating a better CX Community",
        description: "Starting a community doesn’t need to be complicated, but how do you get started?"
      }
    ]

  return (
    <>
    <Hero title= "Stories and interviews"
    subtitle= "Subscribe to learn about new product features, the latest in technology, solutions, and updates."
    btn={{content: "Subscribe", url: ""}}/>

    <Container title="All Blog Posts">
      {
        cards.map((card, index) => {
          return(
            <Card key={index}
          image={card.image}
          name={card.name}
          date={card.date}
          title={card.title}
          description={card.description}
          />
          )
      })
      }

    </Container>
    </>
  )
}

export default Home
