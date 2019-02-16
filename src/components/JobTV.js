import React, { Component } from 'react';

// 1. Road Safety Media
import graficaSv1 from './img/tv-print/RoadSafety/1.jpg';
import graficaSv2 from './img/tv-print/RoadSafety/2.jpg';
import graficaSv3 from './img/tv-print/RoadSafety/3.jpg';
import graficaSv4 from './img/tv-print/RoadSafety/4.jpg';
import graficaSv5 from './img/tv-print/RoadSafety/5.jpg';
import videoSv1 from './img/tv-print/RoadSafety/cinturon.mp4';
import videoSv2 from './img/tv-print/RoadSafety/casco.mp4';

// 2. Fiat Perros Media
import videoMonsi from './img/tv-print/Tentaciones/Monsi.mp4';

// 3. Fiat Perros Media
import graficaBobby from './img/tv-print/FiatPerros/BOBBY.jpg';
import graficaLisa from './img/tv-print/FiatPerros/LISA.jpg';

// 4. Fiat Cajas Media
import graficaChicas from './img/tv-print/FiatCajas/chicas.jpg';
import graficaFamilia from './img/tv-print/FiatCajas/familia.jpg';
import graficaAmigos from './img/tv-print/FiatCajas/amigos.jpg';

// 5. PIM Media
import videoPim1 from './img/tv-print/PIM/alfajor.mp4';
import videoPim2 from './img/tv-print/PIM/pancho.mp4';
import videoPim3 from './img/tv-print/PIM/peluche.mp4';
import videoPim4 from './img/tv-print/PIM/pelota.mp4';
import videoPim5 from './img/tv-print/PIM/tallarines.mp4';

// 6. Volkwagen ID Media
import videoVw1 from './img/tv-print/VwId/civil.mp4';
import graficaVw1 from './img/tv-print/VwId/couple.jpg';
import graficaVw2 from './img/tv-print/VwId/son.jpg';
import graficaVw3 from './img/tv-print/VwId/sports.jpg';

// 7. Michel Torino Media
import videoMT from './img/tv-print/MichelTorino/Ilusionista.mp4';

// 8. Desarme Media
import graficaDesarme1 from './img/tv-print/Desarme/azul.jpg'
import graficaDesarme2 from './img/tv-print/Desarme/naranja.jpg';

// 9. Protech Media
import videoProtech from './img/tv-print/Protech/protech.mp4';

// 10. Frizze Media
import videoFrizze from './img/tv-print/Frizze/joda.mp4';

// 11. Suran Media
import videoSuran from './img/tv-print/VwSuran/pediatra.mp4';

// 12. Suter Media
import videoSuter1 from './img/tv-print/Suter/avion.mp4';
import videoSuter2 from './img/tv-print/Suter/dentista.mp4';

// 13. Zorro Media
import videoZorro from './img/tv-print/VwGol/zorro.mp4';

// 14. VW Trucks Media
import graficaTrucks1 from './img/tv-print/VwTrucks/constellation.jpg';
import graficaTrucks2 from './img/tv-print/VwTrucks/worker.jpg';

// 15. Bonobon Media
import videoBonobon1 from './img/tv-print/Bonobon/encuentro.mp4';
import videoBonobon2 from './img/tv-print/Bonobon/wheel.mp4';

import Vermas from './Vermas.js';

var results = [
	{title:'ROAD SAFETY', subtitle: 'Aim of campaign was to lower accident death ratio on Argentina\'s roads. We based on the insight. We covered both optimist and pesimist sides of car accidents. Mainly, you can stay alive by using belt or helmet, but also, talk about negligence in human behaviour in crashes.', parraf:"", imagenes: [graficaSv1,graficaSv2,graficaSv3,graficaSv4,graficaSv5], videos: [videoSv1,videoSv2]},
	{title:'TENTACIONES COOKIES', subtitle:'The brand wanted to launch a limited edition of already known Tentaciones with a new chocolate filling, so we created this "Yes, but NO" concept execution to make them more irresistible.',parraf:"", imagenes:[], videos:[videoMonsi]},
	{title:'FIAT DOGS', subtitle: 'Client needed to advertise their new Diesel engine with less fuel consumption and they wanted to do it through one of their utilitaries: Fiat Strada. The concept works on the product advantage with impact and sense of humor.', parraf:"", imagenes: [graficaBobby,graficaLisa],},
    {title:'FIAT BAGAGGE', subtitle: 'Same product as previous work, but with a different benefit to communicate. Now we had to say you can buy this car with double cabin, so it\'s not only for carrying tools, but actually people. So we were prompted to swing Strada\'s working consumer to a more recreative one',parraf:"", imagenes: [graficaAmigos,graficaFamilia,graficaChicas], videos: [],},
    {title:'PIM', subtitle: 'Client asked us to launch a new payment platform that works as a virtual wallet and can be used with any celphone, even if it\'s not a smartphone. So we worked on a looping system of pieces that made clear how simple the system is. You need a celphone, you charge money into it and then you buy stuff with it on supported stores.', parraf:"", imagenes: [], videos: [videoPim1,videoPim2,videoPim3,videoPim4,videoPim5]},
    {title:'VOLKSWAGEN ID', subtitle:'The client briefed us with 3 brand values they wanted to highlight in order to feel closer to their consumers and therefore strengthen the emotional link with the brand.',parraf:"", imagenes:[graficaVw1,graficaVw2,graficaVw3], videos:[videoVw1]},
    {title:'TRICK', subtitle:'Michel Torino asked us to boost the wine\'s perception. ', parraf:"", imagenes:[], videos:[videoMT]},
    {title:'DESARME', subtitle: 'Aim of campaign was to lower accident death ratio on Argentina\'s households. Asking people to get rid of their guns by contrasting them to common house stuff', parraf:"", imagenes: [graficaDesarme1,graficaDesarme2], videos: []},
    {title:'THE END', subtitle:'Something simple as flea medicine for dogs, the client wanted to be very clear about the power of their product among others. A satiric execution could let us tell all the product benefits through humor and aesthetic impact. ', parraf:"", imagenes:[], videos:[videoProtech]},
    {title:'FRIZZE', subtitle: 'The brand was lauching their Facebook page so we were prompted to boost it\'s awareness. We created an -organization- for youngsters to join and be part of this movement called JODA, which stands for PARTY in english. Members could create their own member card and use it in brand exclusive events.',parraf:"", imagenes: [], videos: [videoFrizze]},
    {title:'VOKLKSWAGEN SURAN', subtitle: 'We needed to position the product as a family vehicle so we',parraf:"", imagenes: [], videos: [videoSuran]},
    {title:'SUTER', subtitle: 'This product has been around for some time now in Argentina\'s wine market. Client needed to boost awareness in their product trajectory to compete with newer wines on the segment.',parraf:"", imagenes: [], videos: [videoSuter1,videoSuter2]},
    {title:'ZORRO', subtitle: 'A new edition of Gol Trend came out on the market and we were asked to show it as a faithful companion in youngsters nightlife.',parraf:"", imagenes: [], videos: [videoZorro]},
    {title:'VOLKSWAGEN TRUCKS', subtitle: 'This product has been around for some time now in Argentina\'s wine market. Client needed to boost awareness in their product trajectory to compete with newer wines on the segment.',parraf:"", imagenes: [graficaTrucks1,graficaTrucks2], videos: []},
    {title:'BONOBON', subtitle: 'These were my first works, sorry for video quality XD, we worked for this brand with strong emotional values for various special dates such as Mother\'s day or Holidays.',parraf:"", imagenes: [], videos: [videoBonobon1,videoBonobon2]},

    ];

class JobTV extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="job">
					<Vermas results={results}/>
			</div>
		)	
	}
}

export default JobTV;