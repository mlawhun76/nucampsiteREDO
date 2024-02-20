import {Card, CardImg, CardText, CardBody, Col, CardImgOverlay,CardTitle} from 'reactstrap';

const CampsiteDetail = ({campsite}) => {
    const {image, name, description} = campsite;

    return (
        <Col md='5' className='m-1'>
            <Card >
                <CardImg top src={image} alt={name}/>
                <CardImgOverlay tag='h1'align='center'>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
                <CardBody >
                    <CardText >{name}: {description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CampsiteDetail;
