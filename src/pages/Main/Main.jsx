import React from 'react'
import './Main.css';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';

const Main = ()=> {
  return (
    <div className='Main'>
    <Header title={'Main'}/>

    <section className='total_goal'>
      <h2 className='title'>React Widget</h2>
      <p className='comment'>리액트를 기반으로 가벼운 기능 단위 위젯을 개발하는 프로젝트입니다.</p>
      <div className='check'>
      <p>Done : 2</p>
      <p>Progress : 0</p>
      </div>
    </section>

    <section>
      <Card/>
    </section>

    </div>
  )
}

export default Main