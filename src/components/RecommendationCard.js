import React, {useState} from 'react'
import Modal,{closeButton} from 'react-bootstrap/Modal';

function RecommendationCard(props) {
    let {domain,spelization,name}=props.cardsData;
    var data=""
    if (domain.length>35){
        data=domain.slice(0,35)+"...";
    }
    else{
        data=domain;
    }
    //hooks
    const [show, setShow] = useState(false);
    const Show = () => setShow(true);
    const close=()=> setShow(false);
  

    return (
        <>
        <div className="card shadow w-75 h-100" onClick={Show}>
          <div className="card-body">
            <h4 className="card-text">
                {data}
            </h4>
             <p className="card-text text-secondary mb-0">{spelization}</p>
             <p className="card-text text-secondary">{name}</p>
          </div>
        </div>
        <Modal show={show} onHide={close} animation={false}>
        <Modal.Header closeButton />
          
        <Modal.Body className="text-center">
            <h5>{domain}</h5>
            <p>{spelization}</p>
            <p>{name}</p>

        </Modal.Body>

      </Modal>
        </>
    )
}

export default RecommendationCard
