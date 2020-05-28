import React, { useEffect, useState } from "react";
import './styles.scss'
import app from "providers/firebase";
import { collectionData } from "rxfire/firestore";
import _isEqual from "lodash/isEqual";
import _sortBy from "lodash/sortBy";
import Loading from "components/Loading";
import ReactPlayer from 'react-player'

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
                statictics.map((item, index) =>
                    <div key={index}>
                        <p className='last-update'>Última actualización {new Date(item.date.seconds * 1000).toLocaleString()} hrs</p>
                        <hr />
                        {item.urlVideo && item.urlVideo !== '' ? (
                            <div className='row'>
                                <div className='col-md-12 col-xs-12'>
                                <div   className='player-wrapper'>
                                    <ReactPlayer
                                              className='react-player'

                                        url={item.urlVideo}
                                        config={{
                                            youtube: {
                                                playerVars: { showinfo: 1 }
                                            },
                                        }}
                                        width='100%'
                                        height='100%'
                                    />
                                    </div>
                                </div>
                            </div>
                        ) : null}



                        <div className='row'>
                            {item.covidMap && item.covidMap.src && item.covidMap.src !== '' ? (
                                <div className='col-md-6 col-xs-12'>
                                    <img className='img-fluid' src={item.covidMap.src} />
                                </div>
                            ) : null}
                            {item.covidGraph && item.covidGraph.src && item.covidGraph.src !== '' ? (
                                <div className='col-md-6 col-xs-12'>
                                    <img className='img-fluid mt-2' src={item.covidGraph.src} />
                                </div>
                            ) : null}
                        </div>

                    </div>
                ))}
        </div>
    )
}

export default Statistic
