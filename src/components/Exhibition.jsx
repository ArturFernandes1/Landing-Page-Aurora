import React from 'react';
import './Exhibition.scss';

import modelo2 from '../assets/modelo2.png';

export default function Exhibition() {
    return (
        <section className="exhibition">
            <div className="exhibition-container">
                <div className="exhibition-image">
                    <img src={modelo2} alt="Modelo de joia" />
                </div>
                <div className="exhibition-content">
                    <h2 className="exhibition-title">Nossa Exposição de Joias</h2>
                    <p className="exhibition-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Descubra nostra collectio exclusiva de ornamentos, ubi unaquaeque gemma narrat historiam singularem. Artifices nostri antiquas artes cum moderno consilio miscent, ut opera aurifera fiant quae tecum semper ambules.

                    Vestibulum pretium, purus in luctus dignissim, sapien arcu varius nulla, id fermentum justo erat vel sapien. Praesent at ornare elit, et elementum libero. Integer vitae risus nec dui faucibus posuere, ornamenta tua luceant sicut sidera noctis.
                    </p>
                    <button className="exhibition-button">
                        Ver Coleção Completa
                    </button>
                </div>
            </div>
        </section>
    );
}
