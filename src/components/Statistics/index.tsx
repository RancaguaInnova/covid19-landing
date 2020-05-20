import React, { useEffect, useState } from "react";
import './styles.scss'
import app from "providers/firebase";
import { collectionData } from "rxfire/firestore";
import _isEqual from "lodash/isEqual";
import _sortBy from "lodash/sortBy";
import Loading from "components/Loading";

const Statistic: React.FC = () => {
    const [statictics, setStatictics] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        var collectionRef = null;
        async function loadStatictics() {
            const staticticsRef = app.firestore().collection("statistics");
            collectionRef = collectionData(staticticsRef, "id");
            collectionRef.subscribe((list: any = []) => {
                // Prevent innecesary updates
                if (!_isEqual(list, statictics)) {
                    setStatictics(list);
                    setLoading(false);
                }
            });
        }
        loadStatictics();
    });
    return (
        <div>
            <h3 className='text-uppercase'>CIFRAS DE CONTAGIO</h3>
            {/*  <h5 className='hash'>#fase4rancagua</h5> */}
            {loading && <Loading />}
            {!loading && (
                statictics.map((item,index) =>
                <div key={index}>
                    <p className='last-update'>Última actualización {new Date( item.date.seconds *1000).toLocaleString()} hrs</p>
                    <hr />
                    <div className='row'>
                        <div className='col-md-6 col-xs-12'>
                            <img className='img-fluid' src={item.covidMap.src} />
                        </div>
                        <div className='col-md-6 col-xs-12'>
                            <img className='img-fluid mt-2'  src={item.covidGraph.src} />
                        </div>
                    </div>
                </div>
           ))}
        </div>
    )
}

export default Statistic
