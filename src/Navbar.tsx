import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function NavBar(): JSX.Element {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-item">
          <a href="/supplements">
            Thực phẩm chức năng{" "}
            <FontAwesomeIcon icon={faAngleDown} className="nav-icon" />
          </a>
          <div className="submenu">
            <a href="/#">Vitamin & Khoáng chất</a>
            <a href="/#">Sinh lý - Nội tiết tố</a>
            <a href="/#">Cải thiện tăng cường chức năng</a>
            <a href="/#">Hỗ trợ điều trị</a>
            <a href="/#">Hỗ trợ tiêu hóa</a>
            <a href="/#">Thần kinh não</a>
            <a href="/#">Hỗ trợ làm đẹp</a>
            <a href="/#">Sức khoẻ tim mạch</a>
            <a href="/#">Dinh dưỡng</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="/duoc-my-pham">
            Dược mỹ phẩm{" "}
            <FontAwesomeIcon icon={faAngleDown} className="nav-icon" />
          </a>
          <div className="submenu">
            <a href="/#">Chăm sóc da mặt</a>
            <a href="/#">Chăm sóc cơ thể</a>
            <a href="/#">Giải pháp làn da</a>
            <a href="/#">Chăm sóc tóc - da đầu</a>
            <a href="/#">Mỹ phẩm trang điểm</a>
            <a href="/#">Chăm sóc da vùng mắt</a>
            <a href="/#">Sản phẩm từ thiên nhiên</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="/cham-soc-ca-nhan">
            Chăm sóc cá nhân{" "}
            <FontAwesomeIcon icon={faAngleDown} className="nav-icon" />
          </a>
          <div className="submenu">
            <a href="/#">Hỗ trợ tình dục</a>
            <a href="/#">Thực phẩm - Đồ uống</a>
            <a href="/#">Vệ sinh cá nhân</a>
            <a href="/#">Chăm sóc răng miệng</a>
            <a href="/#">Đồ dùng gia đình</a>
            <a href="/#">Hàng tổng hợp</a>
            <a href="/#">Tinh dầu các loại</a>
            <a href="/#">Thiết bị làm đẹp</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="/thuoc">
            Thuốc <FontAwesomeIcon icon={faAngleDown} className="nav-icon" />
          </a>
          <div className="submenu">
            <a href="/#">Tra cứu thuốc</a>
            <a href="/#">Tra cứu dược chất</a>
            <a href="/#">Tra cứu dược liệu</a>
          </div>
        </li>
        <li className="nav-item">
          <a href="/thiet-bi-y-te">
            Thiết bị y tế{" "}
            <FontAwesomeIcon icon={faAngleDown} className="nav-icon" />
          </a>
          <div className="submenu">
            <a href="/#">Dụng cụ y tế</a>
            <a href="/#">Dụng cụ theo dõi</a>
            <a href="/#">Dụng cụ sơ cứu</a>
            <a href="/#">Khẩu trang</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
