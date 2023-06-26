import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Button from "../components/login-btn";

export default function Home() {
  return (
    <>
    <h1>Hello from Next js deployed to Railway.app</h1>
    <Button />
    </>
  )
}
