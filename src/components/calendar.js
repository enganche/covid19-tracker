import React from 'react';

function GenerateDay() {
    
  let d = new Date();
  const dates = [
    'Chủ Nhật',
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
    'Thứ Bảy'
  ];

  return (<div>
    <h4>{dates[d.getDay()]} ngày {d.getDate()} tháng {d.getMonth() + 1} năm {d.getFullYear()}</h4>
  </div>);
}

export default GenerateDay;
