import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import styles from "./page.module.css";
import { 
  Zap, 
  MapPin, 
  Users, 
  ShieldAlert, 
  Navigation, 
  Radio, 
  HeartHandshake, 
  Send,
  Map as MapIcon,
  ShieldCheck,
  AlertTriangle
} from "lucide-react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />

      {/* About Section */}
      <section id="gioi-thieu" className={styles.section}>
        <h2 className={styles.sectionTitle}>Giới thiệu về <span>ReliefCare</span></h2>
        <p className={styles.sectionSubtitle}>
          Nền tảng hỗ trợ cứu trợ thiên tai thông minh, giúp tối ưu hóa công tác cứu hộ, cứu nạn thông qua công nghệ kết nối theo thời gian thực.
        </p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <Zap size={28} strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>Phản hồi tức thì</h3>
            <p className={styles.cardText}>
              Gửi và nhận tín hiệu SOS ngay lập tức, phân loại mức độ khẩn cấp tự động giúp ưu tiên các khu vực chịu ảnh hưởng nặng nhất.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <MapPin size={28} strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>Định vị chính xác</h3>
            <p className={styles.cardText}>
              Bản đồ thời gian thực cập nhật liên tục vị trí của nạn nhân, tình nguyện viên và các đội cứu hộ để nâng cao hiệu quả phối hợp.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <Users size={28} strokeWidth={1.5} />
            </div>
            <h3 className={styles.cardTitle}>Cộng đồng vững mạnh</h3>
            <p className={styles.cardText}>
              Mạng lưới hàng ngàn tình nguyện viên và các trạm cứu trợ sẵn sàng hỗ trợ khẩn cấp, chia sẻ nguồn lực y tế và lương thực.
            </p>
          </div>
        </div>
      </section>

      {/* SOS Map Section */}
      <section id="ban-do-sos" className={styles.sectionDark}>
        <div className={styles.sectionDarkInner}>
          <h2 className={styles.sectionTitle}>Bản đồ <span>SOS Live</span></h2>
          <p className={styles.sectionSubtitle}>
            Theo dõi diễn biến thiên tai và các tín hiệu gọi cứu trợ trên toàn quốc với hệ thống radar thời gian thực
          </p>
          
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapPulse}></div>
            <MapIcon size={48} strokeWidth={1.5} className={styles.mapIcon} color="var(--color-info)" />
            <p className={styles.mapText}>Dữ liệu bản đồ trực tuyến đang được tích hợp...</p>
          </div>
        </div>
      </section>

      {/* Rescue Teams Section */}
      <section id="doi-cuu-tro" className={styles.section}>
        <h2 className={styles.sectionTitle}>Mạng lưới <span>Đội cứu trợ</span></h2>
        <p className={styles.sectionSubtitle}>
          Hơn 60 trạm và nhóm cứu hộ khẩn cấp được trang bị đầy đủ nghiệp vụ trải dài khắp cả nước
        </p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <ShieldCheck size={28} strokeWidth={1.5} color="var(--color-success)" />
            </div>
            <h3 className={styles.cardTitle}>Đội Cứu Hộ Miền Trung</h3>
            <p className={styles.cardText}>Lực lượng phản ứng nhanh chuyên xử lý bão lụt phức tạp khu vực duyên hải và các vùng ngập sâu.</p>
            <div className={styles.cardMeta}>
              <div className={styles.metaRow}>
                <Navigation size={16} strokeWidth={2} /> <span><strong>Khu vực:</strong> Đà Nẵng, Quảng Nam, Quảng Trị</span>
              </div>
              <div className={styles.metaRow}>
                <Radio size={16} strokeWidth={2} color="var(--color-success)" /> <span><strong>Trạng thái:</strong> <span style={{color: "var(--color-success)"}}>Sẵn sàng (24/7)</span></span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <AlertTriangle size={28} strokeWidth={1.5} color="var(--color-warning)" />
            </div>
            <h3 className={styles.cardTitle}>Trạm Hỗ Trợ Tây Bắc</h3>
            <p className={styles.cardText}>Đơn vị chuyên dụng tìm kiếm cứu nạn tại địa hình vùng núi, dốc đứng, sạt lở và chia cắt.</p>
            <div className={styles.cardMeta}>
              <div className={styles.metaRow}>
                <Navigation size={16} strokeWidth={2} /> <span><strong>Khu vực:</strong> Yên Bái, Lào Cai, Sơn La</span>
              </div>
              <div className={styles.metaRow}>
                <Radio size={16} strokeWidth={2} color="var(--color-warning)" /> <span><strong>Trạng thái:</strong> <span style={{color: "var(--color-warning)"}}>Đang làm nhiệm vụ</span></span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <ShieldCheck size={28} strokeWidth={1.5} color="var(--color-success)" />
            </div>
            <h3 className={styles.cardTitle}>Phản Ứng Nhanh ĐBSCL</h3>
            <p className={styles.cardText}>Đội tàu xuồng hỗ trợ cứu hộ đường thủy, phân phát nhu yếu phẩm khẩn cấp đến từng hộ dân.</p>
            <div className={styles.cardMeta}>
              <div className={styles.metaRow}>
                <Navigation size={16} strokeWidth={2} /> <span><strong>Khu vực:</strong> Cần Thơ, An Giang, Đồng Tháp</span>
              </div>
              <div className={styles.metaRow}>
                <Radio size={16} strokeWidth={2} color="var(--color-success)" /> <span><strong>Trạng thái:</strong> <span style={{color: "var(--color-success)"}}>Sẵn sàng (24/7)</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section id="tinh-nguyen-vien" className={styles.sectionDark}>
        <div className={styles.sectionDarkInner} style={{textAlign: "center"}}>
          <div style={{display: "inline-flex", padding: "20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", marginBottom: "32px"}}>
             <HeartHandshake size={56} strokeWidth={1.5} color="var(--color-white)" />
          </div>
          <h2 className={styles.sectionTitle}>Trở thành <span>Tình nguyện viên</span></h2>
          <p className={styles.sectionSubtitle}>
            Tham gia cùng chúng tôi để bảo vệ cộng đồng. Mọi sự đóng góp đều vô cùng trân quý và có thể cứu sống những sinh mạng đang gặp nguy hiểm. Cùng nhau, chúng ta tạo nên sức mạnh.
          </p>
          <div style={{display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap"}}>
            <button type="button" className={styles.button}>
              Đăng ký ngay <Send size={18} strokeWidth={2} />
            </button>
            <button type="button" className={`${styles.button} ${styles.buttonGhost}`}>
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="lien-he" className={styles.section}>
        <div className={styles.formWrapper}>
          <h2 className={styles.sectionTitle}>Liên hệ <span>Hỗ trợ</span></h2>
          <p className={styles.sectionSubtitle} style={{marginBottom: "40px"}}>
            Bạn có câu hỏi, yêu cầu hỗ trợ hoặc muốn báo cáo sự cố khẩn cấp? Hãy để lại thông tin.
          </p>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Họ và tên" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email liên hệ / Số điện thoại" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <textarea placeholder="Nội dung, tình trạng, hoặc vị trí cần hỗ trợ..." className={styles.textarea}></textarea>
            </div>
            <button type="button" className={styles.button}>
              Gửi thông điệp <Send size={18} strokeWidth={2} />
            </button>
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <ShieldAlert size={24} color="var(--color-danger)" strokeWidth={2} />
          ReliefCare
        </div>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} ReliefCare. Phát triển vì một cộng đồng thông minh an toàn hơn.
        </p>
      </footer>
    </main>
  );
}
