import './card-image.css'
import {LEFT} from "../../constants/card-image/card-side.ts";

type CardImage = {
    img: string, title: string, description: string, side?: string
}


function CardImageInfo({img, title, description, side}: CardImage) {

    const imageSection = (
        <div className="col-sm">
            <img src={img} className="img-fluid rounded-end" alt="beirut-image" width={500} height={'auto'}/>
        </div>
    );

    const descriptionSection = (
        <div className="col-sm p-5 d-flex align-items-center">
            <div className="row">
                <h1><strong>{title}</strong></h1>
                <p className="mt-2"><strong>{description}</strong></p>
            </div>
        </div>
    )

    return (
        <section className="container photo-container">
            <div className="container">
                <div className="row">
                    {side === LEFT ?
                        <>
                            {imageSection}{descriptionSection}
                        </> : <>
                            {descriptionSection} {imageSection}
                        </>
                    }
                </div>
            </div>
        </section>
    );
}

export default CardImageInfo;