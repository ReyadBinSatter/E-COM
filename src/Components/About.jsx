import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className=' w-100 h-75 mt-5 pt-4'>

            <Row className='align-items-center w-100 mx-0'>

                <Col xs={12} md={6}>
                    <div className='text-dark container'>
                        <h1 className='text-start'>ABOUT US</h1>

                        <p className='text-start text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat, reprehenderit perferendis eum a quisquam exercitationem quis maxime autem at cupiditate numquam nesciunt blanditiis tempore voluptatum ducimus enim eligendi hic? Expedita ab excepturi, a, aliquid molestiae quasi voluptatum laudantium maiores, laborum neque sit maxime animi sint explicabo blanditiis doloribus reprehenderit facere illo est cumque porro. Ex doloribus porro dolores aspernatur quas enim cum rem commodi debitis molestiae. Amet fuga, praesentium, magnam odit laboriosam iure libero natus blanditiis molestiae placeat ab doloribus quo optio ullam, reprehenderit alias atque fugit deserunt minima adipisci? Modi quam nam pariatur et explicabo perferendis doloribus veritatis. </p>
                    </div>
                </Col>
                <Col xs={12} md={6} className="px-0">
                    <img src="/img/8.jpg" className="d-block w-100" alt="..." height='600px' />
                </Col>
            </Row>

            <Row className='align-items-center w-100 mx-0'>
                <Col xs={12} md={6} className="px-0">
                    <img src="/img/9.jpg" className="d-block w-100" alt="..." height='600px' />
                </Col>
                <Col xs={12} md={6}>
                    <div className='text-dark container'>
                        <h1 className='text-start'>Our Core Values</h1>

                        <p className='text-start text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat, reprehenderit perferendis eum a quisquam exercitationem quis maxime autem at cupiditate numquam nesciunt blanditiis tempore voluptatum ducimus enim eligendi hic? Expedita ab excepturi, a, aliquid molestiae quasi voluptatum laudantium maiores, laborum neque sit maxime animi sint explicabo blanditiis doloribus reprehenderit facere illo est cumque porro. Ex doloribus porro dolores aspernatur quas enim cum rem commodi debitis molestiae. Amet fuga, praesentium, magnam odit laboriosam iure libero natus blanditiis molestiae placeat ab doloribus quo optio ullam, reprehenderit alias atque fugit deserunt minima adipisci? Modi quam nam pariatur et explicabo perferendis doloribus veritatis. </p>
                    </div>
                </Col>

            </Row>

        </div>
    );
};

export default About;