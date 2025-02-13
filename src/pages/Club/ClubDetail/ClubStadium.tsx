import React from "react";

function ClubStadium() {
  return (
    <div>
      <div className="container px-10 m-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="pr-6">
            <p className="mb-2">
              <strong>Sức chứa: </strong> 42.918 nguoi
            </p>
            <p className="mb-2">
              <strong>Mở cửa:</strong> 8PM - 12AM
            </p>
            <p className="mb-2">
              <strong>Kích thước sân:</strong> 105m x 68m
            </p>
            <p className="mb-2">
              <strong>Địa chỉ sân vận động:</strong> Đường 30/4, Đại lộ Bình
              Dương, TP Thủ Dầu
            </p>
            <p className="mb-2">
                Một, Bình Dương Là sân nhà của Aston Villa từ năm 1897, Villa
              Park là một trong số ít sân vận động đã tổ chức các trận đấu quốc
              tế trong ba thế kỷ khác nhau, trận đấu quốc tế cấp cao đầu tiên
              diễn ra vào năm 1899. Ngoài ra, đây là địa điểm thường xuyên tổ
              chức các trận bán kết Cúp FA trước khi chúng được chuyển đến
              Wembley.
            </p>
          </div>
        </div>
        <div className="w-">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3047583509406!2d105.76134447601956!3d21.02048848806105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345574d20b8f67%3A0xb34019170665308c!2zU8OibiB24bqtbiDEkeG7mW5nIFF14buRYyBnaWEgTeG7uSDEkMOsbmg!5e0!3m2!1svi!2s!4v1734303797804!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ClubStadium;
