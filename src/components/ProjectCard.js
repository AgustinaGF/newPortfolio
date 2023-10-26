import {Col} from 'react-bootstrap';


export const ProjectCard=({title, description, imgUrl,url})=>{


    return(
        <Col lg={5} sm={9} md={7} xs={13} className='col-image' >
            <a href={url}>
            <div className='proj-imgbx'>
                <img src={imgUrl} alt='img'/>
                    <div className='proj-txtx'>
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
            </div>
            </a>
        </Col>
    )
}