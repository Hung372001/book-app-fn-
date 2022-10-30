import React from 'react'

const Notification = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-2xl">
        <ion-icon name="notifications-outline"></ion-icon>
        <span className="hidden md:block text-xs">Thông báo</span>
      </div>
    </div>
  )
}
export default Notification