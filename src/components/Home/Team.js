import React from 'react'
import '../../css/Team.css';
import Tony from '../../assets/images/Tony.jpg';
import Kavith from '../../assets/images/Kavitha.jpg';
import Shilpa from '../../assets/images/Shilpa.jpg';
import LazyImage from '../LazyImage';

function Team() {
  const ShilpaImg ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599937/rio_main_website/ywsej9hpk50pwaqbxwx4.jpg"
  const KavithImg ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599922/rio_main_website/s8yeutdgnpwkuw4balfk.jpg"
  const TonyImg ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599944/rio_main_website/vunzh9ywp4sxuouvt5g2.jpg"
  
  const teamMembers = [
    {
      name: 'Kavitha Sylvia',
      role: 'CFO',
      image: KavithImg,
      linkedin: 'https://www.linkedin.com/in/kavitha-sylvia-a26168202/'
    },
    {
      name: 'Tony Rozario',
      role: 'CEO',
      image: TonyImg,
      linkedin: 'https://www.linkedin.com/in/tony-rozario/'
    },
    {
      name: 'Maria Shilpa',
      role: 'COO',
      image: ShilpaImg,
      linkedin: 'https://www.linkedin.com/in/j-maria-shilpa-2ab9a71b9/'
    }
  ]
  
  return (
    <div className='col-12'>
        <div className='team_intro'>
          <h1 className='team_title'>THE TRIO BEHIND RIO’S GROWTH</h1>
          <p className='team_des'>Meet the powerhouse trio behind Rio Business Solutions - the driving force that made it all possible. Their visionary leadership, financial expertise, and operational excellence have made everything possible, driving success for both our company and clients. Their teamwork is the foundation of Rio’s growth and impact.</p>
        </div>
        <div className='team_contanier'>
          <div className="team_card">
            {teamMembers.map((member, index) => (
              <a 
                key={index}
                href={member.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
                className='team-member-link'
              >
                <div className='card__article'>
                  <LazyImage src={member.image} alt={member.name} className='team_img' width={200} height={200}/>
                  <div className='card_data'>
                    <h4 className='card_title'>{member.name}</h4>
                    <span>{member.role}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>    
        </div>
    </div>
  )
}

export default Team