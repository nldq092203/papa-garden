export default function MapEmbed() {
  return (
    <div className="w-full h-[700px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] overflow-hidden rounded-xl shadow-2xl">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30987.94465935054!2d109.13988982764569!3d13.869439302855227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f156647d90f2d%3A0x6119316f6123c489!2zUGjGsOG7m2MgSGnhu4dwLCBUdXkgUGjGsOG7m2MsIELDrG5oIMSQ4buLbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2sfr!4v1757276838535!5m2!1svi!2sfr"     
        width="100%" 
        height="100%" 
        style={{border:0}} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}
