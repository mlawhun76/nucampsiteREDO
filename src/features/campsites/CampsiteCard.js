import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

//receives 'campsite' from CampsitesList.js. So... 'props' is actually 'campsite' passed in
//Change 'props' to 'campsite' that's passed in
const CampsiteCard = ({campsite}) => {
    const {image, name} = campsite;
    return (
        <Card>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />

            <CardImgOverlay>
                <CardTitle>
                    {name}
                </CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default CampsiteCard;
