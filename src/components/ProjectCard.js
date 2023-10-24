import {Col} from 'react-bootstrap';
export const ProjectCard=({title, description, imgUrl})=>{
    
    return(
        <Col lg={5} sm={9} md={7} xs={10}>
            <div className='proj-imgbx'>
                <img src={imgUrl} alt='img'/>
                    <div className='proj-txtx'>
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
            </div>
        </Col>
    )
}