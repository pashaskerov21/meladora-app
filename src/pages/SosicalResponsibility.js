import React from 'react'
import Layout from './Layout'
import SectionTitle from '../components/title/SectionTitle'

function SosicalResponsibility() {
  return (
    <Layout>
      <section className="s-resp">
        <div className="container">
          <SectionTitle title='Sosial Məsuliyyət' />
          <div className='text' style={{textAlign: 'center', maxWidth: '900px'}}>
            <p className='mb-3'>
              Sahibkar olaraq təkcə qazanc əldə etmək deyil həmdə cəmmiyyətə müxtəlif sahələrdə faydalı olmağın zəruriliyini anlayırıq və bu istiqamətdə fəaliyyətlərimiz davam edir.
              Əhalinin müəyyən təbəqələrinin həyatını yaxşılaşdırmaq üçün sosial əhəmiyyətli proqramlar həyata keçiririk.
            </p>
            <p>
              Dostlarımız və çevrəmiz bizi yaxşı tanıyır.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SosicalResponsibility
