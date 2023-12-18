import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
import type {FC} from 'react'

const InEligibleError: FC<{text?: string}> = ({text}) => (
  <h3 style={{color: '#dc3545', textTransform: 'capitalize'}}>
    {text || 'The component is ineligible to render'}
  </h3>
)
export default function AddToCart() {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          'AYUxXpnA5C9h34-WJE9d-6V7ioJCkVTu51m-edIMjiO0ovB2kVk5s4gygXHI2ftK1h8R8CRtJxG14OYA',
        enableFunding: ['venmo', 'paypal'],
      }}
    >
      <PayPalButtons />
      <PayPalButtons fundingSource="venmo">
        <InEligibleError text="You are not eligible to pay with Venmo." />
      </PayPalButtons>
    </PayPalScriptProvider>
  )
}
