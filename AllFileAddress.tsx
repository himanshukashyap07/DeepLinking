import { View, Text } from 'react-native'
import React from 'react'
import GmailOpen from './assets/GmailOpen'
import WhatsAppOpen from './assets/WhatsAppOpen'
import WebsiteOpen from './assets/WebsiteOpen'
import InstagramOpen from './assets/InstagramOpen'
import PaymentOpen from './assets/PaymentOpen'
import YoutubeOpen from './assets/YoutubeOpen'
import PhoneCall from './assets/PhoneCallOpen'
import MessageOpen from './assets/MessageOpen'
import TelegramOpen from './assets/TelegramOpen'

const AllFileAddress = () => {
  return (
    <>
        <WhatsAppOpen/>
        <WebsiteOpen/>
        <InstagramOpen/>
        <PaymentOpen/>
        <YoutubeOpen/>
        <PhoneCall/>
        <MessageOpen/>
        <GmailOpen/>
        <TelegramOpen/>
    </>
  )
}

export default AllFileAddress