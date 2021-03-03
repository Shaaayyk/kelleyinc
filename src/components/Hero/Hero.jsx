import storage from '../../assets/kelleyinc-storage-main.png'
import kwash from '../../assets/kelleyinc-kwash-main.png'
import truckWash from '../../assets/kelleyinc-truckwash-main.png'

export default function Hero() {
  const businesses = [
    {
      name: 'Self Storage Units',
      address: '829 N. Pennsylvania Ave',
      location: 'Independence, KS 67301',
      image: storage
    },
    {
      name: 'K-Wash + Pet Wash',
      address: '1228 N. Pennsylvania Ave',
      location: 'Independence, KS 67301',
      image: kwash
    },
    {
      name: 'Truck Wash',
      address: '1401 N. Pennsylvania Ave',
      location: 'Independence, KS 67301',
      image: truckWash
    },
  ]

  return (
    <div className='hero'>
      {
        businesses?.map((business, index) => (
          <div className='business-card' key={index}>
            <img src={business.image} alt={business.name}/>
            <h2>{business.name}</h2>
            <p>{business.address}</p>
            <p>{business.location}</p>
          </div>
        ))
      }
    </div>
  )
}
