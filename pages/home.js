import Image from 'next/image'

export default function Home() {

  return (
    <div className="flex h-screen justify-center">

      <div className="flex-col w-[33.33%] bg-blue-500">

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

        <div className="flex flex-wrap mt-24 justify-center gap-16">
            <img src='home.png'/>
        </div>

        <div className="mt-52 relative flex justify-center">
            <img src="bar.png" width={650} className='absolute'/>

            <div className='flex mx-6 mt-4 absolute gap-10'>

                <a href="/home">
                    <img src="house.png" width={80} className='bg-gray-400 rounded-2xl'/>
                </a>
                <a href="/settings">
                    <img src="settings.png" width={80} className=''/>
                </a>

                <img src="add.png" width={80} className=''/>

                <a href="/stats">
                    <img src="stats.png" width={80} className=''/>
                </a>
                <a href="profile">
                    <img src="profile.png" width={80} className=''/>
                </a>

            </div>
            
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