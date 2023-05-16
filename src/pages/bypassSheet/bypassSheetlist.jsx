import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BypassSheetItem from './bypassSheetItem/bypassSheetItem';
import './bypassSheet.css'
import {fetchBypassSheet} from "../../store/action.creators/bypassSheet";
import {Link} from "react-router-dom";
import { Trans } from 'react-i18next';


const BypassSheetlist = () => {
    const dispatch = useDispatch();
    var user = useSelector(state => state.auth.user);
    const bypassSheets = useSelector((state) => state.bypassSheet.items);

    useEffect(() => {
        dispatch(fetchBypassSheet());
    }, [dispatch]);


    return (
        <div className={'container'}>
            <div className={'reference-div'}>
                <h2 className={'reference-title'}>
                    <Trans i18nKey="bypassSheet.pageTitle">
                        Обходные листы
                    </Trans>
                </h2>

            </div>
            <div className={'m-3 p-1'}>
                {bypassSheets.map(bypassSheet => (
                    <BypassSheetItem key={bypassSheet.id} bypassSheet={bypassSheet}/>
                ))}
            </div>
        </div>
    );
};

export default BypassSheetlist;