import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchReferenceType} from "../../../store/action.creators/referenceType";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const ReferenceItem = ({references, referenceTypeList}) => {
    const dispatch = useDispatch();
    var user = useSelector(state => state.auth.user)
    var createdAt = new Date(references.created_at)
    var date = `${createdAt.getDate()}:${createdAt.getMonth()}:${createdAt.getFullYear()}`

    useEffect(() => {
        dispatch(fetchReferenceType());
    }, [dispatch]);


    function getStatusColor(status) {
        switch (status) {
            case 'approved':
                return 'reference-card--green';
            case 'rejected':
                return 'reference-card--red';
            case 'pending':
            default:
                return 'reference-card--normal';
        }
    }

    const [loader, setLoader] = useState(false);

    const referenceType = referenceTypeList.find(r => r.id == references.reference_type);

    const downloadPDF = () => {
        const capture = document.querySelector(`#actual-receipt${references.id}`);
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight / 2.5);
            setLoader(false);
            doc.save('receipt.pdf');
        })
    }
    debugger

    if (references.status == 'approved') {
        return (
            <div className={`reference-card container ${getStatusColor(references.status)}`}>
                <div>
                    <div id={`actual-receipt${references.id}`} className={`p-3`}>
                        <div>
                            <h5>{referenceType?referenceType.title:null}</h5>
                            <p>{referenceType?referenceType.text1:null}</p>
                            <div className="reference-card__info">
                                {user.first_name} {user.last_name}
                            </div>
                            <p>{references.info}</p>
                            <p>{referenceType?referenceType.text2:null}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <p className="reference-card__phone">{date}</p>
                    </div>
                </div>
                <button style={{fontSize: "13px"}} className={'btn btn-primary'} onClick={downloadPDF}>PDF жазу</button>
            </div>
        );
    } else {
        return (
            <div className={`reference-card container ${getStatusColor(references.status)}`}>
                <div className="reference-card__info">
                    <h3 className="reference-card__name">{references.info}</h3>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "end"
                }}>
                    <p className="reference-card__phone">{date}</p></div>
            </div>
        );
    }
};

export default ReferenceItem;