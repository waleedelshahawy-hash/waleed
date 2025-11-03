
import React, { useState, useEffect, useRef } from 'react';
import { LogoIcon, BrandIcon, PrintIcon, SocialIcon, BehanceIcon, LinkedInIcon, InstagramIcon } from './components/Icons';

// Helper component for section titles
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
    {children}
  </h2>
);

// Header Component
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          <span className="text-white">وليد</span><span className="text-blue-400">عبده</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          {['الرئيسية', 'خدماتي', 'أعمالي', 'من أنا', 'تواصل'].map((item, index) => (
            <a key={item} href={`#${['hero', 'services', 'portfolio', 'about', 'contact'][index]}`} onClick={(e) => { e.preventDefault(); scrollToSection(['hero', 'services', 'portfolio', 'about', 'contact'][index]); }} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">{item}</a>
          ))}
        </nav>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105">
          اطلب تصميمك
        </a>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
};


// Hero Section Component
const Hero: React.FC = () => (
  <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 text-center relative overflow-hidden">
     <div className="absolute inset-0 bg-grid-gray-700/20 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
     <div className="absolute top-0 right-0 h-96 w-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
     <div className="absolute bottom-0 left-0 h-96 w-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

    <div className="container mx-auto px-6 z-10">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight animate-fade-in-down">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">وليد عبده</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up">
        مصمم جرافيك ومبدع بصري، أحول الأفكار إلى تصاميم جذابة تروي قصة علامتك التجارية.
      </p>
      <div className="flex justify-center space-x-4 space-x-reverse animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <a href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105">
          شاهد أعمالي
        </a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105">
          تواصل معي
        </a>
      </div>
    </div>
  </section>
);

// Services Section Component
const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
        <div className="text-blue-400 mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const Services: React.FC = () => (
    <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
            <SectionTitle>خدماتي الإبداعية</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard icon={<LogoIcon />} title="تصميم الشعارات" description="أصمم شعارات فريدة تعبر عن هوية علامتك التجارية وتترك انطباعًا دائمًا." />
                <ServiceCard icon={<BrandIcon />} title="الهوية البصرية الكاملة" description="أبني هوية بصرية متكاملة تشمل الألوان، الخطوط، والأنماط لتعزيز حضورك في السوق." />
                <ServiceCard icon={<PrintIcon />} title="تصميم المطبوعات" description="تصاميم احترافية للبروشورات، البوسترات، وبطاقات الأعمال بجودة عالية وجاهزة للطباعة." />
                <ServiceCard icon={<SocialIcon />} title="تصميمات السوشيال ميديا" description="أبتكر محتوى بصري جذاب لمنصات التواصل الاجتماعي يزيد من تفاعل جمهورك." />
            </div>
        </div>
    </section>
);


// Portfolio Section Component
const PortfolioItem: React.FC<{ imageUrl: string; title: string; category: string }> = ({ imageUrl, title, category }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex flex-col justify-end p-6">
            <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-blue-300">{category}</p>
            </div>
        </div>
    </div>
);

const Portfolio: React.FC = () => (
    <section id="portfolio" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
            <SectionTitle>أحدث أعمالي</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <PortfolioItem imageUrl="https://picsum.photos/seed/project1/600/400" title="هوية بصرية لشركة تقنية" category="هوية بصرية" />
                <PortfolioItem imageUrl="https://picsum.photos/seed/project2/600/400" title="حملة إعلانية على انستجرام" category="سوشيال ميديا" />
                <PortfolioItem imageUrl="https://picsum.photos/seed/project3/600/400" title="تصميم شعار لتطبيق جوال" category="تصميم شعارات" />
                <PortfolioItem imageUrl="https://picsum.photos/seed/project4/600/400" title="كتيب تعريفي لمنتجع سياحي" category="مطبوعات" />
                <PortfolioItem imageUrl="https://picsum.photos/seed/project5/600/400" title="غلاف كتاب فني" category="مطبوعات" />
                <PortfolioItem imageUrl="https://picsum.photos/seed/project6/600/400" title="تصاميم سوشيال ميديا لمطعم" category="سوشيال ميديا" />
            </div>
        </div>
    </section>
);

// About Section Component
const About: React.FC = () => (
    <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
            <SectionTitle>من أنا</SectionTitle>
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/3">
                    <img src="https://picsum.photos/seed/waleed/400/400" alt="وليد عبده" className="rounded-full shadow-2xl w-64 h-64 mx-auto lg:w-full lg:h-auto object-cover border-4 border-blue-500" />
                </div>
                <div className="lg:w-2/3 text-center lg:text-right">
                    <h3 className="text-3xl font-bold mb-4">وليد عبده، مصمم جرافيك شغوف بالإبداع.</h3>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        أؤمن بأن التصميم الجيد ليس مجرد شكل جميل، بل هو أداة فعالة للتواصل وحل المشكلات. بخبرة تمتد لسنوات في عالم التصميم، أجمع بين الفن والاستراتيجية لإنشاء هويات بصرية مؤثرة وتجارب لا تُنسى. أستمتع بتحويل التحديات إلى فرص إبداعية وأسعى دائمًا لتقديم أعمال تفوق توقعات العملاء.
                    </p>
                    <div className="flex justify-center lg:justify-start space-x-4 space-x-reverse">
                         <span className="bg-gray-800 text-blue-300 py-2 px-4 rounded-full">Adobe Photoshop</span>
                         <span className="bg-gray-800 text-blue-300 py-2 px-4 rounded-full">Adobe Illustrator</span>
                         <span className="bg-gray-800 text-blue-300 py-2 px-4 rounded-full">Figma</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


// Contact Section Component
const Contact: React.FC = () => (
    <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
            <SectionTitle>لنتحدث عن مشروعك</SectionTitle>
            <div className="max-w-3xl mx-auto">
                <p className="text-center text-gray-400 mb-8">
                    هل لديك فكرة رائعة؟ أنا هنا لمساعدتك في تحويلها إلى واقع ملموس. املأ النموذج أدناه أو تواصل معي عبر الشبكات الاجتماعية.
                </p>
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input type="text" placeholder="الاسم الكامل" className="w-full bg-gray-700 text-white p-4 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-gray-700 text-white p-4 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <textarea placeholder="رسالتك..." rows={5} className="w-full bg-gray-700 text-white p-4 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-12 rounded-full transition-transform duration-300 hover:scale-105">
                            أرسل الرسالة
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
);

// Footer Component
const Footer: React.FC = () => (
    <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
            <div className="flex justify-center space-x-6 space-x-reverse mb-6">
                <a href="#" className="hover:text-blue-400 transition-colors"><BehanceIcon /></a>
                <a href="#" className="hover:text-blue-400 transition-colors"><LinkedInIcon /></a>
                <a href="#" className="hover:text-blue-400 transition-colors"><InstagramIcon /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} وليد عبده. جميع الحقوق محفوظة.</p>
        </div>
    </footer>
);

const App: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white selection:bg-blue-500/30">
            <Header />
            <main>
                <Hero />
                <Services />
                <Portfolio />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
