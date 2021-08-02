import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
  const history = useHistory();

  return (
    <Col md={3} className={'mt-3'} onClick={() => history.push(`${DEVICE_ROUTE}/${device.id}`)}>
      <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
        <Image width={150} height={150} src={device.img}/>
        <div className={'mt-2 d-flex justify-content-between align-items-center'}>
          <div className={'text-black-50'}>brand</div>
          <div className={'d-flex align-items-center'}>
            <div >
              {device.rating}
            </div>
            <svg width={17} height={17} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1891 4.51715L9.22188 3.94058L7.44844 0.34527C7.40001 0.246832 7.32032 0.167144 7.22188 0.118707C6.97501 -0.00316805 6.67501 0.0983945 6.55157 0.34527L4.77813 3.94058L0.810944 4.51715C0.701569 4.53277 0.601569 4.58433 0.525006 4.66246C0.432447 4.75759 0.381442 4.88558 0.3832 5.0183C0.384958 5.15103 0.439334 5.27762 0.534381 5.37027L3.40469 8.16871L2.72657 12.1203C2.71067 12.2122 2.72084 12.3067 2.75593 12.3932C2.79102 12.4796 2.84963 12.5545 2.92511 12.6093C3.00059 12.6641 3.08992 12.6967 3.18297 12.7033C3.27603 12.71 3.36907 12.6904 3.45157 12.6468L7.00001 10.7812L10.5484 12.6468C10.6453 12.6984 10.7578 12.7156 10.8656 12.6968C11.1375 12.65 11.3203 12.3921 11.2734 12.1203L10.5953 8.16871L13.4656 5.37027C13.5438 5.29371 13.5953 5.19371 13.6109 5.08433C13.6531 4.81089 13.4625 4.55777 13.1891 4.51715ZM9.38751 7.77496L9.95157 11.0609L7.00001 9.5109L4.04844 11.0625L4.61251 7.77652L2.22501 5.4484L5.52501 4.96871L7.00001 1.97964L8.47501 4.96871L11.775 5.4484L9.38751 7.77496Z" fill="black"/>
            </svg>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
