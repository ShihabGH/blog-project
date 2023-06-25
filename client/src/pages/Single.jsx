import React from 'react';
import Edit from '../assets/images/edit.png';
import Delete from '../assets/images/delete.png';
import {Link} from "react-router-dom";
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className='single-items'>
        <div className='content'>
          <img src='https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='gundam' />
          <div className='user'>
            <img src='https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80' alt='profileImg'/>
            <div className='info'>
              <span>Zombie</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className='edit'>
              <Link to={`/write?edit=2`}><img className='edit-img' src={Edit} alt=''/></Link>
              <img src={Delete} alt=''/>
            </div>
          </div>
          <h1>Gundam: A Cultural Icon and Anime Phenomenon</h1>
          <p className='desc'>Gundam, a franchise that has left an indelible mark on the world of anime, has captured the hearts of fans for over four decades. Since its debut in 1979, this iconic mecha series has become synonymous with the genre, revolutionizing the way people perceive giant robot narratives. This article explores the enduring popularity of Gundam, its impact on anime and pop culture, and the timeless themes it tackles. <br/><br/>
          A Revolutionary Concept: Gundam, created by Yoshiyuki Tomino, introduced a groundbreaking concept to the mecha genre. Instead of focusing solely on action-packed battles, it delved into intricate political narratives, social commentary, and moral dilemmas. The series explored the human cost of war, the consequences of unchecked technology, and the complexities of personal identity within a futuristic setting. This depth of storytelling and mature themes set Gundam apart from its contemporaries, captivating audiences worldwide. <br/><br/>
          The Gundam Universe: The Gundam franchise encompasses a vast universe of series, movies, manga, and merchandise. The original Mobile Suit Gundam served as a launching pad, giving birth to multiple timelines and spin-offs, each with its unique storyline, characters, and mecha designs. Notable entries include Gundam Wing, Gundam Seed, Gundam 00, and the recent Iron-Blooded Orphans. With each iteration, Gundam continues to reinvent itself while staying true to its core themes.</p>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default Single