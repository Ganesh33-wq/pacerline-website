import { useState, useCallback } from 'react'
import Notification, { NotificationProps } from '../components/Notification'

interface NotificationData {
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
}

let notificationId = 0

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([])

  const addNotification = useCallback((data: NotificationData) => {
    const id = `notification-${++notificationId}`
    const notification: NotificationProps = {
      id,
      ...data,
      onClose: (id: string) => removeNotification(id)
    }
    
    setNotifications(prev => [...prev, notification])
    return id
  }, [])

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }, [])

  const showSuccess = useCallback((title: string, message: string, duration?: number) => {
    return addNotification({ type: 'success', title, message, duration })
  }, [addNotification])

  const showError = useCallback((title: string, message: string, duration?: number) => {
    return addNotification({ type: 'error', title, message, duration })
  }, [addNotification])

  const showWarning = useCallback((title: string, message: string, duration?: number) => {
    return addNotification({ type: 'warning', title, message, duration })
  }, [addNotification])

  const showInfo = useCallback((title: string, message: string, duration?: number) => {
    return addNotification({ type: 'info', title, message, duration })
  }, [addNotification])

  const NotificationContainer = () => (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-4">
      {notifications.map(notification => (
        <Notification key={notification.id} {...notification} />
      ))}
    </div>
  )

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    NotificationContainer,
    removeNotification
  }
}

export default useNotifications