import React from 'react'
import { clients } from '../constant'

const Clients = () => {
  return (
    <div className='items-center w-full mt-20 flex justify-between gap-10'>
        {clients.map((client, index)=>{
            return (
              <div key={client.id} className='flex items-center justify-center '>
                <img src={client.logo} alt={client.id} width={200}/>
              </div>
            )
        })}
    </div>
  )
}

export default Clients