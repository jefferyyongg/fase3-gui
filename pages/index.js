import Image from 'next/image'

export default function Home() {

  return (
    <div className="flex h-screen justify-center">

      <div className="flex-col w-[33.33%] bg-blue-400">

        <div className="flex flex-grow justify-between p-4">

          <div className='text-2xl font-bold'>
            9:41
          </div>
          <div className='flex gap-2'>
            <img src="Cellular Connection.png" width={20}/>
            <img src="Wifi.png" width={20}/>
            <img src="Battery.png" width={20}/>
          </div>
        </div>

        <div className="flex flex-wrap mt-72 justify-center gap-16 mx-20">

          <div className='text-center'>
            <a href="/home">
            <img src="woman 1.png" width={225}/>
            <p className='text-bold text-3xl'>Naam</p>
            </a>
          </div>

          <div className='text-center'>
          <a href="/home">
            <img src="female 1.png" width={225}/>
            <p className='text-bold text-3xl'>Naam</p>
          </a>
          </div>

          <div className='text-center'>
          <a href="/home">
            <img src="male 1.png" width={225}/>
            <p className='text-bold text-3xl'>Naam</p>
          </a>
          </div>

          <div className='text-center'>
          <a href="/home">
            <img src="man 1.png" width={225}/>
            <p className='text-bold text-3xl'>Naam</p>
          </a>
          </div>

        </div>

        <div className="flex-grow mt-32">
          <img src="wave 1.png" width={1000} />
        </div>
      </div>

    </div>
  );
}

/*
        <div>
          9:41
        </div>
        <div className='flex gap-1'>
          <img src="Cellular Connection.png"/>
          <img src="Wifi.png"/>
          <img src="Battery.png"/>
        </div>
*/