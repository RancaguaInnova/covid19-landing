import React, { useEffect, useState } from "react";
import app from "providers/firebase";
import { collectionData } from "rxfire/firestore";
import _isEqual from "lodash/isEqual";
import _sortBy from "lodash/sortBy";
import Loading from "components/Loading";
import VaccinationItem from "./VaccinationItem";
import "./styles.scss";

const Vaccination: React.FC = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    var collectionRef = null;
    async function loadServices() {
      const servicesRef = app.firestore().collection("vaccinations");
      collectionRef = collectionData(servicesRef, "id");

      collectionRef.subscribe((list: any = []) => {
        // Prevent innecesary updates
        if (!_isEqual(list, services)) {
          setServices(list);
          setLoading(false);
        }
      });
    }

    loadServices();
  });
  return (
    <div className="vaccination">
      <h3 className="pb-2 text-uppercase">Campaña Influenza 2020</h3>
      <h5>¿Quiénes deben vacunarse contra la influenza?</h5>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <ul className="lista">
              <li>
                <span>Embarazadas (independiente del mes de gestación)</span>
              </li>
              <li>
                <span>Adultos mayores de 65 años</span>
              </li>
              <li>
                <span>Niños desde los 6 meses hasta los 10 años</span>
              </li>
              <li>
                <span>Enfermos crónicos</span>
              </li>
              <li>
                <span>Trabajadores avicolas y criadores de cerdos</span>
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-md-12">
            <span>
              *Si es cuidador de algún adulto mayor, también puede acceder a la
              vacuna si lo desea
            </span>
          </div>
        </div>
        <div className="mensaje row">
          <div className="col-md-12">
            <div>Personas mayores de 75 años deben inscribirse a través</div>

            <div>
              <b>CALL CENTER 800 72 00 44</b> para acceder a su vacuna
            </div>
          </div>
        </div>
      </div>
      <h5 className="pt-2 pb-2 ">¿Dónde vacunarse?</h5>

      {loading && <Loading />}

      {!loading && (
        <div className="pl-2 pr-2 vaccination-box overflow-auto">
          <div className="list-group ">
            {_sortBy(
              services.filter(s => s.active),
              s => s.name
            ).map((service, idx) => (
              <VaccinationItem service={service} key={idx} />
            ))}
          </div>
        </div>
      )}
      {/*  <small className='pt-2 text-danger'>Desliza para ver todos</small> */}
      {/* <div className='m-2'>
                <button
                    className='btn btn-block btn-outline-danger'
                    onClick={() => {
                        setMore(!more)
                    }}
                >
                    {more ? 'Mostrar menos' : 'Mostrar todos'}
                </button>
            </div> */}
    </div>
  );
};

export default Vaccination;
