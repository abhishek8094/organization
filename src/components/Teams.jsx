import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Person1 from "../assets/images/person1.jfif";
import Person2 from "../assets/images/person2.jpg";
import Person3 from "../assets/images/person3.jpg";
import Person4 from "../assets/images/person4.webp";
import Person5 from "../assets/images/person5.jpg";
import Person6 from "../assets/images/person6.jfif";
const TeamsData = [
    {
      "id": 1,
      "image":Person1 ,
      "githublink": "https://github.com/person1",
      "twitterlink": "https://twitter.com/person1",
      "linkedinlink": "https://linkedin.com/in/person1",
      "name": "John Doe",
      "designation": "CEO",
      "description": "John is the visionary leader of our team with over 20 years of experience in the industry. He specializes in business development and strategic planning."
    },
    {
      "id": 2,
      "image": Person2,
      "githublink": "https://github.com/person2",
      "twitterlink": "https://twitter.com/person2",
      "linkedinlink": "https://linkedin.com/in/person2",
      "name": "Jane Smith",
      "designation": "CTO",
      "description": "Jane is a tech enthusiast with a passion for innovation. She leads our technical team with expertise in software development and system architecture."
    },
    {
      "id": 3,
      "image": Person3,
      "githublink": "https://github.com/person3",
      "twitterlink": "https://twitter.com/person3",
      "linkedinlink": "https://linkedin.com/in/person3",
      "name": "Emily Johnson",
      "designation": "Marketing Manager",
      "description": "Emily is responsible for crafting our brand's voice. With a creative approach and strong analytical skills, she drives our marketing campaigns."
    },
    {
      "id": 4,
      "image": Person4,
      "githublink": "https://github.com/person4",
      "twitterlink": "https://twitter.com/person4",
      "linkedinlink": "https://linkedin.com/in/person4",
      "name": "Michael Brown",
      "designation": "Operations Manager",
      "description": "Michael oversees our day-to-day operations and ensures everything runs smoothly. He has a strong background in project management and process optimization."
    },
    {
      "id": 5,
      "image": Person5,
      "githublink": "https://github.com/person5",
      "twitterlink": "https://twitter.com/person5",
      "linkedinlink": "https://linkedin.com/in/person5",
      "name": "Laura Green",
      "designation": "Product Designer",
      "description": "Laura is an innovative designer with a keen eye for detail. She is responsible for the visual and user experience design of our products."
    },
    {
      "id": 6,
      "image": Person6,
      "githublink": "https://github.com/person6",
      "twitterlink": "https://twitter.com/person6",
      "linkedinlink": "https://linkedin.com/in/person6",
      "name": "Daniel White",
      "designation": "Data Scientist",
      "description": "Daniel is a data-driven thinker who excels in data analysis and machine learning. He works on developing algorithms and extracting insights from data."
    }
  ]
  

export default function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Teams</h2>
          <div className="subtitle">Some of our experts</div>
        </div>
        <Row>
            {
                TeamsData.map((item, idx) =>(
                    <Col sm={4} key={idx}>
                    <div className="image">
                    <Image src={item.image} rounded />
                      <div className="overlay">
                        <div className="socials">
                          <ul>
                            <li><a href={item.githublink}><i className="fa fa-github"></i></a></li>
                            <li><a href={item.twitterlink}><i className="fa fa-twitter"></i></a></li>
                            <li><a href={item.linkedinlink}><i className="fa fa-linkedin-square"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                        <h3>{item.name}</h3>
                        <span className="designation">{item.designation}</span>
                        <p>{item.description}</p>
                    </div>
                  </Col>
                ))
            }
         
        </Row>
      </Container>
    </section>
  );
}
