'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useSelector, useDispatch } from "react-redux";
import { setMsg } from '@/store/sliceMsg';
import { useEffect } from 'react';
import { Button, Text } from '@chakra-ui/react';

export default function Home() {
  const msg = useSelector(state => state.msg);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setMsg('Done!!!'))
    }, 5000)
  })
  return (
    <main >
      <Text fontSize="2rem" textAlign={'center'}>{msg}</Text>
      <Button variant={'primary'} display='block' margin='auto'>Click</Button>
    </main>
  )
}
