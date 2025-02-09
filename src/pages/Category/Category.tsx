import HeaderPage from "@/components/HeaderPage";

export default function Category() {
  return (
    <div>
      <HeaderPage title="Điều lệ" />
      <header className="container m-auto py-6">
        <h1 className="text-3xl font-bold">
          🏆 Điều Lệ Giải Bóng Đá V.League 1
        </h1>
        <p className="text-lg mt-2">
          Cập nhật mới nhất theo quy định của VPF & VFF
        </p>
      </header>

      <main className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <section>
          <h2 className="text-2xl font-semibold text-red-600">
            1️⃣ Điều kiện tham gia
          </h2>
          <p className="mt-2">
            - Các CLB phải được cấp phép theo tiêu chuẩn của Liên đoàn Bóng đá
            Việt Nam (VFF) & Công ty VPF.
          </p>
          <p>
            - Mỗi CLB phải có ít nhất 3 tuyến cầu thủ (đội 1, U21, U19) và đáp
            ứng tiêu chuẩn tài chính.
          </p>
          <p>
            - Cầu thủ phải có hợp đồng hợp lệ và đăng ký theo quy định FIFA.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-red-600">
            2️⃣ Luật thi đấu
          </h2>
          <p className="mt-2">
            - Giải đấu gồm 14 đội, thi đấu vòng tròn 2 lượt (sân nhà - sân
            khách).
          </p>
          <p>
            - Mỗi trận đấu kéo dài 90 phút, chia thành 2 hiệp, mỗi hiệp 45 phút.
          </p>
          <p>
            - Mỗi đội được đăng ký tối đa 3 cầu thủ nước ngoài và 1 cầu thủ gốc
            Việt.
          </p>
          <p>- Áp dụng công nghệ VAR tại các vòng đấu quan trọng.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-red-600">
            3️⃣ Cách tính điểm & Xếp hạng
          </h2>
          <p className="mt-2">
            - Thắng: +3 điểm | Hòa: +1 điểm | Thua: 0 điểm.
          </p>
          <p>
            - Xếp hạng dựa trên: Điểm số ➝ Hiệu số bàn thắng ➝ Số bàn ghi được ➝
            Thành tích đối đầu.
          </p>
          <p>
            - Nếu các đội vẫn bằng nhau, sẽ tổ chức trận playoff để phân định vị
            trí.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-red-600">
            4️⃣ Quy định thăng hạng & Xuống hạng
          </h2>
          <p className="mt-2">
            - Đội vô địch giành quyền tham dự AFC Champions League.
          </p>
          <p>- Đội cuối bảng sẽ xuống chơi ở giải Hạng Nhất.</p>
          <p>
            - Đội xếp áp chót sẽ đá play-off với đội đứng thứ 2 của giải Hạng
            Nhất.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-red-600">
            5️⃣ Các điều khoản khác
          </h2>
          <p className="mt-2">
            - CLB vi phạm kỷ luật có thể bị phạt tiền, trừ điểm hoặc loại khỏi
            giải.
          </p>
          <p>
            - Trọng tài do VFF & VPF chỉ định, đảm bảo công bằng, minh bạch.
          </p>
          <p>- Các quyết định cuối cùng thuộc về Hội đồng tổ chức giải.</p>
        </section>

        <footer className="text-center text-gray-500 mt-8">
          <p>© 2025 V.League 1 | Liên đoàn bóng đá Việt Nam (VFF) & VPF</p>
        </footer>
      </main>
    </div>
  );
}
