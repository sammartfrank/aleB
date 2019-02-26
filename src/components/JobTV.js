import React from 'react';

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

// 15. Bonobon Media
import videoBonobon1 from './img/tv-print/Bonobon/encuentro.mp4';
import videoBonobon2 from './img/tv-print/Bonobon/wheel.mp4';

import Vermas from './Vermas.js';

var results = [
	{id:1, title:'ROAD SAFETY', subtitle: 'Aim of this campaign was to lower accident death ratio on Argentina\'s roads. We based on the insight "You are alive to tell it". We covered both optimist and pesimist sides of car accidents. Mainly, you can stay alive by using belt or helmet, but also, talk about negligence in human behaviour in crashes.', parraf:"", imagenes: [graficaSv1,graficaSv2,graficaSv3,graficaSv4,graficaSv5], videos: [videoSv1,videoSv2]},
	{id:2, title:'TENTACIONES COOKIES', subtitle:'The brand wanted to launch a limited edition of already known Tentaciones with a new chocolate filling. We created a "Yes, but NO" concept execution to make them more irresistible.',parraf:"", imagenes:[], videos:[videoMonsi]},
	{id:3, title:'FIAT DOGS', subtitle: 'Client needed to advertise their new Diesel engine with less fuel consumption and they wanted to do it through one of their utilitaries: Fiat Strada. The concept works on the product advantage with impact and sense of humor.', parraf:"", imagenes: [graficaBobby,graficaLisa],},
 {id:4, title:'FIAT BAGAGGE', subtitle: 'Same product as previous work, but with a different benefit to communicate. Now we had to say you can buy this car with double cabin, so it\'s not only for carrying tools, but actually people. So we were prompted to swing Strada\'s working consumer to a more recreative one.',parraf:"", imagenes: [graficaAmigos,graficaFamilia,graficaChicas], videos: [],},
 {id:5, title:'PIM', subtitle: 'Client asked us to launch a new payment platform that works as a virtual wallet and can be used with any celphone, even if it\'s not a smartphone. So we worked on a looping system of pieces that made clear how simple the system is.', parraf:"", imagenes: [], videos: [videoPim1,videoPim2,videoPim3,videoPim4,videoPim5]},
	{id:6, title:'VOLKSWAGEN', subtitle:'The client briefed us with 3 brand values they wanted to highlight in and ID campaign in order to feel closer to their consumers and therefore strengthen the emotional link with the brand.',parraf:"", imagenes:[graficaVw1,graficaVw2,graficaVw3], videos:[videoVw1]},
	{id:7, title:'TRICK', subtitle:'Michel Torino asked us to boost the wine\'s perception in point of sales by remembering people this wine has been around for its quality. ', parraf:"", imagenes:[], videos:[videoMT]},
	{id:8, title:'DISARM', subtitle: 'This campaign\'s objective is to lower accident death ratio on Argentina\'s households. Asking people to get rid of their guns by contrasting them to common everyday belongings.', parraf:"", imagenes: [graficaDesarme1,graficaDesarme2], videos: []},
	{id:9, title:'THE END', subtitle:'Client wanted to be very clear about the power of their product among others. omething simple as flea medicine for dogs, the c. Through a satiric execution we could tell the product benefits with humour and aesthetic impact.', parraf:"", imagenes:[], videos:[videoProtech]},
	{id:10, title:'FRIZZE', subtitle: 'The brand was lauching their Facebook page so we were prompted to boost it\'s awareness. We created an -organization- for youngsters to join and be part of this movement called JODA, which stands for PARTY in english. Members could create their own member card and use it in brand exclusive events.',parraf:"", imagenes: [], videos: [videoFrizze]},
	{id:11, title:'VOLKSWAGEN SURAN', subtitle: 'We needed to position the product as a family vehicle so we stood on the consumers territory to empathize and capitalize its lifestyle.',parraf:"", imagenes: [], videos: [videoSuran]},
	{id:12, title:'SUTER', subtitle: 'This product has been around for some time now in Argentina\'s wine market. Client needed to boost awareness in their product trajectory to compete with newer wines on the segment.',parraf:"", imagenes: [], videos: [videoSuter1,videoSuter2]},
	{id:13, title:'ZORRO', subtitle: 'A new edition of Gol Trend came out on the market and we were briefed to position it in the market as a faithful companion to youngsters nightlife.',parraf:"", imagenes: [], videos: [videoZorro]},
	{id:14, title:'BONOBON', subtitle: 'Sorry for video quality XD, these were my first :3 We worked for this brand, which has strong emotional values, for special dates such as Mother\'s day or Holidays.',parraf:"", imagenes: [], videos: [videoBonobon1,videoBonobon2]},
];

function JobTV() {
		return (
			<div className="job">
					<Vermas results={results}/>
			</div>
		)	
	} 	

export default JobTV;