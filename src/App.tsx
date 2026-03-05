import React, { useState } from 'react';
import { 
  Coffee, 
  MapPin, 
  Calendar, 
  ArrowDown, 
  ChefHat, 
  Download, 
  ArrowUpRight, 
  Leaf, 
  Armchair, 
  Smile, 
  Clock, 
  Phone, 
  Mail, 
  Check, 
  Instagram, 
  Facebook,
  Menu as MenuIcon,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: '브랜드 스토리', href: '#about' },
    { name: '메뉴소개', href: '#menu' },
    { name: '갤러리', href: '#gallery' },
    { name: '예약하기', href: '#reservation' },
  ];

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-6 sm:px-10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/10 flex items-center justify-center">
          <Coffee className="text-white w-5 h-5" />
        </div>
        <span className="text-white text-lg font-medium tracking-tight">Sunny Dream.</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-1.5 px-2">
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            className="px-5 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right Actions */}
      <div className="hidden md:flex items-center gap-3">
        <a href="#location" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-colors">
          <MapPin className="w-5 h-5" />
        </a>
        <a href="#reservation" className="group flex items-center gap-3 bg-white pl-5 pr-1.5 py-1.5 rounded-full hover:shadow-lg transition-all">
          <span className="text-sm font-medium text-stone-900">테이블 예약</span>
          <span className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-800 transition-colors">
            <Calendar className="text-white w-4 h-4" />
          </span>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-white p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <MenuIcon />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 mx-4 p-6 bg-stone-900/95 backdrop-blur-xl rounded-2xl border border-white/10 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-white text-lg font-medium py-2 border-b border-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4">
              <a href="#location" className="flex items-center gap-2 text-white/70">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">오시는 길</span>
              </a>
              <a href="#reservation" className="bg-white text-stone-900 px-6 py-2 rounded-full text-sm font-semibold">
                예약하기
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="max-w-[1600px] mx-auto p-2 sm:p-4 lg:p-6">
      {/* 1. Hero Section */}
      <header className="relative w-full h-[95vh] min-h-[700px] rounded-[2rem] overflow-hidden bg-stone-900 shadow-2xl">
        {/* Background Image */}
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc54d896-37cc-467a-b91c-8aaee392ee33_3840w.webp" 
          alt="Sunny Dream Interior" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

        <Navbar />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 z-10 flex flex-col items-center justify-center h-full pt-32 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-white uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/10">
              SINCE 2024
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white font-medium tracking-tighter leading-[1.2] mb-6">
              신선한 미식,<br />따뜻한 꿈의 공간.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-xl mx-auto">
              좋은 사람들과 맛있는 음식을 나누는 소중한 시간.<br />정성 어린 요리와 편안한 분위기를 경험해보세요.
            </p>
            
            <a href="#menu" className="group inline-flex items-center gap-4 bg-white text-stone-900 pl-8 pr-2 py-2 rounded-full hover:shadow-xl hover:shadow-white/20 transition-all">
              <span className="text-base font-medium">메뉴 보기</span>
              <span className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-700 transition-colors">
                <ArrowDown className="text-white w-6 h-6" />
              </span>
            </a>
          </motion.div>
        </div>
      </header>

      {/* 2. Brand Story Section */}
      <section id="about" className="mt-24 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <span className="text-stone-500 font-medium uppercase text-xs tracking-wider mb-4 block">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-6">
              매일의 즐거움을 굽습니다
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-6 font-light">
              써니 드림은 가장 좋은 재료가 가장 좋은 맛을 낸다는 믿음에서 시작되었습니다. 지역 농가에서 공수한 신선한 식재료로 매일 아침 주방의 불을 밝힙니다.
            </p>
            <p className="text-stone-500 text-base leading-relaxed mb-8">
              향긋한 스페셜티 커피부터 셰프의 손길이 닿은 시그니처 디쉬까지, 우리는 고객님의 일상 속에 작은 휴식과 따뜻한 꿈을 선물하고자 합니다.
            </p>
            
            <div className="flex gap-8 border-t border-stone-200 pt-8">
              <div>
                <span className="block text-2xl font-semibold text-stone-900">100%</span>
                <span className="text-sm text-stone-500">유기농 원두</span>
              </div>
              <div>
                <span className="block text-2xl font-semibold text-stone-900">Daily</span>
                <span className="text-sm text-stone-500">당일 생산 베이커리</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden group">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6586e163-951e-453e-abaa-5e04803575da_1600w.webp" 
                alt="Coffee making" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 inline-flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-white">
                    <ChefHat className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Head Chef</span>
                    <p className="text-stone-900 font-medium text-sm">총괄 셰프의 시그니처</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Menu Highlights */}
      <section id="menu" className="mt-24 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-4">추천 메뉴</h2>
            <p className="text-stone-500 font-light">써니 드림이 제안하는 시간대별 큐레이션 메뉴를 만나보세요.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-stone-900 font-medium hover:opacity-70 mt-4 md:mt-0 transition-opacity">
            전체 메뉴판 다운로드 <Download className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "시그니처 디쉬",
              desc: "아보카도 토스트부터 트러플 파스타까지, 셰프의 특별한 레시피.",
              tag: "베스트셀러",
              category: "Main Course",
              img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2510&auto=format&fit=crop"
            },
            {
              title: "커피 & 음료",
              desc: "싱글 오리진 원두, 핸드메이드 말차, 청량한 무알콜 칵테일.",
              category: "Beverages",
              img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop"
            },
            {
              title: "수제 디저트",
              desc: "매일 구워내는 치즈케이크와 아티스틱한 페이스트리 컬렉션.",
              category: "Bakery",
              img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5fe49f96-1c36-4800-8d69-bcddec308154_1600w.webp"
            }
          ].map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
                {item.tag && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="px-4 pb-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm mb-4">{item.desc}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-medium text-stone-400">{item.category}</span>
                  <ArrowUpRight className="w-6 h-6 text-stone-900" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Brand Strengths */}
      <section className="mt-24 bg-stone-900 text-white rounded-[2rem] overflow-hidden relative py-20 px-6 sm:px-12">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbd5f95a-c6f8-4fdc-b784-5bc8291b4621_3840w.jpg" 
            alt="Texture background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6">써니 드림을 찾아야 하는 이유</h2>
          <p className="text-stone-300 text-lg font-light">우리는 단순한 식사를 넘어 잊지 못할 경험을 큐레이팅합니다.</p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: Leaf, title: "신선한 식재료", desc: "농장에서 테이블까지, 매일 아침 직송된 최상의 재료만을 사용합니다." },
            { icon: Armchair, title: "아늑한 공간", desc: "미니멀한 디자인과 따뜻한 조명, 온전한 휴식을 위한 편안한 가구." },
            { icon: Smile, title: "진심 어린 서비스", desc: "가족을 대하는 마음으로, 모든 방문이 특별해지도록 정성을 다합니다." }
          ].map((feature, idx) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/15 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-white text-stone-900 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-stone-400 font-light text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Gallery */}
      <section id="gallery" className="mt-24 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-12 text-center">시각적 미식</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          <div className="col-span-2 md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0acbf0ca-a573-48bb-8153-e1d57e4604ce_1600w.webp" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Cocktail"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-1 rounded-3xl overflow-hidden relative group">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41a7086c-63e9-428d-975e-179c8863bfd5_800w.webp" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Latte Art"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden relative group">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce305672-6da8-4c81-80b5-c3853afd35d1_800w.jpg" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Cafe Interior"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-1 rounded-3xl overflow-hidden relative group">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f951c57b-e8fe-4421-8181-b1d3d87f210e_800w.webp" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Brunch"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 6. Opening Hours */}
      <section className="mt-24 px-4 sm:px-6">
        <div className="bg-stone-100 rounded-[2rem] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Clock className="w-12 h-12 text-stone-900 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-8">영업 시간</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <span className="block text-sm text-stone-500 font-medium uppercase tracking-wider mb-2">평일 (월 - 금)</span>
                <span className="text-2xl font-semibold text-stone-900">07:00 - 22:00</span>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                <span className="block text-sm text-stone-500 font-medium uppercase tracking-wider mb-2">주말 (토 - 일)</span>
                <span className="text-2xl font-semibold text-stone-900">08:00 - 23:00</span>
              </div>
            </div>
            <p className="mt-8 text-stone-500 font-light">해피아워: 매일 오후 4시 - 6시</p>
          </div>
        </div>
      </section>

      {/* 7. Location */}
      <section id="location" className="mt-24 px-4 sm:px-6">
        <div className="rounded-[2rem] overflow-hidden relative h-[400px] group">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce305672-6da8-4c81-80b5-c3853afd35d1_3840w.jpg" 
            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" 
            alt="Map background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/20 transition-colors"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-[90%]"
          >
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-medium text-stone-900 mb-2">오시는 길</h3>
            <p className="text-stone-500 mb-6 font-light">서울특별시 강남구 테헤란로 123<br />써니 드림 타워 1층</p>
            <a href="#" className="text-sm font-semibold text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors">네이버 지도에서 보기</a>
          </motion.div>
        </div>
      </section>

      {/* 8. Reservation Section */}
      <section id="reservation" className="mt-24 mb-12">
        <div className="bg-white rounded-[2rem] p-8 sm:p-12 lg:p-16 shadow-xl border border-stone-100 flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-stone-900 mb-6">테이블 예약</h2>
            <p className="text-stone-500 text-lg font-light mb-10 max-w-md">원하시는 시간대에 편안하게 이용하실 수 있도록 미리 예약하세요. 정성을 다해 준비하겠습니다.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm text-stone-400">전화 문의</span>
                  <a href="tel:02-1234-5678" className="text-lg font-medium text-stone-900 hover:underline">02-1234-5678</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm text-stone-400">이메일</span>
                  <a href="mailto:hello@sunnydream.com" className="text-lg font-medium text-stone-900 hover:underline">hello@sunnydream.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-stone-50 rounded-3xl p-8">
            <form action="#" className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">날짜 선택</label>
                  <input type="date" className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 focus:ring-2 focus:ring-stone-900 focus:outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">방문 인원</label>
                  <select className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 focus:ring-2 focus:ring-stone-900 focus:outline-none">
                    <option>2명</option>
                    <option>3명</option>
                    <option>4명</option>
                    <option>단체 (5인 이상)</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">성함</label>
                <input type="text" className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none" placeholder="홍길동" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">연락처</label>
                <input type="tel" className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none" placeholder="010-0000-0000" />
              </div>
              
              <button type="submit" className="w-full bg-stone-900 text-white font-medium py-4 rounded-xl mt-4 hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 group">
                예약 신청하기
                <Check className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="py-10 px-6 flex flex-col md:flex-row items-start justify-between border-t border-stone-200 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-stone-900 p-1.5 rounded border border-stone-800 flex items-center justify-center">
              <Coffee className="text-white w-5 h-5" />
            </div>
            <span className="text-stone-900 font-semibold tracking-tight">Sunny Dream.</span>
          </div>
          <p className="text-sm text-stone-500 max-w-xs">신선한 식재료, 따뜻한 순간, 그리고 잊지 못할 커피 한 잔. 오늘 써니 드림에서 만나요.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-sm">
          <div>
            <h4 className="font-semibold text-stone-900 mb-3">회사 소개</h4>
            <ul className="space-y-2 text-stone-500">
              <li><a href="#about" className="hover:text-stone-900 transition-colors">브랜드 스토리</a></li>
              <li><a href="#menu" className="hover:text-stone-900 transition-colors">메뉴 안내</a></li>
              <li><a href="#gallery" className="hover:text-stone-900 transition-colors">갤러리</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-stone-900 mb-3">방문 안내</h4>
            <ul className="space-y-2 text-stone-500">
              <li><a href="#location" className="hover:text-stone-900 transition-colors">오시는 길</a></li>
              <li><a href="#reservation" className="hover:text-stone-900 transition-colors">온라인 예약</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">제휴 문의</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-stone-900 mb-3">소셜 미디어</h4>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-200 transition-colors">
                <Instagram className="w-4 h-4 text-stone-900" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-200 transition-colors">
                <Facebook className="w-4 h-4 text-stone-900" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center pb-6 text-xs text-stone-400">
        © 2024 Sunny Dream. All rights reserved.
      </div>
    </div>
  );
}
