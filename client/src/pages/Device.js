import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/big_star.png';

const DevicePage = () => {
  const device = { id: 1, name: 'atata', rating: 5, img: 'https://www.google.ru/url?sa=i&url=https%3A%2F%2Fsib.fm%2Fnews%2F2020%2F02%2F28%2Flajfhak-dnya-chto-delat-esli-oret-kot-vesnoj&psig=AOvVaw1DukFzUpM9XpjxjE7bpbG8&ust=1628013273665000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICW-5r0kvICFQAAAAAdAAAAABAJ'};
  const  descr = [
    {id: 1, name: 'ggggg', descr: '5'},
    {id: 2, name: 'ggjhgjh', descr: '5'}
  ];
  return (
    <Container className={'mt-4'}>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img}/>
        </Col>
        <Col md={4}>
          <Row className={'d-flex flex-column align-items-center'}>
            <h1 style={{textAlign: 'center'}}>
              {device.name}
            </h1>
            <div
              className={'d-flex align-items-center justify-content-center'}
              style={{ background: `url(${bigStar}) no-repeat center center`, width:280, height:270, backgroundSize: 'cover', fontSize:64}}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className={'d-flex flex-column align-items-center justify-content-around'}
            style={{width:300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>от {device.price} руб.</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className={'d-flex flex-column m-3'}>
        <h2>Характеристики</h2>
        {descr.map((info, idx) =>
          <Row key={info.id} style={{background: idx % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.name}: {info.descr}
          </Row>
        )}
      </Row>

    </Container>
  );
};

export default DevicePage;
