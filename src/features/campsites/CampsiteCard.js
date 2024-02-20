import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';

//receives 'campsite' from CampsitesList.js. So... 'props' is actually 'campsite' passed in
//Change 'props' to 'campsite' that's passed in
const CampsiteCard = ({campsite}) => {
    const {id, image, name} = campsite;
    return (
        <Link to={`${id}`}>
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
        </Link>
    );
};

export default CampsiteCard;
