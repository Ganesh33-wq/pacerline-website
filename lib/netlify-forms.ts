// Netlify Forms integration for booking system
// This works automatically if your site is hosted on Netlify

export const submitToNetlifyForms = async (bookingData: {
  date: string
  time: string
  duration: number
  clientName: string
  clientEmail: string
}) => {
  try {
    const formData = new FormData()
    formData.append('form-name', 'demo-booking')
    formData.append('date', bookingData.date)
    formData.append('time', bookingData.time)
    formData.append('duration', bookingData.duration.toString())
    formData.append('clientName', bookingData.clientName)
    formData.append('clientEmail', bookingData.clientEmail)
    formData.append('submittedAt', new Date().toISOString())

    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })

    if (response.ok) {
      return { success: true }
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    console.error('Error submitting to Netlify Forms:', error)
    return { success: false, error }
  }
}

// You'll need to add this hidden form to your HTML (in _document.tsx):
/*
<form name="demo-booking" netlify hidden>
  <input type="text" name="date" />
  <input type="text" name="time" />
  <input type="text" name="duration" />
  <input type="text" name="clientName" />
  <input type="email" name="clientEmail" />
  <input type="text" name="submittedAt" />
</form>
*/