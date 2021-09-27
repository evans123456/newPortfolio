import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./grid.css";
export class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/evans123456/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("this-> ", result);
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("The error is: ", error);
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="title position-relative">
            <h2>
              Github <span className="dot">public repositories.</span>
            </h2>
            {/* <h4>
              Followers <span className="dot">public repositories.</span>
            </h4> */}
          </div>
        </div>
        {this.state.isLoaded === true ? (
          <Row class="grid-container">
            {this.state.items.map((item) => (
              <Col>
                <Card
                  className="grid-item"
                  key={item.id}
                  style={{ width: "18rem" }}
                >
                  <Card.Img variant="top" src={item.owner.avatar_url} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle style={{ color: "green", fontSize: 18 }}>
                      {item.language}
                    </Card.Subtitle>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Link href={item.html_url}>View Repo</Card.Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p>Loading repositories...</p>
        )}
      </div>
    );
  }
}

export default Github;
