import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//import links for images
import profile from "../assets/images/profile.png";

import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import burgerhw from '../assets/images/burgerhw.png';
// import Col from 'react-bootstrap/Col';
class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Eat da burger',
                    subTitle: 'a fun app to eat some hamburgers',
                    imgSrc: burgerhw,
                    link: 'https://lit-island-14787.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'My Github repo',
                    subTitle: 'My github repo with stared projects',
                    imgSrc: github,
                    link: 'https://github.com/leolee2708',
                    selected: false
                },
                {
                    id: 2,
                    title: 'my profile',
                    subTitle: 'Click the link below for my resume',
                    imgSrc: profile,
                    link: "https://agile-thicket-55643.herokuapp.com/?id=602c71646c3d1e00151ccc45",
                    selected: false
                },
                {
                    id: 3,
                    title: 'my linkedin',
                    subTitle: 'My linkedin profile',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/quan-le-2054a432/',
                    selected: false
                }


            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
