import React from 'react'
import aboutBg from '../../image/bg/about-bg.png'
import SectionTitle from '../title/SectionTitle'
import textDesign from '../../image/design/txt-design-bg.png'
import textDesign_2 from '../../image/design/title-design-2.png'
import about_icon_1 from '../../image/design/about-icon/txt-img3.1.png'
import about_icon_2 from '../../image/design/about-icon/txt-img3.2.png'
import about_icon_3 from '../../image/design/about-icon/txt-img3.3.png'
import about_icon_4 from '../../image/design/about-icon/txt-img3.4.png'

function AboutSection() {
    return (
        <section className="about-home">
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-8 about-col mb-0">
                    <img src={textDesign} className='text-design' alt="design" />
                    <div className="content">
                        <SectionTitle title='Biz Kimik?' />
                        <div className='text'>
                            <p>
                                Əslində hər şey illər əvvəl İsmayıllı rayonunda ailəvi gəzintidə olduğumuz zaman baş verdi.
                                İsmayıllı rayonunun füsunkar təbiətinin gözəlliyi bizim bir gün burda kənd təsərrüfatı ilə məşğul olmaq arzusu oyatdı. Daha sonra dostlarımızla bu məsələni müzakirə edərək İsmayıllıda təsərrüfat qurmağa qərar verdik.
                                Böyük uğurlar vaxtında və yerində verilən qərarlarla çox bağlıdır.
                                Elə bizdə ilk səfərdə qərar verdik və başladıq. İllər çox sürətli keçdir. Bizdə böyümədə zamanın sürətindən geri qalmadıq. Qısa zaman müddətində əldə etdiyimiz uğurlar və daha sürətlə böyüməyə davam etməyimiz işimizə olan sevginin göstəricisidir.
                                Alma, armud nektarin, gavalıç gilas və qoz yetişdirməklə qalmadıq, tingçilik və toxumçuluq məhsul sıramızı genişləndirdik.
                                Qısa zamanda ən son texnoloji yeniliklərlə damla suvarma sistemlərinin qurulması BAĞLARIN layihələndirilməsi, salınması kimi çətin işlərin öhdəsindən uğurla gəldik.
                                2022-ci ildə əsas hədəfimiz brendimizin "made in AZERBAİJAN" adına layiq ölkə kənarında rəflərdə görünməsidir.
                                Növbəti hədəfləri sizlərlə paylaşmaq arzusuyla
                            </p>
                            <img src={textDesign_2} className='text-design-2' alt="design" />
                        </div>
                        <div className="about-icons">
                            <div className="item">
                                <img src={about_icon_1} alt="icon" />
                                <span>Orqanik</span>
                            </div>
                            <div className="item">
                                <img src={about_icon_2} alt="icon" />
                                <span>Məmnuniyyət</span>
                            </div>
                            <div className="item">
                                <img src={about_icon_3} alt="icon" />
                                <span>Orqanik</span>
                            </div>
                            <div className="item">
                                <img src={about_icon_4} alt="icon" />
                                <span>Yüksək Keyfiyyət</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-4 mb-0">
                    <div className='about-bg' style={{ backgroundImage: `url(${aboutBg})` }}></div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
