import './App.css'
import Liverpool from './Liverpool'



const liverpool= [
  {nombre:"Liverpool", detalle:"El Liverpool Football Club es un club de fútbol profesional con sede en Liverpool, Inglaterra, que disputa la Premier League", foto: "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/65.png"},
  {nombre:"Mohammed Salah", detalle:"Mohamed Salah Hamed Mahrous Ghaly es un futbolista egipcio que juega como delantero en el Liverpool F. C. de la Premier League de Inglaterra, y la selección de Egipto, de la cual es su capitán.", foto: "https://www.fcbarcelonanoticias.com/uploads/s1/12/55/53/4/salah-celebra-un-gol-con-el-liverpool.jpeg"},
  {nombre:"Sadio Mane", detalle:"Sadio Mané es un futbolista senegalés que juega como delantero en el Liverpool Football Club de la Premier League de Inglaterra.", foto: "https://phantom-marca.unidadeditorial.es/8968551c304ce89cb71a0092b90e313e/resize/1320/f/jpg/assets/multimedia/imagenes/2020/10/02/16016741867595.jpg"},
  {nombre:"Diogo Jota", detalle:"Diogo José Teixeira da Silva, más conocido como Diogo Jota, es un futbolista portugués que juega en la posición de delantero para el Liverpool F. C. de la Premier League de Inglaterra y para la selección de Portugal.​", foto: "https://www.eluniverso.com/resizer/_kIvtadaxutFjllLxojYNBfrTns=/893x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/35UUB764CFA4TB5725T2MY4NNA.jpg"},
  {nombre:"Jurgen Klopp", detalle:"Jürgen Norbert Klopp es un exfutbolista y entrenador alemán. Actualmente es el entrenador del Liverpool Football Club de la Premier League de Inglaterra.", foto: "https://static.dw.com/image/53951525_303.jpg"},
]

function App(){
  return (
    
    <div align='center'>
      <h1 >Liverpool Football Club</h1>
      {liverpool.map(liverpool =>(
    <Liverpool Key={liverpool.nombre} nombre={liverpool.nombre}foto={liverpool.foto} detalle={liverpool.detalle} />
  
  
      ))}
  </div>
  
    );
}

export default App;