import React, { createContext, useContext, ReactNode } from 'react'
import { useNotifications } from '../hooks/useNotifications'

interface NotificationContextType {
  showSuccess: (title: string, message: string, duration?: number) => string
  showError: (title: string, message: string, duration?: number) => string
  showWarning: (title: string, message: string, duration?: number) => string
  showInfo: (title: string, message: string, duration?: number) => string
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const useNotificationContext = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotificationContext must be used within a NotificationProvider')
  }
  return context
}

interface NotificationProviderProps {
  children: ReactNode
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const { showSuccess, showError, showWarning, showInfo, NotificationContainer } = useNotifications()

  return (
    <NotificationContext.Provider value={{ showSuccess, showError, showWarning, showInfo }}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  )
}

export default NotificationContext