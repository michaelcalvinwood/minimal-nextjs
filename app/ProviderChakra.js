'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function ProviderChakra({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
